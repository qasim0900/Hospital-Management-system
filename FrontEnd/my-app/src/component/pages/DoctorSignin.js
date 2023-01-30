import {TextField,Grid, Button,Typography,AppBar,Toolbar,Box,Card} from "@mui/material"
import { useState } from "react"
import { token } from "../../services/token"
import { useNavigate } from "react-router-dom"
import pic3 from "../../images/pic3.png"
import {useDoctorUserMutation} from "../../services/userAuthApi"
function DoctorSignin(){
    const [serverError,setserverError] = useState({})
    const navigate = useNavigate()
    const [registerUser] = useDoctorUserMutation()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            email: data.get("email"),
            Name: data.get("Name"),
            password: data.get("password"),
            password2: data.get("password2"),
        }
        const reg = await registerUser(actualData)
        if(reg.error){
            setserverError(reg.error.data)
        }
        if(reg.data){
            token(reg.data.role)
            token(reg.data.token)
            navigate("/Login")
        }
    }
    return <>
      <Grid container>
        <Grid item lg={5} md={12} sm={7} xs={12} sx={{mr:20}}>
            <Box component="form" noValidate id="Registeration-form" onSubmit={handleSubmit} sx={{mx:4,my:4}}>
                <Card sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
                <AppBar position="static" style={{background:"transparent"}}>
                <Toolbar>
                  <Typography variant="h5" component="div" sx={{color:"black",fontWeight:"bold",flexGrow:1}} >
                    Docter Signin
                  </Typography>
                </Toolbar>
                  </AppBar>
                 <TextField 
                 size="small" 
                 sx={{mx:4,mt:10,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 required 
                 id="email" 
                 name="email" 
                 label="Email Address"/>
                  { serverError.email ? <Typography style={{fontSize:12, color:"red", paddingLeft:10}}>{serverError.email}</Typography>:""}
                 <TextField 
                 size="small" 
                 sx={{mx:4,my:2, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 required 
                 type="type"  
                 id="Name" 
                 name="Name" 
                 label="Name"/>
                 { serverError.Name ? <Typography style={{fontSize:12, color:"red", paddingLeft:10}}>{serverError.Name}</Typography>:""}
                 <TextField 
                 size="small" 
                 sx={{mx:4, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 required 
                 type="password"  
                 id="password" 
                 name="password" 
                 label="Password"/>
                 { serverError.password ? <Typography style={{fontSize:12, color:"red", paddingLeft:10}}>{serverError.password}</Typography>:""}
                 <TextField 
                 size="small" 
                 sx={{mx:4,my:2, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 required 
                 type="password"  
                 id="password2" 
                 name="password2" 
                 label="Confirm Password"/>
                 { serverError.password2 ? <Typography style={{fontSize:12, color:"red", paddingLeft:10}}>{serverError.password2}</Typography>:""}
                 <Box>
            <Button 
            type="submit" 
            variant="out-lined" 
            sx={{mx:4,my:4,px:5 ,fontWeight:"bold",background:"rgba(0,0,0,0.2)" , 
            color:"black"}}>Signin</Button>
            </Box>
        </Card>
            </Box>
        </Grid>
            <Grid item lg={5} md={5} sm={5} xs={5} sx={{
                width:"auto", height:"auto",
                backgroundImage: `url(${pic3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"cover",
                display:{xs:"none", md:"block"}}}>
        </Grid>
        </Grid>

    </>
}
export default DoctorSignin