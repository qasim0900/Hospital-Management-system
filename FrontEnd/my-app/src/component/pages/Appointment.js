import React from "react"
import {TextField,Grid, Button,Typography,Box,Card} from "@mui/material"
function Appointment(){
    return<>
                        <Grid>
                        <Box 
                        component="form" 
                        noValidate 
                        id="Registeration-form" 
                        sx={{mx:4,
                        my:4}}>

                        <Card 
                        sx={{backgroundColor:"transparent",
                        width:"auto",
                        height:"auto"}} 
                        elevation={24}>

                        <TextField 
                        inputProps={{readOnly:true}}
                        size="small" 
                        sx={{mx:4,
                        mt:10,
                        width:"90%",
                        color:"rgba(0,0,0,0.2)"}} 
                        id="email" 
                        defaultValue={"Qasim"}
                        name="email" 
                        label="Email Address"/>

                        <TextField
                        inputProps={{readOnly:true}}
                        size="small" 
                        sx={{mx:4,
                        my:2, 
                        width:"90%",
                        color:"rgba(0,0,0,0.2)"}} 
                        type="type"  
                        id="Name" 
                        name="Name"
                        label="Name"/>
                        
                        <TextField 
                        inputProps={{readOnly:true}}
                        size="small" 
                        sx={{mx:4, 
                        width:"90%",
                        color:"rgba(0,0,0,0.2)"}} 
                        type="data"  
                        id="Date" 
                        name="Date" 
                        label="Date of Birth"/>
                        
                        <TextField 
                        inputProps={{readOnly:true}}
                        size="small" 
                        sx={{mx:4,
                        my:2, 
                        width:"90%",
                        color:"rgba(0,0,0,0.2)"}} 
                        type="Blood_Group"  
                        id="Bloog_Group" 
                        name="Blood_Group" 
                        label="Blood Group"/>
                        
                        <TextField 
                        inputProps={{readOnly:true}}
                        size="small" 
                        sx={{mx:4,
                        width:"90%",
                        color: "rgba(0,0,0,0.2)"}} 
                        type="number"  
                        id="" 
                        name="Mobile_No" 
                        label="Mobile No"/>
                        
                        <TextField 
                        inputProps={{readOnly:true}}
                        size="small" 
                        sx={{mx:4,
                        my:2, 
                        width:"90%",
                        color:"rgba(0,0,0,0.2)"}} 
                        type="text"  
                        id="Address" 
                        name="Address" 
                        label="Address"/>
                        
                        <TextField 
                        inputProps={{readOnly:true}}
                        size="small" 
                        sx={{mx:4,
                        mb:10,
                        width:"90%",
                        color: "rgba(0,0,0,0.2)"}} 
                        type="text"  
                        id="Department" 
                        name="Department" 
                        label="Department"/>
                        </Card>
                        </Box>
                        </Grid>

    </>
}
export default Appointment