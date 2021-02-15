import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IsMe from './isMe.js';
import Other from './other.js';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;

const styles = StyleSheet.create({});
