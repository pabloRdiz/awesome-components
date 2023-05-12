import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const SwitchSreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { isHungry, isActive, isHappy } = state;

  const handleOnChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switchers" />
      <View style={styles.switchRow}>
        <Text style={styles.text}>Is Active</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => handleOnChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.text}>Is Hungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => handleOnChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.text}>Is Happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => handleOnChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.text}>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
