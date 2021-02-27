import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = ({photo, chatContent, chatTime}) => {
  const [image, setImage] = useState(ILNullPhoto);
  useEffect(() => {
    if (typeof photo === 'string') {
      const source = {uri: photo};
      setImage(source);
    }
  }, []);

  return (
    <View style={styles.page}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.wrapChat}>
        <View style={styles.container}>
          <Text style={styles.text}>{chatContent}</Text>
        </View>
        <Text style={styles.time}>{chatTime}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  page: {
    maxWidth: '70%',
    color: colors.text.secondary,
    alignSelf: 'flex-start',
    marginRight: 16,
    marginTop: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: colors.default,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    padding: 12,
  },
  wrapChat: {marginLeft: 12},
  avatar: {height: 30, width: 30},
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.primary[400],
    alignSelf: 'flex-end',
  },
  time: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: fonts.primary[400],
    alignSelf: 'flex-start',
  },
});
