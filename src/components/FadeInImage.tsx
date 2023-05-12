import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';

interface Props {
  uri: string;
}

export const FadeInImage = (props: Props) => {
  const [isLoading, setIsloading] = useState(true);
  const { uri } = props;
  const { opacity, fadeIn } = useAnimation();

  const finishLoading = () => {
    setIsloading(false);
    fadeIn();
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color="tomato"
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={{ width: '100%', height: 400, opacity }}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};
