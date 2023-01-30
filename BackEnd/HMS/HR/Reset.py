from rest_framework import serializers
from .models import MyAdmin
from django.utils.encoding import smart_str,force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .utils import Utils
class PasswordResetSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model = MyAdmin
        fields = ["email"]
    
    def validate(self, attrs):
        email = attrs.get("email")
        if MyAdmin.objects.filter(email = email).exists():
            user = MyAdmin.objects.get(email = email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            link = "http://localhost:3000/reset/"+uid+"/"+token
            body = "Click Following Link to Reset your Password"+link
            data = {
                "subject":"Reset your password",
                "body":body,
                "to_email":user.email
            }
            Utils.send_email(data)
        else:
            raise ValueError("You are not a Registered User")
        return attrs


class ResetPasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=255, style={"input_type":"password"}, write_only = True)
    password2 = serializers.CharField(max_length=255, style={"input_type":"password"}, write_only = True)
    class Meta:
        model = MyAdmin
        fields = ["password","password2"]
        extra_kwargs={
            "password":{"write_only":True},
            "password2":{"write_only":True}
        }
    def validate(self, attrs):
        try:
            password = attrs.get("password")
            password2 = attrs.get("password2")
            uid = self.context.get("uid")
            token = self.context.get('token')
            if password != password2:
                raise serializers.ValidationError("Password and Confirm Password is doesn't match")
            id = smart_str(urlsafe_base64_decode(uid))
            user = MyAdmin.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user,token):
                raise serializers.ValidationError("Link is Expire")
            user.set_password("password")
            user.save()
            return attrs
        except DjangoUnicodeDecodeError:
            PasswordResetTokenGenerator().check_token(user,token)
            raise serializers.ValidationError("Link is not Valid")
