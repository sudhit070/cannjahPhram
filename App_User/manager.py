from django.contrib.auth.base_user import BaseUserManager
from common.common_methods import send_email

class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("Email is required")
        if password is None:
            password='Cannjah@1234'
        email = self.normalize_email(email=email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        subject = "Registartion Succesfull @CannjahPharm"
        message = f"""Dear user,
        \n You're registration with CannjahPharm has been successfully approved, 
        \n Please find below id and password to login on our portal
        \n\n email: {email} 
        \n Password: {password}"""
        send_email(to_email=email, subject=subject, message=message)
        return user

    def create_superuser(self, email, password=None, **kwargs):
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)
        kwargs.setdefault('is_active', True)
        kwargs.setdefault('type_of_user', 'admin')

        if kwargs.get('is_staff') is not True:
            raise ValueError('Superuser always have is_staff as True')

        return self.create_user(email=email, password=password, **kwargs)