import React, {
  View,
  PropTypes,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

const App = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};


export default App;
