import uuid
import hashlib

def generateVisitorToken(s):
    hashed_string = hashlib.md5(s.encode()).hexdigest()
    print(hashed_string)
    uid = uuid.UUID(hashed_string)
    print(uid)
    return uid