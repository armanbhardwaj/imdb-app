import React from 'react';

const Input =(props)=>
{
    console.log(props);
    return( <input placeholder={props.placeholder} className={props.className} name={props.name} onChange={props.onChange} type={props.type} onKeyPress={props.onKeyPress} value={props.value} />);
       
}
export default Input;