import React, { View, PropTypes, StyleSheet } from 'react-native';
import List from '../components/List';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsActions from '../actions/items';

const styles = StyleSheet.create({
  container: {
    marginTop: 64
  }
});

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch);
}

const ListPage = (props) => (
  <View style={styles.container}>
    <List {...props} />
  </View>
);

ListPage.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
