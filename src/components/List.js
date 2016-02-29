import React, {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  PropTypes,
  ListView
} from 'react-native';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  section: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#B6B6B6',
    borderColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  sectionText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});

const dataSource = new ListView.DataSource({
  rowHasChanged: (prev, next) => prev !== next,
  sectionHeaderHasChanged: (prev, next) => prev !== next
});

const renderSectionHeader = (data, id) => (
  <View style={styles.section}>
    <Text style={styles.sectionText}>{id}</Text>
  </View>
);

const renderRow = (item) => (
  <ListItem
    name={item.name}
    image={item.image}
    added={item.added} />
);

const List = ({ items }) => (
  <ListView
    dataSource={dataSource.cloneWithRowsAndSections(items)}
    renderSectionHeader={renderSectionHeader}
    renderRow={renderRow} />
);

List.propTypes = {
  items: PropTypes.object.isRequired
};

export default List;
