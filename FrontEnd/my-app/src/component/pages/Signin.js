import {Grid,Tabs,Tab,Box} from "@mui/material"
import React,{useState} from "react"
import DoctorSignin  from "./DoctorSignin"
import PatientSignin from "./PatientSignin"

function Signin(){
    const TabPanal = (props) =>{
        const {children,value,index} = props
        return(
            <div role="tab" hidden={value !== index}>{
                value === index &&(
                    <Box>{children}</Box>
                )
            }
            </div>
        )
    }
        const[value,setValue] = useState(0)
        const handleChange = (event, newValue) =>{
                setValue(newValue)
        }
    return<>    
                <Grid container >
                <Grid item lg={12} md={12} sm={12} xs={12}>
                <Tabs  onChange={handleChange} value={value} sx={{mb:2,borderBottom:3, color:"#a0a2a3", borderColor:"divider"}}>
                <Tab sx={{fontWeight:"bold",textTransform:"none",color:"black"}} label="Patient Signin"></Tab>
                <Tab sx={{fontWeight:"bold",textTransform:"none",color:"black"}} label="Docter Signin"></Tab>
                </Tabs>
                <TabPanal value={value} index={0}><PatientSignin/></TabPanal>
                <TabPanal value={value} index={1}><DoctorSignin/></TabPanal>
            </Grid>
            </Grid>
    </>
}
export default Signin