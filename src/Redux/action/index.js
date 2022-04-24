export const category = (name) =>{
    return (dispatch)=>{
        dispatch({
            type:"cart",
            payload:name
        })
    }
}