import React, {
  TouchableHighlight,
  PropTypes,
  Text,
  StyleSheet,

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

const Button = ({ content, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#1976D2"
    style={styles.button}>
    <Text style={styles.buttonText}>{content}</Text>
  </TouchableHighlight>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
