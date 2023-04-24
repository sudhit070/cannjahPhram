# Generated by Django 4.1.4 on 2023-04-24 18:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("App_User", "0003_basemodel"),
    ]

    operations = [
        migrations.CreateModel(
            name="MedicalRegister",
            fields=[
                (
                    "basemodel_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="App_User.basemodel",
                    ),
                ),
                ("email", models.EmailField(blank=True, max_length=254, null=True)),
                ("name", models.CharField(blank=True, max_length=500, null=True)),
                ("date_of_birth", models.DateField()),
                (
                    "gender",
                    models.CharField(
                        choices=[
                            ("male", "male"),
                            ("female", "female"),
                            ("other", "other"),
                        ],
                        default="male",
                        max_length=20,
                    ),
                ),
                ("residence_address1", models.TextField(blank=True, null=True)),
                ("residence_address2", models.TextField(blank=True, null=True)),
                (
                    "residence_city",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "residence_province",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "residence_postal_code",
                    models.CharField(blank=True, max_length=50, null=True),
                ),
                (
                    "mobile_number",
                    models.CharField(blank=True, max_length=15, null=True),
                ),
                ("fax", models.CharField(blank=True, max_length=50, null=True)),
                ("mailing_address1", models.TextField(blank=True, null=True)),
                ("mailing_address2", models.TextField(blank=True, null=True)),
                (
                    "mailing_city",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "mailing_province",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "mailing_postal_code",
                    models.CharField(blank=True, max_length=50, null=True),
                ),
                ("shipping_address1", models.TextField(blank=True, null=True)),
                ("shipping_address2", models.TextField(blank=True, null=True)),
                (
                    "shipping_city",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "shipping_province",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "shipping_postal_code",
                    models.CharField(blank=True, max_length=50, null=True),
                ),
                (
                    "resposible_name",
                    models.CharField(blank=True, max_length=500, null=True),
                ),
                ("responsible_date_of_birth", models.DateField(blank=True, null=True)),
                (
                    "responsible_gender",
                    models.CharField(
                        choices=[
                            ("male", "male"),
                            ("female", "female"),
                            ("other", "other"),
                        ],
                        default="male",
                        max_length=20,
                    ),
                ),
                (
                    "practitioner_name",
                    models.CharField(blank=True, max_length=500, null=True),
                ),
                (
                    "clinic_name",
                    models.CharField(blank=True, max_length=500, null=True),
                ),
                ("practitioner_address1", models.TextField(blank=True, null=True)),
                ("practitioner_address2", models.TextField(blank=True, null=True)),
                (
                    "practitioner_city",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "practitioner_province",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "practitioner_postal_code",
                    models.CharField(blank=True, max_length=50, null=True),
                ),
                (
                    "practitioner_mobile_number",
                    models.CharField(blank=True, max_length=15, null=True),
                ),
                (
                    "practitioner_fax",
                    models.CharField(blank=True, max_length=50, null=True),
                ),
                (
                    "practitioner_email",
                    models.EmailField(blank=True, max_length=254, null=True),
                ),
                ("accepted", models.BooleanField(default=False)),
                (
                    "reviewer_name",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                ("approved", models.BooleanField(default=False)),
                ("approved_date", models.DateTimeField(blank=True, null=True)),
            ],
            bases=("App_User.basemodel",),
        ),
    ]
