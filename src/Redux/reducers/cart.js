const reducer = (state="",action)=>{
    if(action.type==="cart"){
        return state+action.payload;
    }else{
        return state;
    }
}
export default reducer;