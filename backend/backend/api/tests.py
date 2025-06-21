from django.test import TestCase
from .models import Product

class ProductModelTest(TestCase):

    def setUp(self):
        Product.objects.create(name='Test Product', description='Test Description', price=10.00)

    def test_product_creation(self):
        product = Product.objects.get(name='Test Product')
        self.assertEqual(product.description, 'Test Description')
        self.assertEqual(product.price, 10.00)
