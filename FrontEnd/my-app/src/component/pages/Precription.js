import React from "react"
import {TextField,Grid,Paper,AppBar,Toolbar,Button,Typography,Box,Card} from "@mui/material"
function Precription(){
    return<>
                          <Grid container>
<Grid item lg={11} md={12} sm={12} xs={12} sx={{mx:"auto",my:4,}}>
<Paper sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
<Box>
<AppBar position="static" style={{background:"transparent"}}>
<Toolbar>
    <Typography variant="h5" component="div" sx={{color:"black",fontWeight:"bold",flexGrow:1}} >
            Doctor Profile
    </Typography>
    <Button type="submit" variant="out-lined" sx={{mt:2,mr:1,fontWeight:"bold",background:"rgba(0,0,0,0.2)" , color:"black"}}>Logout</Button>
</Toolbar>
</AppBar>
<Grid container>
        <Grid item lg={5} md={5} sm={7} xs={12}>
            <Box component="form" noValidate id="Registeration-form" sx={{mx:4,my:4}}>
                <Card sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
                <TextField 
                 size="small" 
                 sx={{mx:4,mt:5,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 label="D_ID"
                 InputLabelProps={{shrink: true}}
                 />
                 <TextField 
                 size="small" 
                 sx={{mx:4,my:2,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 label="Email Address"
                 InputLabelProps={{shrink: true}}
                 />
                 <TextField
                 size="small" 
                 sx={{mx:4, width:"90%",color: "rgba(0,0,0,0.2)"}}   
                 InputLabelProps={{shrink: true}}
                 
                 label="Name"/>
                 <TextField 
                 size="small" 
                 sx={{mx:4,my:2, width:"90%",color: "rgba(0,0,0,0.2)"}}   
                 InputLabelProps={{shrink: true}}
                 
                 label="Date of Birth"/>
                 <TextField 
                 size="small" 
                 sx={{mx:4, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 InputLabelProps={{shrink: true}}
                 
                 label="Blood Group"/>
                 <TextField 
                 size="small" 
                 sx={{mx:4,my:2 ,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 InputLabelProps={{shrink: true}}
                  
                 label="Mobile No"/>
                  <TextField 
                 size="small" 
                 sx={{mx:4,mb:2, width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 InputLabelProps={{shrink: true}}
                 
                 label="Address"/>
                 <TextField
                 size="small" 
                 sx={{mx:4,mb:10,width:"90%",color: "rgba(0,0,0,0.2)"}} 
                 InputLabelProps={{shrink: true}}
                 
                 label="Department"/>
        </Card>
            </Box>
        </Grid>
        <Grid item lg={7} md={5} sm={5} xs={5} sx={{width:"auto", height:"auto"}}>
            </Grid>
        </Grid>
</Box>
</Paper>
</Grid>
</Grid>
   

    </>
}
export default Precription