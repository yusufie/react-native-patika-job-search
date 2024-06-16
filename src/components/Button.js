import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.buton} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  buton: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'tomato',
    borderColor: 'tomato',
    width: width * 0.4,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
