import uuid
import hashlib

def generateVisitorToken(s):
    hashed_string = hashlib.md5(s.encode()).hexdigest()
    uid = uuid.UUID(hashed_string)
    return uid