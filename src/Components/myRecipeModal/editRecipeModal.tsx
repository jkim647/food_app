import * as React from 'react';

interface IProps {
    
    editRecipe:any
    closeModal:any
}

interface IState {
    open: boolean
}

class MyRecipeModal extends React.Component<IProps, IState> {

    public editRecipe = () => {
        const editIngredients= document.getElementById("edit-ingredients") as HTMLInputElement
        const editCal= document.getElementById("edit-Calories") as HTMLInputElement
        
        const ingredients = editIngredients.value
        const cal = editCal.value
        
        fetch("https://foodlove.azurewebsites.net//api/Foods/"+ this.props.editRecipe.foodId, {
        body: JSON.stringify({
            
            "cal":cal,
            "foodId":this.props.editRecipe.foodId,
            "ingredients": ingredients,
            "title":this.props.editRecipe.title,
            
                  
              }),
              headers: {'cache-control': 'no-cache','Content-Type': 'application/json'},
              method: 'PUT'
            })
            
            .then((response : any) => {
          if (!response.ok) {
            // Error State
            alert(response.statusText + "!! ")
          } else {
            location.reload()
          }
          })
        

    }

   public  render() {
        return (
            <form>
                        <div className="form-group">
                            <h4>{this.props.editRecipe.title}</h4>
                            <label>Calories</label>
                            <input type="text" className="form-control" id="edit-Calories" placeholder="Enter Calories"/>
                            <small className="form-text text-muted">You can edit Calories</small>
                        </div>
                        <div className="form-group">
                            <label>Ingredients</label>
                            <input type="text" className="form-control" id="edit-ingredients" placeholder="Enter Ingredients"/>
                            <small className="form-text text-muted">You can edit Ingredients</small>
                        </div>
                        <button type="button" className="btn" onClick={this.editRecipe}>Save</button>
                        <button type="button" className="btn" onClick={this.props.closeModal}>Cancel</button>
                    </form>
        )
    }
}

export default MyRecipeModal