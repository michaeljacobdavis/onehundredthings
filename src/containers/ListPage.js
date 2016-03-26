import React, { View, PropTypes, StyleSheet, Component } from 'react-native';
import List from '../components/List';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as ItemsActions from '../actions/items';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
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

class ListPage extends Component {
  componentWillReceiveProps(props) {
    if (!props.router.route || props.router.route.name === 'list') {
      // Set title based on items
      Actions.refresh({
        title: `My ${props.items.length} things`
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <List {...this.props} onSelect={selectItem} />
      </View>
    );
  }
}

ListPage.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
