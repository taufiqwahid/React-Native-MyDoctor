import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/molecules/Header';
import List from '../../components/molecules/List';
import Loading from '../../components/molecules/Loading';
import {Firebase} from '../../config';

const ChooseDoctor = ({navigation, route}) => {
  const [profile, setProfile] = useState([]);
  const {doctor} = route.params;
  const stateGlobal = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(doctor)
      .once('value')
      .then((data) => {
        dispatch({type: 'SET_LOADING', value: false});
        if (data.val()) {
          const item = Object.values(data.val());
          setProfile(item);
        }
      });
  }, []);
  return (
    <>
      <View style={styles.page}>
        <ScrollView>
          <Header
            title={`Pilih ${doctor}`}
            type="dark"
            onPress={() => navigation.goBack()}
          />
          {profile.map((data, index) => {
            const photo = {uri: data.photo};
            return (
              <List
                key={index}
                name={data.fullName}
                desc={data.gender}
                image={photo}
                type="icon-next"
                onPress={() => navigation.navigate('DoctorProfile', data)}
              />
            );
          })}
        </ScrollView>
      </View>
      {stateGlobal.loading && <Loading />}
    </>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
