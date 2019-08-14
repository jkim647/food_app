import * as React from 'react';
import 'src/App.css'
import Heads from './Components/Header/Header'
import OnlineAPI from './Components/onlineAPI/onlineAPI'
import MyAPI from './Components/myAPI/myAPI'
// import * as firebase from 'firebase';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as Webcam from "react-webcam";



interface IState{
  
  openOnlineApi: boolean
  openMyApi: boolean
  refCamera: any
  authenticated: boolean
  predictionResult: any
  
  
}
class App extends React.Component<{}, IState>{
  
  public constructor(props: any) {
    super(props);
    this.state = {
      authenticated:false,
      openMyApi: false,
      openOnlineApi: true,
      predictionResult: null,
      refCamera: React.createRef(),
      
      
    }
    this.authenticate = this.authenticate.bind(this)
}
  

  

public startOnlineApi = () => {
    this.setState({openMyApi:false,openOnlineApi: true,
      
    })
  }

  public startMyApi = () => {
    this.setState({openMyApi: true,
      openOnlineApi: false})
  }

  public NoAuthenticate = () => {
    this.setState({authenticated:true})
  }
  



  


  public render() {
      const{authenticated} = this.state
    return (
      
    <div>
      <div>
      {(!authenticated) ?
        <div>
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            ref={this.state.refCamera}
          />
            <div className="row nav-row">
              <div className="btn btn-primary bottom-button" onClick={this.authenticate}>Login</div>
              <div className="btn btn-primary bottom-button" onClick={this.NoAuthenticate}>dont use</div>
            </div>
          </div>
        : ""}

        {(authenticated)? 
          <div><Heads open={this.startOnlineApi} openMine={this.startMyApi}/>
            {this.state.openOnlineApi&& <OnlineAPI />}
            {this.state.openMyApi&&<MyAPI />}</div>:""}
          
      </div>
    </div>
       
   );
  }

  private getFaceRecognitionResult(image: string) {
    const url = "https://southcentralus.api.cognitive.microsoft.com/customvision//v3.0/Prediction/97cc1ddd-9562-4081-9307-19a370abfa56/classify/iterations/Authentication/image"
    if (image === null) {
        return;
    }
    const base64 = require('base64-js');
    const base64content = image.split(";")[1].split(",")[1]
    const byteArray = base64.toByteArray(base64content);
    fetch(url, {
        body: byteArray,
        headers: {
          "Content-Type": "application/octet-stream", 
          "Prediction-Key": "23cf3021289f47fd96e8921c1eb28195", 
          "cache-control": "no-cache",
          
          
        },
        method: "POST"
    })
        .then((response: any) => {
            if (!response.ok) {
                // Error State
                alert(response.statusText)
                console.log(response)
            } else {
                response.json().then((json: any) => {
                    console.log(json.predictions[0])

                    this.setState({ predictionResult: json.predictions[0] })
                    if (this.state.predictionResult.probability > 0.3) {
                        this.setState({ authenticated: true })
                    } else {
                        this.setState({ authenticated: false })
                        console.log(json.predictions[0].tagName)
                    }
                })
            }
        })
}

private authenticate() {
  const screenshot = this.state.refCamera.current.getScreenshot();
  this.getFaceRecognitionResult(screenshot);
}
 
}

export default App;