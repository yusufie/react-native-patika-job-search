import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';

const JobDetailCard = ({handleSubmit, handleFavorited, jobDetail}) => {
  const name = jobDetail.name;
  const location = jobDetail.locations[0].name;
  const level = jobDetail.levels[0].name;
  const contents = jobDetail.contents;
  const submit = jobDetail.refs.landing_page;
  return (
    <>
      <View style={styles.JobContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>
          <Text style={{color: 'tomato'}}>Locations: </Text>
          {location}
        </Text>
        <Text style={styles.level}>
          <Text style={{color: 'tomato'}}>Job Level: </Text>
          {level}
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{padding: 10, fontSize: 30, fontWeight: 'bold'}}>
          Job Detail
        </Text>
      </View>
      <ScrollView style={{marginHorizontal: 10}}>
        <Text style={styles}>{contents}</Text>
      </ScrollView>
      <View style={styles.button_container}>
        <Button text="Submit" onPress={() => handleSubmit(submit)} />
        <Button
          text="Favorite Jobs"
          onPress={() => handleFavorited(jobDetail)}
        />
      </View>
    </>
  );
};

export default JobDetailCard;

const styles = StyleSheet.create({
  JobContainer: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8,
  },
  level: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
