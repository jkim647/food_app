

import * as React from 'react';
import './modal.css'

const Modal = (props:any) => (
    <div className="ingredientsModal">
            <h3>{props.title}</h3>
            {props.ingredients.map((ingredient:any,i:any)=>{
                return(
                 <p key={i}>{ingredient.text}</p>)
                 
             })}
            
             <button className="" onClick={props.onCancel}>Cancel</button>
    </div>

);

export default Modal;