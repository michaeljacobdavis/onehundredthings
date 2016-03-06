import React, {
  Component,
  StyleSheet,
  View,
  Text,
  PixelRatio,
  PropTypes,
  ListView
} from 'react-native';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: '#B6B6B6',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#B6B6B6'
  },
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

const formatItems = (items) => {
  const list = {};
  items.forEach((item) => {
    item.tags.forEach((tag) => {
      if (list[tag]) {
        list[tag].push(item);
      } else {
        list[tag] = [item];
      }
    });
  });

  return list;
};

export const dataSource = new ListView.DataSource({
  rowHasChanged: (prev, next) => prev !== next,
  sectionHeaderHasChanged: (prev, next) => prev !== next
});

export const renderSectionHeader = (data, id) => (
  <View style={styles.section}>
    <Text style={styles.sectionText}>{id}</Text>
  </View>
);

export const renderRow = (item) => (
  <ListItem {...item} />
);


class List extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { items } = this.props;
    if (!items) {
      return <View><Text>Loading...</Text></View>;
    }
    if (!items.length) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>No Items! Add some to get started.</Text>
        </View>
      );
    }
    return (
      <ListView
        dataSource={dataSource.cloneWithRowsAndSections(formatItems(items))}
        renderSectionHeader={renderSectionHeader}
        renderRow={renderRow} />
    );
  }
}

List.propTypes = {
  fetch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default List;
