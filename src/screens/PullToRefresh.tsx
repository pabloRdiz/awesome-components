import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';

export const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState('');

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setData('Hola mundo');
      setRefreshing(false);
    }, 2500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          progressViewOffset={15}
          progressBackgroundColor={'tomato'}
          colors={['white', 'orange', 'blue']}
          style={{ backgroundColor: 'coral' }}
          tintColor={'blue'}
          title="Refreshing"
        />
      }>
      <View style={styles.container}>
        <HeaderTitle title="Pull to refresh" />
        <HeaderTitle title={data} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
