from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import MyAdmin
class UserAdmin(BaseUserAdmin):
    
    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ("id","Name","DOB","Gender","Blood_Group","email","Address","Mobile_No" ,'is_admin',"is_docter","is_patient")
    list_filter = ('is_admin',"is_docter")
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ("Name","DOB","Gender","Blood_Group","Address","Mobile_No","image","Department")}),
        ('Permissions', {'fields': ('is_admin', "is_docter","is_patient")}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'Mobile_No', 'password1', 'password2'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()


# Now register the new UserAdmin...
admin.site.register(MyAdmin, UserAdmin)
admin.site.unregister(Group)
