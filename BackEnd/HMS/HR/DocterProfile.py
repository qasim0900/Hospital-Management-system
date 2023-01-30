from rest_framework import serializers
from .models import MyAdmin


class DocterProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyAdmin
        fields = ["id","Name","DOB","email","Gender","Blood_Group","Address","Mobile_No","Department","Experience","Schedule","updated_at","created_at","is_docter","image"]
        def validate(self,attrs):
            docter = attrs.get("user")
            return docter
