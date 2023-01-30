from rest_framework import serializers
from .models import MyAdmin


class PasswordChangeSerializer(serializers.ModelSerializer):
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
        password = attrs.get("password")
        password2 = attrs.get("password2")
        user = self.context.get("user")
        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password is doesn't match")
        user.set_password("password")
        user.save()
        return attrs