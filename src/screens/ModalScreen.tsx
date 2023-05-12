import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { Header } from '@react-navigation/stack';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <HeaderTitle title="Modal screen" />
      <Button title="Open modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 20,
              paddingHorizontal: 40,
              borderRadius: 8,
            }}>
            <Text>Modal Title</Text>
            <Text>Modal Body</Text>
            <Button title="Hide" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
