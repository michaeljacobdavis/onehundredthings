import React, { View, PropTypes } from 'react-native';
import Button from '../components/Button';
import List from '../components/List';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsActions from '../actions/items';

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch);
}

const ListPage = ({ items }) => (
  <View>
    <Button content="Add an Item" />
    <List items={items} />
  </View>
);

ListPage.propTypes = {
  items: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
