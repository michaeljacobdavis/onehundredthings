import React, {
  Text,
  PropTypes
} from 'react-native';
import {
  Route,
  Router as RouterComponent,
  Schema,
  TabBar
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

const Router = connect()(RouterComponent);
const Routing = () => (
  <Router name="root">
    <Schema name="tab" type="switch" icon={TabIcon} />

    <Route name="tabbar">
      <Router footer={TabBar}>
        <Route name="list" schema="tab" component={ListPage} initial={true} title="My Items" />
        <Route name="item" schema="tab" component={ItemPage} title="Item" />
      </Router>
    </Route>
  </Router>
);

export default Routing;
