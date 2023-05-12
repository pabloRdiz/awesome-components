import { useState } from 'react';
import { Platform, Switch } from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (isEnabled: boolean) => void;
}

export const CustomSwitch = (props: Props) => {
  const { isOn, onChange } = props;
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: 'tomato' }}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      //  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
