from rest_framework import serializers
from .models import MyAdmin
class DocterSigninSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyAdmin
        fields = ["Name","email","password","password2"]
        extra_kwargs={
            "password":{"write_only":True},
            "password2":{"write_only":True}
        }
    def validate(self, attrs):
        password = attrs.get("password")
        password2 = attrs.get("password2")
        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password is doesn't match")
        return attrs

    def create(self,validated_data):
        validated_data.get("email")
        profile = MyAdmin.objects.docter_user(**validated_data)
        return profile