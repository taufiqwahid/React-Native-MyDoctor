import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const NewsItem = ({title, date, image}) => {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image style={styles.picture} source={{uri: image}} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  title: {
    width: 177,
    marginBottom: 4,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    marginBottom: 12,
    color: colors.text.secondary,
  },
  picture: {
    height: 60,
    width: 80,
  },
});
