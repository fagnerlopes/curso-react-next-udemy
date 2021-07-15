import { Component } from "react";
import './style.css';

export class Button extends Component {    

    render() {
        const {text, onClick, disabled, displayButton} = this.props;
        const styleButton = {
            display: "none"
        };
        return (
            <div className="button-container">
                <button 
                    disabled={disabled}
                    className="btn-load-more" 
                    onClick={onClick}>{text}                
                </button>
            </div>            
        );
    }
}