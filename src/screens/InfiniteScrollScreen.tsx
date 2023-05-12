import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const renderItem = (item: number) => {
    return (
      <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />
      //   <Image
      //     style={{ width: '100%', height: 400 }}
      //     source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
      //   />
    );
  };

  const loadMore = () => {
    const newNumbers: number[] = [];

    for (let i = 0; i < 6; i++) {
      newNumbers[i] = numbers.length + 1 + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newNumbers]);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={styles.indicator}>
            <ActivityIndicator size={20} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    backgroundColor: 'green',
    fontSize: 20,
    height: 100,
  },
  indicator: {
    height: 150,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
});
