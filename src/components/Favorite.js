import React, { PropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Favorite = ({ enabled, size }) => {
  if (enabled) {
    return <Icon name="favorite" color="#f66" size={size} />;
  }
  return <Icon name="favorite-border" color="#ccc" size={size} />;
};

Favorite.propTypes = {
  enabled: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired
};

export default Favorite;
