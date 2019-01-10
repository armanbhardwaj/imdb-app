import React from 'react';
// import '../../src/';

const Button = (props) =>
{
    return( <button className={props.className} onClick={props.onClick}>{props.children}</button>);
}
export default Button;