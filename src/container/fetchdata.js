import axios from 'axios';

export function fetchdata(search)
{
  return  axios.get(`https://www.omdbapi.com/?t=${search}&apikey=e15cae12`)
  .then(res =>  res.data )
  
}