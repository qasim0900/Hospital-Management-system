from django.db import models
from datetime import datetime
from django.utils import timezone
from django.core.validators import RegexValidator 
from django.contrib.auth.models import AbstractBaseUser
from .manager import ProfileManager
Phone_message = "Phone Number must be in the format of 03999999999"
phone_regex = RegexValidator(
    regex= r'^(03)\d{9}$', message= Phone_message)

class MyAdmin(AbstractBaseUser): 
    departments=(('Cardiologist','Cardiologist'),('Dermatologists','Dermatologists'),('Emergency Medicine Specialists',
    'Emergency Medicine Specialists'),('Allergists/Immunologists','Allergists/Immunologists'),('Anesthesiologists','Anesthesiologists'),
    ('Colon and Rectal Surgeons','Colon and Rectal Surgeons'))
    GENDER_CHOICES = (('M', 'Male'),('F', 'Female'))
    BLOOD_GROUPS = (("A+","A+"),("A-","A-"),("B+","B+"),("B-","B-"),("O+","O+"),("O-","O-"),("AB+","AB+"),("AB-","AB-"))


    Name = models.CharField(max_length=50)
    DOB = models.DateField(blank=True,null=True)
    Gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    Blood_Group = models.CharField(max_length=3, choices=BLOOD_GROUPS)
    email = models.EmailField(max_length=255,unique=True,)
    Address = models.TextField(max_length=200)
    Mobile_No = models.IntegerField(blank=True,null=True)
    Language = models.CharField(max_length=50)
    Schedule = models.DateTimeField(blank=True,null=True)
    Experience = models.CharField(max_length=20)
    Department = models.CharField(max_length=30, choices=departments)
    Fees = models.IntegerField(blank=True,null=True)
    Date = models.DateTimeField(blank=True,null=True)
    Time = models.TimeField(max_length=10, null=True, blank=True)
    Bill_No = models.IntegerField(blank=True,null=True)
    Amount = models.IntegerField(blank=True,null=True)
    Medicine = models.CharField(max_length=50)
    Remarks = models.TextField(max_length=200)
    Advice = models.CharField(max_length=100)
    image = models.ImageField(upload_to='documents/')
    password2 = models.CharField(max_length=20)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=False)
    is_docter = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["Name"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin



