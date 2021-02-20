import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets/icon';
import {colors, fonts} from '../../../utils';

const TabItem = ({label, active, onPress, onLongPress, isFocused, options}) => {
  const Icon = () => {
    if (label === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (label === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (label === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.label(active)}>{label}</Text>
    </TouchableOpacity>
    // <TouchableOpacity
    //   accessibilityRole="button"
    //   accessibilityState={isFocused ? {selected: true} : {}}
    //   accessibilityLabel={options.tabBarAccessibilityLabel}
    //   testID={options.tabBarTestID}
    //   onPress={onPress}
    //   onLongPress={onLongPress}
    //   style={{flex: 1}}>
    //   <Icon />
    //   <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
    // </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: (active) => ({
    color: active ? colors.text.menuActive : colors.text.menuInActive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
