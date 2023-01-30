import {TextField,Grid,Box,Card,Button,AppBar,Toolbar,Alert,Typography} from "@mui/material"
import {useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import pic2 from "../../images/pic2.png"
import { setUserToken } from "../../features/counter/counterSlice"
import { get_token, token } from "../../services/token"
import {useLoginUserMutation} from "../../services/userAuthApi"
import { useDispatch } from "react-redux"
function Login(){
    const [serverError,setserverError] = useState({})
    const navigate = useNavigate()
    const [registerUser] = useLoginUserMutation()
    const dispatch = useDispatch()
    const [reg, setReg] = useState({});
const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
        email: data.get("email"),
        password: data.get("password"),
    };
    const response = await registerUser(actualData);
    if (response.error) {
        setserverError(response.error.data);
    }
    if (response.data) {
        token(response.data.token);
        dispatch(setUserToken({ access: response.data.token }));
        setReg(response.data);
    }
};
const {access} = get_token();
useEffect(() => {
    if (access && reg) {
        const role = reg.role;
        if (role === "Admin") {
            navigate("/AdminProfile");
        } else if (role === "Doctor") {
            navigate("/DoctorProfile");
        } else if (role === "Patient") {
            navigate("/PatientProfile");
        }
    }
    dispatch(setUserToken({access}))
}, [access, dispatch, navigate, reg]);


    return<>
        <Grid container>
        <Grid item lg={5} md={5} sm={7} xs={12}sx={{my:6}}>
            <Box component="form" noValidate id="login-form" onSubmit={handleSubmit} sx={{mx:4,my:4}}>
                <Card sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
                <AppBar position="static" style={{background:"transparent"}}>
                <Toolbar>
                  <Typography variant="h5" component="div" sx={{color:"black",fontWeight:"bold",flexGrow:1}} >
                    Login
                  </Typography>
                </Toolbar>
                  </AppBar>
                 <TextField size="small" sx={{mx:3,mt:10,mr:2,width:"90%",color: "rgba(0,0,0,0.2)"}} required id="email" name="email" label="Email Address"/>
                 { serverError.email ? <Typography style={{fontSize:12, color:"red",mt:3, paddingLeft:25}}>{serverError.email}</Typography>:""}
                 <TextField size="small" sx={{mx:3,mt:2,mr:2, width:"90%",color: "rgba(0,0,0,0.2)"}} required type="password"  id="password" name="password" label="Password"/>
                 { serverError.password ? <Typography style={{fontSize:12, color:"red",mt:3, paddingLeft:25}}>{serverError.password}</Typography>:""}
                 <Box>
            <Button type="submit" variant="out-lined" sx={{mt:4,ml:5,mr:1,px:5 ,fontWeight:"bold",background:"rgba(0,0,0,0.2)" , color:"black"}}>Login</Button>
            <Button type="button" variant="out-lined" sx={{mt:4,ml:2,mr:1,px:5 ,fontWeight:"bold",background:"rgba(0,0,0,0.2)" , color:"black"}} component={NavLink} to="/Signin">Signin</Button>
            </Box>
            <Button type="submit" variant="out-lined" sx={{mt:2,mr:1,fontWeight:"bold",background:"transparent" , color:"black"}} component={NavLink} to="/">Forget Password?</Button>
            <Alert sx={{my:4,ml:2,mr:2, width:"80%",backgroundColor:"transparent",color:"red"}} severity="error">
                All Fields are Required
            </Alert>
                </Card>
            </Box>
        </Grid>
            <Grid item lg={7} md={5} sm={5} xs={5} sx={{
                width:"auto", height:"auto",
                backgroundImage: `url(${pic2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"center",
                display:{xs:"none", md:"block"}

            }}>
            </Grid>
                </Grid>
    </>
}
export default Login