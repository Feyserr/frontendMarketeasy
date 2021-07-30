import React, {Component} from "react";
import {StyleButton} from "./style";

export const Button = ({label, onclick, ...rest}) =>{
    return(
        <StyleButton onClick={onclick} {...rest}>{label}</StyleButton>
    )
}
