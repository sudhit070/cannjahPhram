import mysql.connector

try:
    db = mysql.connector.connect(
        host="p3plzcpnl489519.prod.phx3.secureserver.net",
        port=3306,
        user="cannjah",
        passwd="cpSW?Toh&U.A"
    )
    cursor = db.cursor()
except Exception as e:
    print(e)