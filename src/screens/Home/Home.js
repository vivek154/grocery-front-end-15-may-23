import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useRef} from 'react';
import HomeHeader from './HomeComponents/HomeHeader/HomeHeader';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import SingleSlider from './HomeComponents/SingleSlider';
import MultiSlider from './HomeComponents/MultiSlider';
import SearchResults from '../SearchResults/SearchResults';
import {getSearchResults} from '../../api/api';

const single_slider_images = [
  {id: 1, url: require('../../images/Images-multi/img1.jpg')},
  {id: 2, url: require('../../images/Images-multi/img2.jpg')},
  {id: 3, url: require('../../images/Images-multi/img3.jpg')},
  {id: 4, url: require('../../images/Images-multi/img4.jpg')},
];

const multi_slider_images = [
  {
    id: 1,
    url1: require('../../images/Images-multi/img1.jpg'),
    url2: require('../../images/Images-multi/img2.jpg'),
    url3: require('../../images/Images-multi/img3.jpg'),
  },
  {
    id: 2,
    url1: require('../../images/Images-multi/img4.jpg'),
    url2: require('../../images/Images-multi/img5.jpg'),
    url3: require('../../images/Images-multi/img6.jpg'),
  },
  {
    id: 3,
    url1: require('../../images/Images-multi/img7.jpg'),
    url2: require('../../images/Images-multi/img8.jpg'),
    url3: require('../../images/Images-multi/img9.jpg'),
  },
];
const Home = props => {
  const {navigation} = props;
  const [matchedProducts, setMatchedProducts] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [showSearchResults, setShowResults] = useState(false);
  const inputRef = useRef(null);

  const makeApiRequest = async keyword => {
    console.log('keyword', keyword);
    let response = await getSearchResults(keyword);
    console.log(response);
    if (response.data !== undefined) {
      setMatchedProducts(response.data);
    }
  };

  function showAllVegetables() {
    navigation.navigate('NewCategory', {item: {name: 'vegetables'}});
  }
  function showAllFruits() {
    navigation.navigate('NewCategory', {item: {name: 'fruits'}});
  }
  function showAllGrocery() {
    navigation.navigate('NewCategory', {item: {name: 'grocery'}});
  }

  return (
    <View style={{flex: 1, borderWidth: 1, backgroundColor: 'white'}}>
      <View style={styles.headerContainer}>
        <HomeHeader
          navigation={navigation}
          searchKeyWord={searchKeyWord}
          setSearchKeyWord={setSearchKeyWord}
          setShowResults={setShowResults}
          makeApiRequest={makeApiRequest}
          inputRef={inputRef}></HomeHeader>
      </View>

      <View style={styles.bodyContainer}>
        <ScrollView fadingEdgeLength={20}>
          {searchKeyWord == '' && !showSearchResults && (
            <View>
              <SingleSlider images={single_slider_images}></SingleSlider>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <Text style={{fontSize: 18, fontWeight: 600, color: 'black'}}>
                  Vegetables
                </Text>
                <Text style={{color: '#ff5403'}} onPress={showAllVegetables}>
                  View All
                </Text>
              </View>

              <View>
                <MultiSlider images={multi_slider_images}></MultiSlider>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <Text style={{fontSize: 18, fontWeight: 600, color: 'black'}}>
                  Fruits
                </Text>
                <Text style={{color: '#ff5403'}} onPress={showAllFruits}>
                  View All
                </Text>
              </View>

              <View>
                <MultiSlider images={multi_slider_images}></MultiSlider>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <Text style={{fontSize: 18, fontWeight: 600, color: 'black'}}>
                  Grocery
                </Text>
                <Text style={{color: '#ff5403'}} onPress={showAllGrocery}>
                  View All
                </Text>
              </View>

              <SingleSlider images={single_slider_images}></SingleSlider>
            </View>
          )}
          {!(searchKeyWord == '') && (
            <SearchResults matchedProducts={matchedProducts}></SearchResults>
          )}
        </ScrollView>
      </View>

      <View style={styles.footerContainer}>
        <BottomNavBar navigation={navigation}></BottomNavBar>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.23,
    //borderWidth: 1,
    backgroundColor: 'white',
    elevation:20
  },
  bodyContainer: {
    flex: 0.7,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    //paddingVertical:38
  },
  footerContainer: {
    flex: 0.07,
    backgroundColor: 'white',
  },
});
