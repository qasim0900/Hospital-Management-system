from rest_framework import serializers
from .models import MyAdmin

class PatientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyAdmin
        fields = ["id","Name","DOB","Gender","Blood_Group","email","Address","Mobile_No","Department"]
        def validate(self,attrs):
            patient = attrs.get("user")
            return patient