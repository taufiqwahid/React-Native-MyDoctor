import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DDokter1, DDokter2, DDokter3} from '../../assets';
import {ListDoctor} from '../../components';
import {colors, Fonts} from '../../utils';

const Messages = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: DDokter1,
      name: 'Taufiq',
      chat: 'Sedang mengetik',
    },
    {
      id: 2,
      image: DDokter2,
      name: 'Wahid',
      chat: 'Sedang mengetik',
    },
    {
      id: 3,
      image: DDokter3,
      name: 'Reski',
      chat: 'Sedang mengetik',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {data.map((doctors) => {
          return (
            <ListDoctor
              key={doctors.id}
              image={doctors.image}
              name={doctors.name}
              chat={doctors.chat}
            />
          );
        })}
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
