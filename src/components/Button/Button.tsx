import React from "react";
import { styles } from "./Button.styles";

export interface ButtonProps {
    text: string;
    type: 'primary' | 'secondary' | 'warning' | 'danger';
    click?: () => void;
}
const Button = (props: ButtonProps) => {
    const getBtnStyle = () => {
        switch(props.type){
            case 'primary':
                return styles.primary;
            case 'secondary':
                return styles.secondary;
            case 'warning':
                return styles.warning;
            case 'danger':
                return styles.danger;
        }
        return styles.primary;
    }
    return <button onClick={props.click} style={getBtnStyle()}>{props.text}</button>
}
export default Button;
