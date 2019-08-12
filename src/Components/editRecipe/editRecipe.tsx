import * as React from 'react';

const edit = (props:any) => (





    <div>

        <form>

            <div className="form-group">

              <label>Title</label>

              <input type="text" className="form-control" id="id-input" placeholder="Enter id" />

              <input type="text" className="form-control" id="edit-title" placeholder="Title" />

              <small className="form-text text-muted">*required*</small>

            </div>

            <div className="form-group">

              <label>Ingredients</label>

              <input type="text" className="form-control" id="edit-ingredients" placeholder="Ingredients" />

              <small className="form-text text-muted">*required*</small>

            </div>

            <div className="form-group">

              <label>Calories</label>

              <input type="text" className="form-control" id="edit-cal" placeholder="Enter any sentence" />

            </div>

            <button type="button" className="btn btn-warning" >edit</button>

            

            



          </form>

    </div>





)



export default edit;
