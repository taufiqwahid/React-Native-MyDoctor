import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DNews1} from '../../../assets';
import {Fonts} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.time}>Today</Text>
      </View>
      <Image style={styles.image} source={DNews1} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    width: 177,
    marginBottom: 4,
    fontFamily: Fonts.primary[600],
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    fontFamily: Fonts.primary[400],
    marginBottom: 12,
  },
  image: {
    height: 60,
    width: 80,
  },
});
