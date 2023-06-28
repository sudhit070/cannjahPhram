import uuid
import hashlib
from django.conf import settings
from django.core.mail import send_mail

def generateVisitorToken(s):
    hashed_string = hashlib.md5(s.encode()).hexdigest()
    uid = uuid.UUID(hashed_string)
    return uid

def send_email(to_email, subject, message):
    from_email = settings.FROM_EMAIL
    return
    # creds for email is not settled yet
    # send_mail(
    #     subject,
    #     message,
    #     from_email,
    #     to_email
    # )