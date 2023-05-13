import { Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);

  const toogleTheme = () => {
    theme.currentTheme === 'light' ? setDarkTheme() : setLightTheme();
  };
  return (
    <View style={{ flex: 1 }}>
      <HeaderTitle title="Change theme" />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={toogleTheme}
        style={{
          backgroundColor: theme.colors.primary,
          justifyContent: 'center',
          marginHorizontal: 20,
          height: 50,
          borderRadius: 10,
        }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
          Toogle theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};
