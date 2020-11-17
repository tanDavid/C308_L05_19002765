import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MovieL from './Movie';
import MovieList from './Movie';
import BoatList from './Boats';
const App: () => React$Node = () => {
  return (
    <View>
      <ScrollView>
        {/*<Text>"Lesson 05 Exercises."</Text>*/}
        {/*<MovieList />*/}
        <Text>GetABoat - For Sale</Text>
        <BoatList />
      </ScrollView>
    </View>
  );
};
export default App;
