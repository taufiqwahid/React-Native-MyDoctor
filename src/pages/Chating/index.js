import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ChatItem from '../../components/molecules/ChatItem';
import Header from '../../components/molecules/Header';
import InputChat from '../../components/molecules/InputChat';
import {colors, Fonts} from '../../utils';

const Chating = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="dasd"
        name="Andi Muhammad Taufiq "
        specialis="Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe={true} />
        <ChatItem />
        <ChatItem isMe={true} />
        <ChatItem />
        <ChatItem isMe={true} />
        <ChatItem />
        <ChatItem isMe={true} />
        <ChatItem />
      </ScrollView>
      <InputChat />
    </View>
  );
};

export default Chating;

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'space-between', backgroundColor: 'white'},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: Fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 20,
  },
});
