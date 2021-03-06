import * as React from 'react';
import './createRecipe.css'
const sideDrawer = (props:any) => (





    <div className="col-md-4 c">

        <form className="makeForm">

            <div className="form-group">

              <label>Title</label>
              <input type="text" className="form-control" id="title" placeholder="Title" />

              <small className="form-text text-muted">*required*</small>

            </div>

            <div className="form-group">

              <label>Ingredients</label>

              <input type="text" className="form-control" id="ingredients" placeholder="Ingredients" />

              <small className="form-text text-muted">*required*</small>

            </div>

            <div className="form-group">

              <label>Calories</label>

              <input type="text" className="form-control" id="calories" placeholder="Enter any sentence" />

            </div>

            <button type="button" className="btn" onClick ={props.add}>Submit</button>

            <button type="button" className="btn" onClick ={props.close}>Cancel</button>

            



          </form>

    </div>





)



export default sideDrawer;
