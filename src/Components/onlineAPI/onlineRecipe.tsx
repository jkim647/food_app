import * as React from 'react';
import './onlineRecipe.css'
import Modal from '../modal/modal'
import Backdrop from '../backdrop/backdrop'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from 'react-share'

interface IFoodProps{
    recipe:any[];
    className : string;
}

interface IState{
    creating: boolean;
    ingredients: [];
    title: string;
    cals: number;
    save:boolean;
    url: string;

}


class Report extends React.Component<IFoodProps,IState>{

    constructor(props:any){
        super(props);
        this.state={
           creating:false, 
           ingredients: [],
           title:'',
           cals:0,
           save:false,
           url:''

          
           }
        
           
        }
        

    public startCreateEvent = (labels:any, titles:any, calories:any,  urls:any) =>{
        
         this.setState({creating: true});
         this.setState({ingredients:labels})
         this.setState({title: titles})
         this.setState({cals: calories})
         this.setState({url: urls})
    }

    public saveInMyFolder = (labels:any, titles:any, calories:any) =>{
        
        this.setState({save: true});
        this.setState({ingredients:labels})
        this.setState({title: titles})
        this.setState({cals: calories})
        
   }

    public cancelModalBackdrop = () => {
        this.setState({creating:false})
    }
    
    
    public render(){
        
        console.log("rerendering onlineRecipe")
        const recipes= this.props.recipe
        console.log(recipes)
        return(
            <div>
            {this.state.creating && <Modal ingredients={this.state.ingredients} title={this.state.title} onCancel={this.cancelModalBackdrop} address={this.state.url}/>}
            <div className="row c">
            
                
                
                {recipes.map((recipe:any,i) => {

                    return (
                       
                        <div key={i} className="col-md-4 c myRecipe">
                            <div className="plain-box">
                                <div>
                                    <h5 className="text">{recipe.recipe.label}</h5>
                                    
                                </div>

                                <div>
                                    <img 
                                    className="recipe__box-img" 
                                    src={recipe.recipe.image} alt={recipe.title}/>
                                </div>

                                <button className="view" onClick={()=>this.startCreateEvent(recipe.recipe.ingredients, recipe.recipe.label, recipe.recipe.calories,recipe.recipe.url)}>View Recipe</button> 
                                
                               
                                <FacebookShareButton
                                    className="shareIcon"
                                    url= {recipe.recipe.url}
                                    quote={recipe.recipe.title}>
                                    <FacebookIcon
                                    size="2.5rem"
                                    
                                    />
                                </FacebookShareButton>
                               

                                
                                <TwitterShareButton
                                    className="shareIcon"
                                    url={recipe.recipe.url}
                                    title={recipe.recipe.title}
                                    >
                                    <TwitterIcon
                                    size="2.5rem"/>
                                   
                                </TwitterShareButton>
                              


                                
                            </div>
                        </div>
                        
                        )
                    })
                }
                {this.state.creating && <Backdrop/>}
                
              
                </div>
                
                </div>)
    }
}

export default Report