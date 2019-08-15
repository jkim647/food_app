import * as React from 'react';
import './Header.css'
import foodLogo from "./jslogo.png";

interface IProps{
    open: (event: React.MouseEvent<HTMLButtonElement>) => void
    openMine: (event: React.MouseEvent<HTMLButtonElement>) => void
}
interface IState{
    
    
    input: string;
}

export default class Header extends React.Component<IProps,IState>{
    public constructor(props:any){
        super(props);
        this.state = {
            input: "",
        }
    }

    public render(){
       
        return(
            <div className="Header">
                <div className="row">
                    <img src={foodLogo} alt="foodlogo" className="logo"/>
                   
                </div>

                <div className="text-box">
                    <h1>Welcome to FoodRecipe</h1>
                    
                    <button className="btn btn-full js--scroll-to-plans color" onClick={this.props.open}>Online Recipe</button>
                    <button className="btn btn-ghost js--scroll-to-start color" onClick={this.props.openMine}>Show mine</button>
                </div>
            </div>
        )
    }
}