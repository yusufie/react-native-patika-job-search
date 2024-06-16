import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const JobCard = ({item, onPress}) => {
  const name = item.name;
  const company = item.company.name;
  const location = item.locations[0].name;
  const level = item.levels[0].name;

  return (
    <TouchableOpacity style={styles.jobContainer} onPress={onPress}>
      <View style={styles.body_container}>
        <Text style={styles.jobTitle}>{name}</Text>
        <Text style={styles.jobcompany}>{company}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.level_container}>
        <Text style={styles.level}>{level}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  jobContainer: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    marginTop: 10,
  },
  body_container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  jobTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  jobcompany: {
    fontSize: 14,
    marginTop: 5,
  },

  location: {
    marginTop: 5,
    backgroundColor: 'tomato',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 3,
    borderRadius: 8,
  },
  level_container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  level: {
    color: 'tomato',
    fontWeight: '600',
    fontSize: 15,
  },
});
