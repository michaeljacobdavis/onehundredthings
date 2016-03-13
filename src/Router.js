import React, {
  Text,
  PropTypes
} from 'react-native';
import {
  Route,
  Router as RouterComponent,
  Actions
} from 'react-native-router-flux';
import ListPage from './containers/ListPage';
import ItemPage from './containers/ItemPage';
import { connect } from 'react-redux';

const TabIcon = ({ selected, title }) => (
  <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
);

TabIcon.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

function addItem() {
  Actions.item();
}

const Router = connect()(RouterComponent);
const Routing = () => (
  <Router name="root">
    <Route name="list" schema="tab" component={ListPage} initial={true} rightTitle="+ Add" onRight={addItem} title="My Things" />
    <Route name="item" schema="tab" component={ItemPage} title="Add" />
  </Router>
);

export default Routing;
