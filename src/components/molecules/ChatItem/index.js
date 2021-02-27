import React from 'react';
import {StyleSheet} from 'react-native';
import IsMe from './isMe.js';
import Other from './other.js';

const ChatItem = ({isMe, data, photo}) => {
  const dataChat = data.data;
  console.log('object', dataChat);
  if (isMe) {
    return (
      <IsMe chatContent={dataChat.chatContent} chatTime={dataChat.chatTime} />
    );
  }
  return (
    <Other
      chatContent={dataChat.chatContent}
      chatTime={dataChat.chatTime}
      photo={photo}
    />
  );
};

export default ChatItem;

const styles = StyleSheet.create({});
