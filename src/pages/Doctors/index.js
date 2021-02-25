import React from 'react';
import {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {doctors} from '../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts} from '../../utils';

const Doctors = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctors, setCategoryDoctors] = useState([]);
  const [ratedDoctor, setRatedDoctor] = useState([]);

  useEffect(() => {
    Firebase.database()
      .ref('category_doctors/')
      .once('value')
      .then((data) => {
        if (data.val()) {
          setCategoryDoctors(data.val());
        }
      });
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((data) => {
        const item = Object.values(data.val());
        if (item) {
          setRatedDoctor(item);
        }
      });

    Firebase.database()
      .ref('news/')
      .once('value')
      .then((data) => {
        if (data.val()) {
          setNews(data.val());
        }
      });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          <HomeProfile onPress={() => navigation.replace('UserProfile')} />
          <Text style={styles.textKonsultasi}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.DoctorCategory}>
                <Gap width={16} />
                {categoryDoctors.map((item) => {
                  return (
                    <DoctorCategory
                      category={item.doctor}
                      photo={item.photo}
                      key={item.id}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}

                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Gap height={16} />
          <Text>Top Rated Doctor</Text>
          <Gap height={16} />
          <View>
            {ratedDoctor.map((item, index) => {
              return (
                <RatedDoctor
                  key={index}
                  name={item.fullName}
                  specialis={item.profession}
                  rated={item.rate}
                  photo={item.photo}
                  onPress={() => navigation.navigate('DoctorProfile')}
                />
              );
            })}
          </View>
          <Gap height={16} />
          <Text>Good News</Text>
          <Gap height={16} />
          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapper: {
    marginHorizontal: -16,
  },
  textKonsultasi: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
    width: 209,
    marginTop: 30,
  },
  DoctorCategory: {
    flexDirection: 'row',
  },
});
