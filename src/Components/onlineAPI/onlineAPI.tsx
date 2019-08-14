import * as React from 'react';
// import FontAwesome from 'react-fontawesome';
import './onlineAPI.css'
import Searchbar from '../../Components/searchbar/searchbar'
import OnlineRecipe from './onlineRecipe'


    const APIKEY = '7917c5a1d300d84a797507e84947b107'
    const APIID = 'e60875e8'


interface IState{
    foods:any[],
    inputs: string
    
  }

class OnlineAPI extends React.Component<{}, IState>{
    constructor(props:any){
    super(props);
    this.state={
       foods:[],
       inputs:""
      
       }
    
       
    }
    

       public getReport = async (searchItem:any) => {
           

            this.setState({inputs:searchItem})

            const response = await fetch(`https://api.edamam.com/search?q=${searchItem}&app_id=${APIID}&app_key=${APIKEY}`);
            const data= await response.json();
            console.log(data)
            this.setState({foods:data.hits})
         
       }

    public render(){
        
        return(
            <div>
                
                <Searchbar 
                    getReports={this.getReport} 
                />
                
                <OnlineRecipe recipe={this.state.foods} className="c" />
                
             </div>
        )

    }
}

export default OnlineAPI;