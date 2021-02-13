import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DNews1, DNews2, DNews3} from '../../../assets';
import {colors, Fonts} from '../../../utils';

const NewsItem = ({title, time, index}) => {
  const Picture = () => {
    switch (index) {
      case 1:
        return <Image style={styles.picture} source={DNews1} />;
      case 2:
        return <Image style={styles.picture} source={DNews2} />;
      case 3:
        return <Image style={styles.picture} source={DNews3} />;
      default:
        return <Image style={styles.picture} source={DNews1} />;
    }
  };
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Picture key={index} />
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
    fontFamily: Fonts.primary[600],
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    fontFamily: Fonts.primary[400],
    marginBottom: 12,
  },
  picture: {
    height: 60,
    width: 80,
  },
});
