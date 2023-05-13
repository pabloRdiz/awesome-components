import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../contexts/themeContext/ThemeContext';
import { useContext } from 'react';

export interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

interface Props {
  item: MenuItem;
}

export const FlatListMenuItem = (props: Props) => {
  const { item } = props;
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme.colors.text);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(item.component as any);
      }}>
      <View style={styles.container}>
        <Text style={styles.itemText}>
          {item.icon}
          {' - '}
          {item.name}
        </Text>
        <Text>{'➡️'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const createStyles = (color: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      textAlign: 'center',
    },
    itemText: {
      fontSize: 16,
      fontWeight: '600',
      color: color,
    },
  });
