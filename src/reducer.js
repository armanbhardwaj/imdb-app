const initialState = {input:'', search: '', url: '', title: '', actors:'',plot:'', genre:''}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE':
            return Object.assign({}, state, {input:action.input, search: action.value })
        case 'FETCH':
            // console.log("reducer" , action.data);
            return Object.assign({}, state, { url: action.data.Poster, title: action.data.Title, input:'', actors:action.data.Actors,plot:action.data.Plot, genre:action.data.Genre})
        default: return state;
    }
}

export default reducer;