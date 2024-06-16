import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritedCard from '../components/FavoritedCard';
import {useNavigation} from '@react-navigation/native';
import {removeJob} from '../redux/jobSlice';

const Favorited = () => {
  const {jobs} = useSelector(state => state.jobs); // Doğrudan jobs state'ine erişin
  // console.log(jobs);
  // const [data, setData] = useState(jobs);
  // console.log(data);
  const dispatch = useDispatch();
  const keyExtractor = (item, index) => index.toString();
  const navigation = useNavigation();
  const handleDetail = () => {};
  const handleDelete = item => {
    dispatch(removeJob(item));
  };
  // Her iş için bir öğe render edin
  const renderItem = ({item}) => (
    <FavoritedCard
      item={item}
      // onPress={handleDetail}
      handleDelete={handleDelete}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={keyExtractor}></FlatList>
    </View>
  );
};

export default Favorited;

const styles = StyleSheet.create({});
