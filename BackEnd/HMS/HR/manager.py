from django.contrib.auth.models import BaseUserManager

class ProfileManager(BaseUserManager):
    def create_user(self, email,password=None, password2=None,**extra_fields):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),

        )

        user.set_password(password)
        user.is_patient = True
        user.save(using=self._db)
        return user

    def docter_user(self, email,password=None, password2=None,**extra_fields):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),

        )

        user.set_password(password)
        user.is_docter = True
        user.save(using=self._db)
        return user

    def create_superuser(self,email,password=None,**extra_fields):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.docter_user(
            email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user