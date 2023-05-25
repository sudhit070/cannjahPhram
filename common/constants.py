from common.enums import ProductStates as ps, UserType as ut

PRODUCT_STATE = (
    (ps.available.value, ps.available.value),
    (ps.upcoming.value, ps.upcoming.value),
    (ps.unavailable.value, ps.unavailable.value)
)

USER_TYPE = (
    (ut.ADMIN.value, ut.ADMIN.value),
    (ut.MEDICAL.value, ut.MEDICAL.value)
)