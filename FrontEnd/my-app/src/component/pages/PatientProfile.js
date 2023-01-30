import {TextField,Grid,Paper,AppBar,Toolbar,Button,Typography,Box,Card} from "@mui/material"
import { unsetUserToken } from "../../features/counter/counterSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Outlet} from "react-router-dom"
import {get_token, Remove_token} from "../../services/token"
import {usePatientProfileQuery} from "../../services/userAuthApi"
function PatientProfile(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {access} = get_token()
    const {data} = usePatientProfileQuery(access)
    console.log("data:",data)
   const handleChange = () =>{
        dispatch(unsetUserToken({access:null}))
        Remove_token()
        navigate("/")

    }
    return<>
    <Grid container>
<Grid item lg={11} md={12} sm={12} xs={12} sx={{mx:"auto",my:4,}}>
<Paper sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
<Box>
<AppBar position="static" style={{background:"transparent"}}>
<Toolbar>
    <Typography variant="h5" component="div" sx={{color:"black",fontWeight:"bold",flexGrow:1}} >
            Patient Profile
    </Typography>
    <Button type="submit" variant="out-lined" sx={{mt:2,mr:1,fontWeight:"bold",background:"rgba(0,0,0,0.2)" , color:"black"}} onClick={handleChange}>Logout</Button>
</Toolbar>
</AppBar>
<Grid container>
        <Grid item lg={5} md={12} sm={7} xs={12}>
            <Box component="form" noValidate id="Registeration-form" sx={{mx:4,my:4}}>
                <Card sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
                 <TextField 
                 inputProps={{readOnly:true}}
                 size="small" 
                 sx={{mx:4,mt:5,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 id="email" 
                 defaultValue={"Qasim"}
                 name="email" 
                 label="Email Address"/>
                 <TextField
                 inputProps={{readOnly:true}}
                 size="small" 
                 sx={{mx:4,my:2, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 type="type"  
                 id="Name" 
                 name="Name"
                 label="Name"/>
                 <TextField 
                 inputProps={{readOnly:true}}
                 size="small" 
                 sx={{mx:4, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 type="data"  
                 id="Date" 
                 name="Date" 
                 label="Date of Birth"/>
                 <TextField 
                 inputProps={{readOnly:true}}
                 size="small" 
                 sx={{mx:4,my:2, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 type="Blood_Group"  
                 id="Bloog_Group" 
                 name="Blood_Group" 
                 label="Blood Group"/>
                 <TextField 
                 inputProps={{readOnly:true}}
                 size="small" 
                 sx={{mx:4, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 type="number"  
                 id="" 
                 name="Mobile_No" 
                 label="Mobile No"/>
                  <TextField 
                  inputProps={{readOnly:true}}
                 size="small" 
                 sx={{mx:4,my:2, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 type="text"  
                 id="Address" 
                 name="Address" 
                 label="Address"/>
                 <TextField 
                 inputProps={{readOnly:true}}
                 size="small" 
                 sx={{mx:4,mb:10,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 type="text"  
                 id="Department" 
                 name="Department" 
                 label="Department"/>
        </Card>
            </Box>
        </Grid>
        <Grid item lg={7} md={5} sm={5} xs={5} sx={{width:"auto", height:"auto"}}>
            <Outlet/>
            </Grid>
        </Grid>
</Box>
</Paper>
</Grid>
</Grid>
   
    </>
}
export default PatientProfile