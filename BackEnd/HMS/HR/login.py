from rest_framework import serializers
from .models import MyAdmin
class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model = MyAdmin
        fields = ["email","password","is_admin","is_docter","is_patient"]