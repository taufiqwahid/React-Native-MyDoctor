import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.page}>
      <ActivityIndicator size="large" color={colors.loading.animation} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.loading.background,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.loading.text,
    fontSize: 15,
    fontFamily: fonts.primary[400],
  },
});
