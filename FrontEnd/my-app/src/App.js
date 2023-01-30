import React,{BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
  import Layout from "./component/pages/Layout";
  import Appointment from "./component/pages/Appointment"
  import DashBoard from "./component/pages/Dashboard"
  import Precription from "./component/pages/Precription"
  import PatientProfile from "./component/pages/PatientProfile"
  import DoctorProfile from "./component/pages/DoctorProfile"
  import { useSelector } from "react-redux";
  import Signin from "./component/pages/Signin"
  import Bill from "./component/pages/Bill"
  import Login from "./component/pages/Login"
  import AdminProfile from "./component/pages/AdminProfile"
  
  function App(){
  const {access} = useSelector(state => state.auth)
    return <>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<DashBoard/>}/>
                <Route path="Signin" element={<Signin/>}/>
                <Route path="Login" element={<Login/>}/>
              </Route>
              <Route path="PatientProfile/" element={access ? <PatientProfile/> : <Navigate to="/Login"/>}>
                <Route index element={<Appointment/>}/>
                <Route path="bill/" element={<Bill/>}/>
              </Route>
              <Route path="DoctorProfile/" element={access ? <DoctorProfile/> : <Navigate to="/Login"/>}>
                <Route index element={<Precription/>}/>
              </Route>
              <Route path="AdminProfile/" element={access ? <AdminProfile/> : <Navigate to="/Login"/>}/>
            </Routes>
          </BrowserRouter>
    </>
  }
  export default App