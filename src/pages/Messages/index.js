import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListDoctor} from '../../components';
import {colors, Fonts} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontFamily: Fonts.primary[600],
    fontSize: 20,
    marginTop: 30,
    marginLeft: 16,
    color: colors.text.primary,
  },
});
