from django.urls import path
from . import views
urlpatterns = [
path("login/",views.LoginAPI.as_view()),
path("changepassword/",views.ChangePasswordAPI.as_view()),
path("resetpassword/<uid>/",views.SendPasswordReset.as_view()),
path("appoint/<uid>/",views.ApointAPI.as_view()),
path("adminsignin/",views.AdminSigninAPI.as_view()),
path("adminprofile/",views.AdminProfileAPI.as_view()),
path("patientsignin/",views.PatientSigninAPI.as_view()),
path("patientprofile/",views.PatientProfileAPI.as_view()),
path("doctorsignin/",views.DocterSigninAPI.as_view()),
path("doctorprofile/",views.DocterProfileAPI.as_view()),
]