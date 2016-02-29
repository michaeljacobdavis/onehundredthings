import React, { View } from 'react-native';
import Camera from '../components/Camera';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../actions/item';

function mapStateToProps(state) {
  return {
    item: state.item
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemActions, dispatch);
}

const AddItemPage = () => (
  <View>
    <Camera />
  </View>
);

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);
