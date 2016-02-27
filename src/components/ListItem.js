import React, {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
  PixelRatio,
  PropTypes
} from 'react-native';

import time from 'vague-time';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFD',
    borderColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 25,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1 / PixelRatio.get(),
    marginTop: 10,
    alignSelf: 'center',
    marginRight: 15,
    marginLeft: 15
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 4,
    marginRight: 10,
    color: '#212121'
  },
  detailsLine: {
    fontSize: 12,
    marginBottom: 10,
    color: 'gray'
  }
});

const ListItem = ({ name, image, added, onSelect }) => (
  <TouchableHighlight onPress={onSelect}>
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.detailsLine}>
          {`added ${time.get({ from: new Date(), to: new Date(added) })}`}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  added: PropTypes.number.isRequired,
  onSelect: PropTypes.func
};

export default ListItem;
