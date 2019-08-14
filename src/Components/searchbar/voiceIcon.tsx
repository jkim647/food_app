import * as React from 'react';
import MediaStreamRecorder from 'msr';
import FontAwesome from 'react-fontawesome'
import './voiceIcon.css'
interface ISearchProps{
    searchVoice:any
  
 }
 
 interface IState{
   
    voiceText: string

    }
 
 class OnlineAPI extends React.Component<ISearchProps, IState> {
    constructor(props:any){
        super(props);
        this.state={
            voiceText:''
          }
        }

        public postAudio = (blob:any) => {
            fetch('https://westus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-US', {
                body: blob, // this is a .wav audio file    
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer' + window.localStorage.getItem("keys"),
                    'Content-Type': 'audio/wav;codec=audio/pcm; samplerate=16000',
                    'Ocp-Apim-Subscription-Key': '7adbab792b34492ab4b0e6ba3886c66e'
                },    
                method: 'POST'
            }).then((res) => {
                console.log(res)
                return res.json()
            }).then((res: any) => {
                console.log(res.DisplayText)
                this.setState({voiceText:res.DisplayText})
                this.props.searchVoice(this.state.voiceText)
            }).catch((error) => {
                console.log("Error", error)
            });
        }


        public searchTagByVoice =() =>{

            const mediaConstraints = {
                audio: true
        };
        
        const onMediaSuccess = (stream: any) => {
            
            const mediaRecorder = new MediaStreamRecorder(stream);
            mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
            mediaRecorder.ondataavailable = (blob: any) => {
             this.postAudio(blob);
                mediaRecorder.stop()
            }
            mediaRecorder.start(3000);
        }
    
        function onMediaError(e: any) {
            console.error('media error', e);
        }
        
        fetch('https://westus.api.cognitive.microsoft.com/sts/v1.0/issueToken', {
            headers: {
                'Content-Length': '0',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Ocp-Apim-Subscription-Key': '7adbab792b34492ab4b0e6ba3886c66e'
            },
            method: 'POST'
            
        }).then((response) => {
            return response.text()
        }).then((response) => {
            console.log(response)
            window.localStorage.setItem("Keys", response)
    
            
        }).catch((error) => {
            console.log("Error", error)
        });
    
    
    
        navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)
    
        
        }

    public render() {
        return (
            <span className="voiceIcon">
                 <FontAwesome onClick={this.searchTagByVoice} name="microphone" size="2x"/>
            </span>
        )
    }
}

export default OnlineAPI;
