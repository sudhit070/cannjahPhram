# Generated by Django 4.1.4 on 2023-05-18 12:29

import App_User.manager
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("App_User", "0003_alter_user_managers"),
    ]

    operations = [
        migrations.AlterModelManagers(
            name="user",
            managers=[
                ("objects", App_User.manager.UserManager()),
            ],
        ),
    ]
