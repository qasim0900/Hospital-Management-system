import {Grid,Box,Card,AppBar,Toolbar,Typography} from "@mui/material"
function DashBoard(){
    return<>
        <Grid container>
        <Grid item lg={6} md={5} sm={7} xs={12}sx={{my:6}}>
            <Box component="form" noValidate id="login-form"  sx={{mx:4,my:4}}>
                <Card sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
                <AppBar position="static" style={{background:"transparent"}}>
                <Toolbar>
                  <Typography variant="h5" component="div" sx={{color:"black",fontWeight:"bold",flexGrow:1}} >
                    Benefit
                  </Typography>
                </Toolbar>
                  </AppBar>
                  <Typography sx={{ml:5,my:5,color:"black",textTransform:"none"}}>
                  In this busy world we don’t have the time to wait in infamously long hospital queues. 
                  The problem is, queuing at hospital is often managed manually by administrative staff, 
                  then take a token there and then wait for our turn then ask for the doctor and the most 
                  frustrating thing - we went there by traveling a long distance and then we come to know 
                  the doctor is on leave or the doctor can’t take appointments.
                  HMS will help us overcome all these problems because now patients can book their  
                  appointments at home, they can check whether the doctor they want to meet is 
                  available or not. Doctors can also confirm or decline appointments, this help both 
                  patient and the doctor because if the doctor declines’ appointment then patient will 
                  know this in advance and patient will visit hospital only when the doctor confirms’ the 
                  appointment this will save time and money of the patient. 
                  </Typography>
                </Card>
            </Box>
        </Grid>
            <Grid item lg={6} md={5} sm={5} xs={5} sx={{my:6}}>
            <Box component="form" noValidate id="login-form"  sx={{mx:4,my:4}}>
                <Card sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
                <AppBar position="static" style={{background:"transparent"}}>
                <Toolbar>
                  <Typography variant="h5" component="div" sx={{color:"black",fontWeight:"bold",flexGrow:1}} >
                    Benefit
                  </Typography>
                </Toolbar>
                  </AppBar>
                  <Typography sx={{ml:5,my:5,color:"black",textTransform:"none"}}>
                  In this busy world we don’t have the time to wait in infamously long hospital queues. 
                  The problem is, queuing at hospital is often managed manually by administrative staff, 
                  then take a token there and then wait for our turn then ask for the doctor and the most 
                  frustrating thing - we went there by traveling a long distance and then we come to know 
                  the doctor is on leave or the doctor can’t take appointments.
                  HMS will help us overcome all these problems because now patients can book their  
                  appointments at home, they can check whether the doctor they want to meet is 
                  available or not. Doctors can also confirm or decline appointments, this help both 
                  patient and the doctor because if the doctor declines’ appointment then patient will 
                  know this in advance and patient will visit hospital only when the doctor confirms’ the 
                  appointment this will save time and money of the patient. 
                  </Typography>
                </Card>
            </Box>
              
            </Grid>
                </Grid>
    </>
}
export default DashBoard