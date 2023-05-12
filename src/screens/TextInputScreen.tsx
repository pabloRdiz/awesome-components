import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  View,
  Platform,
  Text,
} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

interface Form {
  name: string;
  email: string;
  phone: string;
  isSubscribed: boolean;
}

export const TextInputScreen = () => {
  const { form, handleChange } = useForm<Form>({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderTitle title="Textinput" />
          <TextInput
            autoCapitalize="words"
            autoCorrect={false}
            // keyboardType="ascii-capable"
            onChangeText={val => handleChange(val, 'name')}
            placeholder="Enter name"
            style={styles.input}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={val => handleChange(val, 'email')}
            placeholder="Enter email"
            style={styles.input}
          />
          <View style={styles.switchRow}>
            <Text style={styles.text}>Is Active</Text>
            <CustomSwitch
              isOn={form.isSubscribed}
              onChange={value => handleChange(value, 'isSubscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 4)} />
          <HeaderTitle title={JSON.stringify(form, null, 4)} />
          <TextInput
            keyboardType="phone-pad"
            onChangeText={val => handleChange(val, 'phone')}
            placeholder="Enter phone"
            style={styles.input}
          />
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderColor: 'rgba(0,0,0,0.7)',
    borderRadius: 5,
    borderWidth: 0.3,
    height: 40,
    margin: 12,
    padding: 10,
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
