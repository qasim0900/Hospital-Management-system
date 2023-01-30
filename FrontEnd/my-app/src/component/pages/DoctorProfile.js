import {TextField,Grid,Paper,AppBar,Toolbar,Button,Typography,Box,Card,IconButton,Badge} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import { unsetUserToken } from "../../features/counter/counterSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Outlet} from "react-router-dom"
import {get_token, Remove_token} from "../../services/token"
import {useDoctorProfileQuery} from "../../services/userAuthApi"
function DoctorProfile(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {access} = get_token()
    const {data} = useDoctorProfileQuery(access)
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
            Dr. {data?.Name}
    </Typography>
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={1} color="error">
                <MailIcon 
                sx={{color:"rgba(0,0,0,0.5)"}}/>
              </Badge>
            </IconButton>
    <Button type="submit" variant="out-lined" sx={{ml:2,textTransform:"none",fontWeight:"bold",background:"rgba(0,0,0,0.2)" , color:"black"}} onClick={handleChange}>Logout</Button>
    
</Toolbar>
</AppBar>
<Grid container>
        <Grid item lg={7} md={5} sm={7} xs={12}>
            <Box component="form" noValidate id="Registeration-form" sx={{mx:4,my:4}}>
                <Card sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
                <TextField 
                 size="small" 
                 sx={{mx:4,mt:5,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 label="D_ID"
                 InputLabelProps={{shrink: true}}
                 value={data?.id}/>
                 <TextField 
                 size="small" 
                 sx={{mx:4,my:2,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 label="Email Address"
                 InputLabelProps={{shrink: true}}
                 value={data?.email}/>
                 <TextField
                 size="small" 
                 sx={{mx:4, width:"90%",color: "rgba(0,0,0,0.2)"}}   
                 InputLabelProps={{shrink: true}}
                 value={data?.Name}
                 label="Name"/>
                 <TextField 
                 size="small" 
                 sx={{mx:4,my:2, width:"90%",color: "rgba(0,0,0,0.2)"}}   
                 InputLabelProps={{shrink: true}}
                 value={data?.DOB}
                 label="Date of Birth"/>
                 <TextField 
                 size="small" 
                 sx={{mx:4, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 InputLabelProps={{shrink: true}}
                 value={data?.Blood_Group}
                 label="Blood Group"/>
                 <TextField 
                 size="small" 
                 sx={{mx:4,my:2 ,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 InputLabelProps={{shrink: true}}
                 value={data?.Mobile_No} 
                 label="Mobile No"/>
                  <TextField 
                 size="small" 
                 sx={{mx:4,mb:2, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 InputLabelProps={{shrink: true}}
                 value={data?.Address}
                 label="Address"/>
                 <TextField
                 size="small" 
                 sx={{mx:4,mb:10,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 InputLabelProps={{shrink: true}}
                 value={data?.Department}
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
export default DoctorProfile