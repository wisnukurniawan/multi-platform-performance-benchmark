import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shopay/data.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LaunchTimeLogger(),
    );
  }
}

class LaunchTimeLogger extends StatefulWidget {
  @override
  _LaunchTimeLoggerState createState() => _LaunchTimeLoggerState();
}

class _LaunchTimeLoggerState extends State<LaunchTimeLogger> {
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      final int flutterRenderTime = DateTime.now().millisecondsSinceEpoch;
      print("AppLaunch First Frame Rendered at: $flutterRenderTime ms");
    });
  }

  @override
  Widget build(BuildContext context) {
    return ProductGridPage();
  }
}


class ProductGridPage extends StatelessWidget {
  List<Product> parseProducts() {
    final decoded = json.decode(jsonString);
    final List<dynamic> productsJson = decoded['data']['Products'];
    return productsJson.map((json) => Product.fromJson(json)).toList();
  }

  @override
  Widget build(BuildContext context) {
    final products = parseProducts();

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: GridView.builder(
          itemCount: products.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2, // two columns
            mainAxisSpacing: 8,
            crossAxisSpacing: 8,
            childAspectRatio: 0.65,
          ),
          itemBuilder: (context, index) {
            final product = products[index];
            return ProductCard(product: product);
          },
        ),
      ),
    );
  }
}
class ProductCard extends StatelessWidget {
  final Product product;

  const ProductCard({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12.0),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Product Image
          Expanded(
            child: ClipRRect(
              borderRadius: const BorderRadius.vertical(top: Radius.circular(12.0)),
              child: Image.network(
                product.imageUrl,
                fit: BoxFit.cover,
                width: double.infinity,
                errorBuilder: (context, error, stackTrace) {
                  return Container(
                    color: Colors.grey[200],
                    child: const Icon(Icons.broken_image, size: 50, color: Colors.grey),
                  );
                },
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Brand
                Text(
                  product.brand,
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF555555), // Hex color #555
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 2.0), // Margin bottom for brandText
                // Product Name
                Text(
                  product.name,
                  style: const TextStyle(
                    fontSize: 16,
                    color: Color(0xFF333333), // Hex color #333
                  ),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 4.0), // Margin bottom for nameText
                // Price
                Text(
                  product.price,
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                    color: Colors.black, // Hex color #000
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}