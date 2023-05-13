import { FlatList, StyleSheet, View } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menutItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={{ ...styles.container, ...appStyles.globalMargin }}>
      <FlatList
        data={menuItems}
        ItemSeparatorComponent={() => <ItemSeparator />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Menu Options" />}
        renderItem={({ item }) => <FlatListMenuItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
