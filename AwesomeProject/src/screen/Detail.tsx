/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, ImageBackground, StyleSheet} from 'react-native';

const Detail = ({route}) => {
  const {name, director, year} = route.params;
  console.log(route.params);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/details.jpg')}>
      <Text style={[styles.info, styles.marginTop]}>Título: {name}</Text>
      <Text style={styles.info}>By: {director}</Text>
      <Text style={styles.info}>Año: {year}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: 200,
  },
  info: {
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Detail;
