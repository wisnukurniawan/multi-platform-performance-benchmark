import React from 'react';
import { StyleSheet, Text, Image, FlatList, Dimensions, ListRenderItem, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as data from './data'; 

const windowWidth = Dimensions.get('window').width;

const ProductGrid: React.FC = () => {
  const products: data.Product[] = data.productsData.data.Products;
  const insets = useSafeAreaInsets();

   const renderItem: ListRenderItem<data.Product> = ({ item }) => (
      <View style={styles.productCard}>
        <Image 
          source={{ uri: item.MainImageUrl }} 
          style={styles.productImage} 
        />
        <Text style={styles.brandText}>{item.Brand}</Text>
        <Text style={styles.nameText}>{item.Name}</Text>
        <Text style={styles.priceText}>{item.Price}</Text>
      </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.ConfigSku}
      numColumns={2}
      contentContainerStyle={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'flex-start',
    width: (windowWidth / 2) - 15,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  brandText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 2,
  },
  nameText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProductGrid;