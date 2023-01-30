from rest_framework import serializers
from .models import MyAdmin


class AdminProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyAdmin
        fields = ["Name","DOB","email","Gender","Blood_Group","Address","Mobile_No","image"]
    def validate(self,attrs):
            admin = attrs.get("user")
            return admin