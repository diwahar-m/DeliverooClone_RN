import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={{
          uri: 'https://cdn.dribbble.com/userupload/42510673/file/original-882346c1b8f56520716a55f857286c73.gif',
        }}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96 rounded-3xl"
      />
      <Animatable.Text
        animation={'slideInUp'}
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center">
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
