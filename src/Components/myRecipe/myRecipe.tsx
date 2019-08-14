import * as React from 'react';
import './myRecipe.css'



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
                                    <p>{recipe.cal}</p>
                                </div>

                                

                                <button className="view" onClick={()=>this.selectRow(i)}>Edit</button> 
                                <button className="view" onClick={()=>this.props.delete(recipe.foodId)}>Delete</button> 
                                
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