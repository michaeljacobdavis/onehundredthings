import React, {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,

} from 'react-native';

import Gallery from './Gallery';
import Button from './Button';

import Camera from './Camera';

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  button: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    padding: 10
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

const listPage = (
  <View style={styles.container}>
    <Button content="Add an Item" />
    <Gallery />
  </View>
);

const addPage = (
  <View style={styles.container}>
    <Camera />
  </View>
);

const App = () => addPage;

export default App;
