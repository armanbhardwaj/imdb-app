import React from 'react';

const Input =(props)=>
{
    return( <input placeholder={props.placeholder} className={props.className} name={props.name} onChange={props.onChange} type={props.type} value={props.value} />);
       
}
export default Input;