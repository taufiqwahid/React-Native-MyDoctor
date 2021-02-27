import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ChatItem from '../../components/molecules/ChatItem';
import Header from '../../components/molecules/Header';
import InputChat from '../../components/molecules/InputChat';
import {colors, fonts, getChatTime, setChatDate} from '../../utils';
import {Firebase} from '../../config';

const Chating = ({navigation, route}) => {
  const dataDoctor = route.params.params;
  const [chatContent, setChatContent] = useState('');
  const user = Firebase.auth().currentUser;
  const chatID = `${user.uid}_${dataDoctor.uid}`;
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    Firebase.database()
      .ref(`chatting/${chatID}/allChat`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const allDataChat = [];

          Object.keys(data).map((key) => {
            const dataChat = data[key];
            const newDataChat = [];

            allDataChat.push({
              id: key,
              data: newDataChat,
            });

            Object.keys(dataChat).map((keyChat) => {
              newDataChat.push({
                id: keyChat,
                data: dataChat[keyChat],
              });
            });
          });

          setChatData(allDataChat);
        } else {
          console.log('tidak ada ');
        }
      });
  }, []);

  const chatSend = () => {
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    const urlFirebase = `chatting/${chatID}/allChat/${setChatDate(today)}`;

    setChatContent(chatContent);

    Firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        name={dataDoctor.fullName}
        photo={dataDoctor.photo}
        specialis={dataDoctor.profession}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        {chatData.map((item) => {
          return (
            <>
              <Text style={styles.chatDate}>{item.id}</Text>
              {item.data.map((item) => {
                return (
                  <ChatItem
                    isMe={user.uid === item.data.sendBy}
                    data={item}
                    photo={dataDoctor.photo}
                  />
                );
              })}
            </>
          );
        })}
      </ScrollView>
      <InputChat
        value={chatContent}
        onChangeText={(value) => {
          setChatContent(value);
        }}
        onPress={() => chatSend()}
      />
    </View>
  );
};

export default Chating;

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'space-between', backgroundColor: 'white'},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 20,
  },
});
