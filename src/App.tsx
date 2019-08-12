import * as React from 'react';
import 'src/App.css'
import Heads from './Components/Header/Header'
import OnlineAPI from './Components/onlineAPI/onlineAPI'
import MyAPI from './Components/myAPI/myAPI'

interface IState{
  
  openOnlineApi: boolean
}
class App extends React.Component<{}, IState>{
  public constructor(props: any) {
    super(props);
    this.state = {
      openOnlineApi: false  
    }
  }

  public startOnlineApi = () => {
    this.setState({openOnlineApi: true})
  }

  


  public render() {
    return (
    <div>
     <Heads open={this.startOnlineApi}/>
      {this.state.openOnlineApi&& <OnlineAPI/>}
      <MyAPI />
    </div>
    );
  }
}

export default App;