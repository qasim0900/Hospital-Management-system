const token = (value) =>{
    if(value){
        const {access, refresh} = value
        localStorage.setItem("access",access)
        localStorage.setItem("refresh",refresh)
    }
}
const get_token = () =>{
    let access = localStorage.getItem("access")
    let refresh = localStorage.getItem("refresh")
    return{access,refresh}
}
const Remove_token = () =>{
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
}
export {token,get_token,Remove_token}