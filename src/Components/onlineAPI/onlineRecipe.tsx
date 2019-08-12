import * as React from 'react';
import './onlineRecipe.css'
import Modal from '../modal/modal'
import Backdrop from '../backdrop/backdrop'

interface IFoodProps{
    recipe:any[];
    className : string;
}

interface IState{
    creating: boolean;
    ingredients: [];
    title: string;
}


class Report extends React.Component<IFoodProps,IState>{

    constructor(props:any){
        super(props);
        this.state={
           creating:false, 
           ingredients: [],
           title:''

          
           }
        
           
        }
        

    public startCreateEvent = (labels:any, titles:any) =>{
        
         this.setState({creating: true});
         this.setState({ingredients:labels})
         this.setState({title: titles})
         
    }
    public cancelModalBackdrop = () => {
        this.setState({creating:false})
    }
    
    public render(){
        const recipes= this.props.recipe
        return(
            <div>
            {this.state.creating && <Modal ingredients={this.state.ingredients} title={this.state.title} onCancel={this.cancelModalBackdrop}/>}
            <div className="row c">
                
                
                {recipes.map((recipe:any,i) => {
                    return (
                       
                        <div key={i} className="col-md-4 c">
                            <div className="plain-box">
                                <div>
                                    <h5 className="text">{recipe.recipe.label}</h5>
                                    <p>{i}</p>
                                </div>

                                <div>
                                    <img 
                                    className="recipe__box-img" 
                                    src={recipe.recipe.image} alt={recipe.title}/>
                                </div>

                                <button className="view" onClick={()=>this.startCreateEvent(recipe.recipe.ingredients, recipe.recipe.label)}>View Recipe</button> 
                                
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