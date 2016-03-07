import React, {
  View,
  Image,
  Picker,
  PropTypes,
  ScrollView,
  Component,
  StyleSheet
} from 'react-native';
import Camera from '../components/Camera';
import Button from '../components/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsActions from '../actions/items';
import { Actions } from 'react-native-router-flux';
import TextField from 'react-native-md-textinput';

const styles = StyleSheet.create({
  container: {
    marginTop: 64
  },
  image: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 150
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

class AddItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = props.currentItem || {
      image: null,
      name: '',
      tags: []
    };

    this.handleName = this.handleName.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  handleName(name) {
    this.setState({
      name
    });
  }

  handleImage(image) {
    this.setState({
      image
    });
  }

  handleTags(tagString) {
    this.setState({
      tags: tagString.split(',')
    });
  }

  saveItem() {
    if (this.state._id) {
      this.props.update(this.state);
    } else {
      this.props.add({
        added: new Date().getTime(),
        ...this.state
      });
    }
    Actions.list();
  }

  renderImage(image) {
    if (image) {
      return (
        <View>
          <Image style={styles.image} source={{ uri: image }} />
          <Camera onSelect={this.handleImage}>
            Change Photo
          </Camera>
        </View>
        );
    }
    return (
      <Camera onSelect={this.handleImage}>
        Take a Photo
      </Camera>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderImage(this.state.image)}
        <ScrollView>
          <TextField
            label="Name"
            value={this.state.name}
            onChangeText={this.handleName} />
        </ScrollView>
        <ScrollView>
          <TextField
            label="Tags"
            value={this.state.tags.join(', ')}
            onChangeText={this.handleTags} />
        </ScrollView>
        <Button
          onPress={this.saveItem}>
          Save Item
        </Button>
      </View>
    );
  }
}

AddItemPage.propTypes = {
  add: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);
