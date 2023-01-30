from rest_framework import serializers
from .models import MyAdmin


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyAdmin
        fields = ["Bill_No","Date","Time","Amount"]


