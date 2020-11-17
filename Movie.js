import {View, Text, Image} from 'react-native';
import React from 'react';

//ex 2
const movie = {title: 'Doctor Sleep', year: '2019'};

class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
      </View>
    );
  }
}

//ex 3
// const MOVIES_DATA = ['Doctor Sleep', 'Midway'];
//
// const MovieList = () => {
//   return MOVIES_DATA.map((title) => <Text> {title}</Text>);
// };
// export default MovieList;

//ex 4
// const MOVIES_DATA = [
//   {
//     title: 'Doctor Sleep',
//     year: '2019',
//   },
//   {
//     title: 'Midway',
//     year: '2019',
//   },
// ];
//
// const MovieList = () => {
//   return MOVIES_DATA.map((element) => {
//     return (
//       <View>
//         <Text>{element.title}</Text>
//         <Text>{element.year}</Text>
//       </View>
//     );
//   });
// };

//ex5


const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIES_DATA.map((element) => {
    return (
      <View>
        <Text>{element.title}</Text>
        <Text>{element.year}</Text>
        <Image source={element.poster} />
      </View>
    );
  });
};

export default MovieList;
