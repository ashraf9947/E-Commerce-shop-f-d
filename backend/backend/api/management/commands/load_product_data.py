import json

from api.models import Product
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Loads product data from a fixture file"

    def handle(self, *args, **options):
        with open("api/fixtures/products.json", "r") as f:  # Adjust path if needed
            data = json.load(f)

        for item in data:
            fields = item["fields"]
            Product.objects.create(
                name=fields["name"],
                category=fields["category"],
                image=fields["image"],  # Assuming this is the filename
                price=fields["price"],
                description="Default description",
            )

        self.stdout.write(self.style.SUCCESS("Successfully loaded product data"))
