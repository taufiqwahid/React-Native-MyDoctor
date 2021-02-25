import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DDokter1} from '../../assets';
import Header from '../../components/molecules/Header';
import List from '../../components/molecules/List';
import {Firebase} from '../../config';

const ChooseDoctor = ({navigation, route}) => {
  const [profile, setProfile] = useState([]);
  const {doctor} = route.params;
  useEffect(() => {
    Firebase.database()
      .ref('doctors/')
      .once('value')
      .then((data) => {
        const item = Object.values(data.val());
        if (item) {
          setProfile(item);
        }
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
        {profile.map((item) => {
          if (item.category === doctor) {
            const photo = {uri: item.photo};
            return (
              <List
                key={item.id}
                name={item.fullName}
                desc={item.gender}
                image={photo}
                type="icon-next"
                onPress={() => navigation.navigate('DoctorProfile', item)}
              />
            );
          } else {
            // console.log('object');
          }
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
