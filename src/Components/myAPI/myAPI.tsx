import * as React from 'react';
import './myAPI.css'
import Myrecipe from '../myRecipe/myRecipe'
import FontAwesome from 'react-fontawesome'
import CreateRecipe from '../createRecipe/createRecipe'
// import SearchBar from '../searchbar/searchbar'
// import EditRecipe from '../editRecipe/editRecipe'
import EditRecipeModal from '../myRecipeModal/editRecipeModal'

interface IState{
    lists:any[],
    ingredients:string,
    currentRecipe:any
    openEditModal: boolean
    openCreateRecipeModal:boolean
    
  }

class MyAPI extends React.Component<{}, IState> {

    public constructor(props: any) {
        super(props);
        this.state = {
        currentRecipe:{"foodId":0,"title":"Loading","cal":"0","ingredients":""},
        ingredients: '',
         lists:[],
         openCreateRecipeModal:false,
         openEditModal:false,
        
         
         
        }
    }

    public selectCurrentRecipe= (recipe:any) => {
        this.setState({
            currentRecipe:recipe,
            openEditModal:true
        })
        console.log(this.state.currentRecipe)
    }

    public closeEditModal =()=>{
        this.setState({
            openEditModal:false
        })
    }

    public openCreateRecipe= ()=>{
        this.setState({
            openCreateRecipeModal:true
    })}

    public closeCreateRecipe= ()=>{
        this.setState({
            openCreateRecipeModal:false
    })
    }
    

   

    public uploadList = () => {
      //   const id = document.getElementById("id-input") as HTMLInputElement
        const titleInput = document.getElementById("title") as HTMLInputElement
        const ingredients = document.getElementById("ingredients") as HTMLInputElement
        const cal = document.getElementById("calories") as HTMLInputElement
        if (titleInput === null || ingredients === null || cal === null) {
            return;
        }
        
        const ingredient = ingredients.value
        const title = titleInput.value
        const cals = cal.value
        // const ids = id.value 
       fetch('https://foodlove.azurewebsites.net//api/Foods', {
            body: JSON.stringify({
                "cal":cals,
                "ingredients": ingredient,
                "title": title
            }),

            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        })
        .then((response : any) => {
            if (!response.ok) {
                // Error State
                alert(response.statusText)
                this.updateList()
            } else {
                location.reload()
            }
        })

    }

    public updateList = () => {
        fetch('https://foodlove.azurewebsites.net//api/Foods',{method:'GET'}).
        then(res=>res.json())
        .then(json =>{
            this.setState({lists:json})
            console.log(this.state.lists)
            

        })
            
        
    }

    public deleteRecipe = (id:any)=>{
      fetch("https://foodlove.azurewebsites.net//api/Foods/" +id,{method:"DELETE"}).then(()=>{
          this.updateList()
      })

    }

    public componentDidMount = () => {
        this.updateList()
        
    }
    
    public render() {
        return (
            <div>
                <div className="addRecipe">
                
                <FontAwesome onClick={this.openCreateRecipe} className="plusFont" name="plus" size="2x"/>
                </div>
                <Myrecipe recipeList={this.state.lists} delete={this.deleteRecipe} edit={this.selectCurrentRecipe} />
                { /* <EditRecipe edit={this.editRecipe} /> */}
                {this.state.openCreateRecipeModal &&<CreateRecipe add={this.uploadList} close={this.closeCreateRecipe}/>}


                {this.state.openEditModal &&<EditRecipeModal editRecipe={this.state.currentRecipe} closeModal={this.closeEditModal}/>}

                

            </div>
        )
    }
}

export default MyAPI;