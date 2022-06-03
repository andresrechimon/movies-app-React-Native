/* eslint-disable keyword-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-labels */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, Image, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const movies = [
  {
    id: '1',
    img: 'https://i.pinimg.com/originals/d9/6e/85/d96e85f53c029303a3731e2379e4c1b2.jpg',
    name: 'The Warriors',
    director: 'W. Hill',
    year: '1979',
  },
  {
    id: '2',
    img: 'https://m.media-amazon.com/images/M/MV5BZDljZGUyNDQtOWMwOC00ZGJlLTgzZGEtNjZhYTM5ODJlYjBmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    name: 'Duro de matar',
    director: 'J. McTiernan',
    year: '1988',
  },
  {
    id: '3',
    img: 'https://m.media-amazon.com/images/I/61qCgQZyhOL._AC_SY741_.jpg',
    name: 'Terminator',
    director: 'J. Cameron',
    year: '1984',
  },
];

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  poster: {
    width: '100%',
    height: 400,
  },
});

const List = ({navigation}) => {
  function Item({name, img, director, year}) {
    return (
      <View>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.poster} source={{uri: img}} />

        <Button
          style={styles.button}
          title="Ver más"
          color="#841584"
          onPress={() => {
            navigation.navigate('Detail', {
              name: name,
              director: director,
              year: year,
            });
          }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        data={movies}
        renderItem={({item}) => <Item name={item.name} director={item.director} year={item.year} img={item.img} />}
      />
    </SafeAreaView>
  );
};

export default List;
