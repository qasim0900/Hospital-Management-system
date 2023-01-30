# Generated by Django 4.1.4 on 2023-01-30 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyAdmin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('Name', models.CharField(max_length=50)),
                ('DOB', models.DateField(blank=True, null=True)),
                ('Gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('Blood_Group', models.CharField(choices=[('A+', 'A+'), ('A-', 'A-'), ('B+', 'B+'), ('B-', 'B-'), ('O+', 'O+'), ('O-', 'O-'), ('AB+', 'AB+'), ('AB-', 'AB-')], max_length=3)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('Address', models.TextField(max_length=200)),
                ('Mobile_No', models.IntegerField(blank=True, null=True)),
                ('Language', models.CharField(max_length=50)),
                ('Schedule', models.DateTimeField(blank=True, null=True)),
                ('Experience', models.CharField(max_length=20)),
                ('Department', models.CharField(choices=[('Cardiologist', 'Cardiologist'), ('Dermatologists', 'Dermatologists'), ('Emergency Medicine Specialists', 'Emergency Medicine Specialists'), ('Allergists/Immunologists', 'Allergists/Immunologists'), ('Anesthesiologists', 'Anesthesiologists'), ('Colon and Rectal Surgeons', 'Colon and Rectal Surgeons')], max_length=30)),
                ('Fees', models.IntegerField(blank=True, null=True)),
                ('Date', models.DateTimeField(blank=True, null=True)),
                ('Time', models.TimeField(blank=True, max_length=10, null=True)),
                ('Bill_No', models.IntegerField(blank=True, null=True)),
                ('Amount', models.IntegerField(blank=True, null=True)),
                ('Medicine', models.CharField(max_length=50)),
                ('Remarks', models.TextField(max_length=200)),
                ('Advice', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='documents/')),
                ('password2', models.CharField(max_length=20)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_patient', models.BooleanField(default=False)),
                ('is_docter', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
