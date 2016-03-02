import React, {
  TouchableHighlight,
  PropTypes,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
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

const Button = ({ children, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#1976D2"
    style={styles.button}>
    <Text style={styles.buttonText}>{children}</Text>
  </TouchableHighlight>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
