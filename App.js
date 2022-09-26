import React from 'react';
import { StatusBar, SafeAreaView, index } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold, 
} from '@expo-google-fonts/montserrat';

import index from '../../index';


export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

}


  <SafeAreaView>
    <StatusBar />
    <index />
  </SafeAreaView>


