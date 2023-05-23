import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PageHeadBar from '../PageHeadBar/PageHeadBar';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import ProductCard from '../ProductCard/ProductCard';
import {getCategoryId, getCategoryProducts} from '../../api/api';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NewCategory = props => {
  const {navigation, route} = props;
  const {name} = route.params.item;
  const categoryName = name;
  console.log('new category params', route.params);

  const [products, setProducts] = useState([]);
  const [showActivityIndicator, setShowActivityIndicator] = useState(true);
  const makeApiRequest = async () => {
    try {
      let categoryId = (await getCategoryId(categoryName)).data.id;
      console.log('categoryId', categoryId);

      let response = await getCategoryProducts(categoryId);
      setProducts(response.data);
      setShowActivityIndicator(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setShowActivityIndicator(true)
    makeApiRequest();
  }, [categoryName]);

  return (
    <View style={{height:hp("100%")}}>
      <View style={styles.headerContainer}>
        <PageHeadBar title={categoryName} navigation={navigation}></PageHeadBar>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            backgroundColor: 'white',
            flexDirection: 'row',
            flexWrap: 'wrap',
            columnGap: 10,
            rowGap: 10,
            paddingVertical:10
          }}>
          {showActivityIndicator && <ActivityIndicator color={"#FF5403"}></ActivityIndicator>}
          {!showActivityIndicator &&
            products.map(item => (
              <View key={item.id}>
                <ProductCard item={item} navigation={navigation}></ProductCard>
              </View>
            ))}
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <BottomNavBar navigation={navigation}></BottomNavBar>
      </View>
    </View>
  );
};

export default NewCategory;

const styles = StyleSheet.create({
  headerContainer:{
    height:hp("10%"),
    elevation:2
  },
  bodyContainer:{
    height:hp("83%"),
    
  },
  footerContainer:{
    height:hp("7%"),
    elevation:2
  }
});
