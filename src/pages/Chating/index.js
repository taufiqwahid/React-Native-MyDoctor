import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ChatItem from '../../components/molecules/ChatItem';
import Header from '../../components/molecules/Header';
import InputChat from '../../components/molecules/InputChat';
import {colors, fonts, getChatTime, setChatDate} from '../../utils';
import {Firebase} from '../../config';

const Chating = ({navigation, route}) => {
  const dataDoctor = route.params;
  console.log(dataDoctor);
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
          console.log('nothing');
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
    const urlChatting = `chatting/${chatID}/allChat/${setChatDate(today)}`;

    const urlMessageUser = `message/${user.uid}/${chatID}`;
    const urlMessageDoctor = `message/${dataDoctor.uid}/${chatID}`;
    const dataHistoryMessageForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.uid,
    };
    const dataHistoryMessageDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };
    setChatContent(chatContent);

    Firebase.database()
      .ref(urlChatting)
      .push(data)
      .then(() => {
        setChatContent('');
        Firebase.database().ref(urlMessageUser).set(dataHistoryMessageForUser);
        Firebase.database().ref(urlMessageDoctor).set(dataHistoryMessageDoctor);
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
        {chatData.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.chatDate}>{item.id}</Text>
              {item.data.map((item, index) => {
                return (
                  <ChatItem
                    key={index}
                    isMe={user.uid === item.data.sendBy}
                    data={item}
                    photo={dataDoctor.photo}
                  />
                );
              })}
            </View>
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
