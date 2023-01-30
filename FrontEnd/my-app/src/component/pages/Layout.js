import {Grid,Paper,Box} from "@mui/material"
import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
function Layout(){
    return<>
                <NavBar/>
            
         <Grid container>
            <Grid item lg={11} md={12} sm={12} xs={12} sx={{mx:"auto",my:4,}}>
            <Paper sx={{backgroundColor:"transparent",width:"auto", height:"auto"}} elevation={24}>
            <Box>
            <Outlet/>
            </Box>
            </Paper>
            </Grid>
        </Grid>
    </>
}
export default Layout