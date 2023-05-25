from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, **kwargs):
        print("hereeeee")
        if not email:
            raise ValueError("Email is required")

        if password is None:
            password='Cannjah@1234'
        print(kwargs)
        email = self.normalize_email(email=email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **kwargs):
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)
        kwargs.setdefault('is_active', True)
        kwargs.setdefault('type_of_user', 'admin')

        if kwargs.get('is_staff') is not True:
            raise ValueError('Superuser always have is_staff as True')

        return self.create_user(email=email, password=password, **kwargs)