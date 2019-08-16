import * as React from 'react';
import './myRecipe.css'
import {FacebookShareButton, FacebookIcon,} from 'react-share'




interface ILoveprops{
    recipeList:any[];
    delete:any
    edit:any
    
    
    }
interface IState{
        creating: boolean;
        ingredients: [];
        title: string;
}
    

class MyRecipe extends React.Component<ILoveprops, IState> {

    constructor(props:any){
        super(props);
        this.state={
           creating:false, 
           ingredients: [],
           title:''}
        
        }
        
        public selectRow=(index:any)=>{
            const selectRecipe= this.props.recipeList[index]
            if (selectRecipe != null) {
                this.props.edit(selectRecipe)
            }
        }
    public render() {
        return (
            <div className="row ">
                 {this.props.recipeList.map((recipe:any,i) => {
                    return (
                       
                        <div key={i} className="col-md-4 c myRecipe">
                            <div className="plain-box">
                                <div>
                                    <h4 className="text">{recipe.title}</h4>
                                    <p>{recipe.ingredients}</p>
                                    <p>Calories: {recipe.cal}</p>
                                </div>

                                

                                <button className="view" onClick={()=>this.selectRow(i)}>Edit</button> 
                                <button className="view" onClick={()=>this.props.delete(recipe.foodId)}>Delete</button> 
                                <FacebookShareButton
                                    className="shareIcon"
                                    url= {'https://myfoodrecipe.azurewebsites.net/?fbclid=IwAR05KMrNbs365SMvy10GorgtJHkUpX1tkopYk-u6Y3kmLk9w0zaQGjanB5o'}
                                    quote={recipe.ingredients}>
                                    
                                   
                                    <FacebookIcon
                                    size="2.5rem"
                                    
                                    />
                                </FacebookShareButton>
                               

                                
                                
                            </div>  
                        </div>
                        
                        )
                    })
                }
            </div>
        )
    }
}



export default MyRecipe