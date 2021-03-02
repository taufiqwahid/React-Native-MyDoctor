import React, {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {List} from '../../components';
import Loading from '../../components/molecules/Loading';
import {Firebase} from '../../config';
import {colors, fonts} from '../../utils';

const Messages = ({navigation}) => {
  const user = Firebase.auth().currentUser;
  const urlMessageUser = `message/${user.uid}/`;
  const [historyChat, sethistoryChat] = useState([]);
  const stateGlobal = useSelector((state) => state);
  const dispatch = useDispatch();
  const [detailDoctor, setDetailDoctor] = useState({});

  useEffect(() => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.database()
      .ref(urlMessageUser)
      .on('value', async (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataHistoryChat = [];
          const promises = await Object.keys(data).map(async (key) => {
            await Firebase.database()
              .ref(`doctors/${data[key].uidPartner}`)
              .once('value', (item) => {
                dispatch({type: 'SET_LOADING', value: false});
                if (item) {
                  const detailDoctor = item.val();
                  setDetailDoctor(detailDoctor);
                  dataHistoryChat.push({
                    id: key,
                    ...data[key],
                    detailDoctor: detailDoctor,
                  });
                }
              });
          });

          await Promise.all(promises);
          sethistoryChat(dataHistoryChat);
        } else {
          dispatch({type: 'SET_LOADING', value: false});
          console.log('nothing');
        }
      });
  }, []);

  return (
    <>
      <View style={styles.page}>
        <View style={styles.content}>
          <Text style={styles.title}>Messages</Text>
          {historyChat.map((doctors, index) => {
            return (
              <List
                key={doctors.uidPartner}
                desc={doctors.lastContentChat}
                name={doctors.detailDoctor.fullName}
                image={{uri: doctors.detailDoctor.photo}}
                onPress={() => navigation.navigate('Chating', detailDoctor)}
              />
            );
          })}
        </View>
      </View>
      {stateGlobal.loading && <Loading />}
    </>
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
    fontFamily: fonts.primary[700],
    fontSize: 20,
    marginTop: 30,
    marginLeft: 16,
    color: colors.text.primary,
  },
});
