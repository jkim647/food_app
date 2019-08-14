import * as React from 'react';
import FontAwesome from 'react-fontawesome'
import VoiceIcon from './voiceIcon'
import './searchbar.css'
// import { IconButton } from '@material-ui/core';

interface ISearchProps{
   getReports:any
 
}

interface IState{
  
   input: string
   }

class OnlineAPI extends React.Component<ISearchProps, IState>{

   constructor(props:any){
      super(props);
      this.state={
         input:''
        }
      }

   public doSearch = () =>{
      console.log("doSearch")
      console.log(this.state.input)
      this.props.getReports(this.state.input)
   }

   public voiceSearch = (voice:any) => {
      this.setState({input:voice})
      this.props.getReports(voice)

   }
   
   public render() {
      return (
         <div className="searchBar">
         <div className="searchBar-content">

           <input

                 type="text"
                 className="searchbar-input"
                 placeholder="Search"
                 name="recipeName"
                 onChange={(event: any) => this.setState({input:event.target.value})}
                 value={this.state.input}
            />
           
            
            <FontAwesome onClick={this.doSearch} className="fa-search" name="search" size="2x"/>
            <VoiceIcon  searchVoice={this.voiceSearch}/>
           
         
           </div>

      </div>
      )
   }
}

export default OnlineAPI