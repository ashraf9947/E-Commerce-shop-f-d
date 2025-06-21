from api.factories import ProductFactory
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Generates test data for the application"

    def handle(self, *args, **options):
        # Create some products based on the data from all_product.js
        # You'll need to adapt this to your actual data structure
        from api.fixtures.products import products

        for product_data in products:
            ProductFactory.create(
                name=product_data["fields"]["name"],
                category=product_data["fields"]["category"],
                image=product_data["fields"]["image"],  # Just the filename
                price=product_data["fields"]["price"],
                description=product_data["fields"]["description"],
            )

        self.stdout.write(self.style.SUCCESS("Successfully generated test data"))
