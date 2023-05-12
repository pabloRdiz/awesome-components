import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appStyles } from '../theme/appTheme';

interface Props {
  title: string;
}

export const HeaderTitle = (props: Props) => {
  const { title } = props;
  const { top } = useSafeAreaInsets();
  const styles = createStyles(top);

  return (
    <View style={styles.header}>
      <Text style={appStyles.title}>{title}</Text>
    </View>
  );
};

const createStyles = (top: number) => {
  return StyleSheet.create({
    header: {
      marginTop: top + 20,
      marginBottom: 20,
    },
    separator: {
      borderBottomWidth: 1,
      marginVertical: 5,
      opacity: 0.4,
    },
  });
};
