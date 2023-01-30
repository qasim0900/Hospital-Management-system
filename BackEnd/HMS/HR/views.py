import json
from datetime import datetime
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .AdminSignin import AdminSigninSerializer
from .AdminProfile import AdminProfileSerializer
from .PatientProfile import PatientProfileSerializer
from .PatientSignin import PatientSigninSerializer
from .DocterSignin import DocterSigninSerializer
from .DocterProfile import DocterProfileSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .login import LoginSerializer
from .Bill import BillSerializer
from .Apointment import AppointSerializer
from .PasswordChangeSerializer import PasswordChangeSerializer
from .Reset import PasswordResetSerializer, ResetPasswordSerializer
from rest_framework.permissions import IsAuthenticated
from .models import MyAdmin
from .utils import Utils


# Token Genrater Method
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class CustomEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime):
            return o.isoformat()
        return super().default(o)



# Login Form
class LoginAPI(APIView):
    def post(self, request, format=None):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get("email")
            password = serializer.data.get("password")
            user = authenticate(email=email, password=password)
            if user is not None:
                if user.is_admin:
                    token = get_tokens_for_user(user)
                    return Response({"role":"Admin","token":token,"msg":"Admin is Sucessfully login"},status=status.HTTP_200_OK)
                elif user.is_docter:
                    token = get_tokens_for_user(user)
                    return Response({"role":"Doctor","token":token,"msg":"Doctor is Sucessfully login"},status=status.HTTP_200_OK)
                elif user.is_patient:
                    token = get_tokens_for_user(user)
                    return Response({"role":"Patient","token":token,"msg":"Patient is Sucessfully login"},status=status.HTTP_200_OK)
                else:
                    return Response({"errors":{"non_field_errors":["Email and Password is not correct, Please Try again"]}},status=status.HTTP_404_NOT_FOUND)
            else:
                return Response({"errors":{"non_field_errors":["Email and Password is not correct, Please Try again"]}},status=status.HTTP_404_NOT_FOUND)


# Admin Signin Form
class AdminSigninAPI(APIView):
 def post(self, request, format=None):
    serializer = AdminSigninSerializer(data= request.data)
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response({"role":"Admin","token":token,"msg":"Registration Successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


# Admin Profile Form
class AdminProfileAPI(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request, format=None):
        serializer = AdminProfileSerializer(request.user)
        docters = MyAdmin.objects.filter(is_docter=True).values()
        patients = MyAdmin.objects.filter(is_patient=True).values()
        serialized_data = serializer.data
        return Response({"admin":serialized_data,"patient":patients,"doctor":docters}, status=status.HTTP_200_OK)



# Patient Signin Form
class PatientSigninAPI(APIView):
 def post(self, request, format=None):
    serializer = PatientSigninSerializer(data= request.data)
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        token= get_tokens_for_user(user)
        return Response({"role":"Patient","Token":token,"msg":"Registration Successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


# Patient Profile Form
class PatientProfileAPI(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request, format=None):
        serializer = PatientProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Docter Signin Form
class DocterSigninAPI(APIView):
 def post(self, request, format=None):
    serializer = DocterSigninSerializer(data= request.data)
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response({"role":"Doctor","Token":token,"msg":"Registration Successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


# Docter Profile Form
class DocterProfileAPI(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request, format=None):
        serializer = DocterProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Change Password

class ChangePasswordAPI(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = PasswordChangeSerializer(data = request.data, context = {"user":request.user})
        if serializer.is_valid(raise_exception=True):
            return Response({"msg":"Password Changed Successfully"},status=status.HTTP_200_OK) 
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


#Email Link Send
class SendPasswordReset(APIView):
    def post(self,request, format=None):
        serializer = PasswordResetSerializer(data = request.data)
        if serializer.is_valid():
            return Response({"msg":"Reset Password Link is send, Please Check your Email"},status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


# Reset Password View
class ResetView(APIView):
    def post(self,request, uid,token):
        serializer = ResetPasswordSerializer(data = request.data, context = {"uid":uid,"token":token})
        if serializer.is_valid(raise_exception=True):
            return Response({"msg":"Password Reset Successfully"},status=status.HTTP_200_OK) 
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

#Appointment Booking
class ApointAPI(APIView):
    def post(self,request,uid, format=None):
            serializer = AppointSerializer(data=request.data,context={uid})
            if serializer.is_valid(raise_exception=True):
                docter = DocterProfileSerializer(context={serializer,uid})
                serializer.save()
                return Response("Appointment with Docter is Booked")
            else:
                return Response("Appointment is Canceled by the Docter")
            
