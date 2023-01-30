import {AppBar,Toolbar,Typography,Button, Box} from "@mui/material"
import { NavLink } from "react-router-dom"
function NavBar(){
    return <>
      <Box elevation={10} sx={{flexGrow:1}}>
        <AppBar position="static" style={{background:"transparent"}}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{color:"black",fontWeight:"bold",flexGrow:1}} >
                        Hospital Managment System
                </Typography>
                <Button variant="out-lined" style={({isActive})=>{return {backgroundColor: isActive ? "rgba(0,0,0,0.2)":"transparent"}}} sx={{fontWeight:"bold",color:"black",textTransform:"none"}} component={NavLink} to="/">Home</Button>
                <Button variant="out-lineed" style={({isActive})=>{return {backgroundColor: isActive ? "rgba(0,0,0,0.2)":"transparent"}}} sx={{fontWeight:"bold",color:"black",textTransform:"none"}} component={NavLink} to="/Login">Login</Button>
                <Button variant="out-lined" style={({isActive})=>{return {backgroundColor: isActive ? "rgba(0,0,0,0.2)":"transparent"}}} sx={{fontWeight:"bold",color:"black",textTransform:"none"}} component={NavLink} to="/Signin">Signin</Button>
            </Toolbar>
        </AppBar>
      </Box>
    </>
}
export default NavBar