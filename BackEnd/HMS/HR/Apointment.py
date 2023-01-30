from rest_framework import serializers
from .models import MyAdmin


class AppointSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyAdmin
        fields = ["Docter_Name","Patient_Name","Department","Fees","Date","Time"]



