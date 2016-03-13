import React, { View, PropTypes, StyleSheet } from 'react-native';
import List from '../components/List';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as ItemsActions from '../actions/items';

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1
  }
});

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch);
}

function selectItem(item) {
  Actions.item({
    currentItem: item
  });
}

const ListPage = (props) => (
  <View style={styles.container}>
    <List {...props} onSelect={selectItem} />
  </View>
);

ListPage.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
