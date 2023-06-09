from enum import Enum

class ProductStates(Enum):
    available = "Available"
    upcoming = "Upcoming"
    unavailable = "Unavailable"

class UserType(Enum):
    ADMIN = "admin"
    MEDICAL = "medical"