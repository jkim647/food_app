

import * as React from 'react';
import './modal.css'

const Modal = (props:any) => (
    <div className="ingredientsModal">
            <h3>{props.title}</h3>
           
            {props.ingredients.map((ingredient:any,i:any)=>{
                return(
                 <p key={i}>{ingredient.text}</p>)
                 
             })}
             
             <a href={props.address}>More Info</a>
            
             <button className="btn" onClick={props.onCancel}>Cancel</button>
    </div>

);

export default Modal;