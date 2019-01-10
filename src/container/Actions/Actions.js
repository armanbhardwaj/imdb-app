import {ACTION_CLICK, ACTION_FETCH, ACTION_UPDATE} from '../../constants/constants';


export const InputAC = (value) =>
{
    return{ type:ACTION_UPDATE,value:value}
}
export const ClickAC = () =>
{
    return{type:ACTION_CLICK}
}
export const getApiData =(data)=>
{
    return {type:ACTION_FETCH, data}
}
