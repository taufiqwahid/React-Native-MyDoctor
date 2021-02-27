import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/molecules/Header';
import List from '../../components/molecules/List';
import {Firebase} from '../../config';

const ChooseDoctor = ({navigation, route}) => {
  const [profile, setProfile] = useState([]);
  const {doctor} = route.params;
  useEffect(() => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(doctor)
      .once('value')
      .then((data) => {
        const item = Object.values(data.val());
        setProfile(item);
      });
  }, []);
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header
          title={`Pilih ${doctor}`}
          type="dark"
          onPress={() => navigation.goBack()}
        />

        {profile.map((item, index) => {
          const photo = {uri: item.photo};
          return (
            <List
              key={index}
              name={item.fullName}
              desc={item.gender}
              image={photo}
              type="icon-next"
              onPress={() => navigation.navigate('DoctorProfile', item)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
