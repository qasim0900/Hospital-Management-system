// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/'}),
  endpoints: (builder) => ({
    PatientUser: builder.mutation({
      query: (user) =>{
        return {
            url: "patientsignin/",
            method:"POST",
            body: user,
            header:{
                "Content-type":"application/json",
            }
        }
      }
    }),
    DoctorUser: builder.mutation({
      query: (user) =>{
        return {
            url: "doctorsignin/",
            method:"POST",
            body: user,
            header:{
                "Content-type":"application/json",
            }
        }
      }
    }),
    LoginUser: builder.mutation({
      query: (user) =>{
        return {
            url: "login/",
            method:"POST",
            body: user,
            header:{
                "Content-type":"application/json",
            }
        }
      }
    }),
    PatientProfile: builder.query({
      query: (access) =>{
        return {
            url:"patientprofile/",
            method:"GET",
            headers:{
                "authorization":`Bearer ${access}`,
            }
        }
      }
    }),
    DoctorProfile: builder.query({
      query: (access) =>{
        return {
            url:"doctorprofile/",
            method:"GET",
            headers:{
                "authorization":`Bearer ${access}`,
            }
        }
      }
    }),
   AdminProfile: builder.query({
      query: (access) =>{
        return {
            url:"adminprofile/",
            method:"GET",
            headers:{
                "authorization":`Bearer ${access}`,
            }
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePatientUserMutation,useLoginUserMutation,usePatientProfileQuery,useDoctorProfileQuery,useDoctorUserMutation,useAdminProfileQuery} = userAuthApi