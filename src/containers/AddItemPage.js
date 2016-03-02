import React, {
  View,
  Image,
  Picker,
  PropTypes,
  Component,
  StyleSheet
} from 'react-native';
import Camera from '../components/Camera';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import Button from '../components/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsActions from '../actions/items';

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
    item: state.item
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch);
}

class AddItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      name: '',
      importance: 'want'
    };

    this.handleName = this.handleName.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleImportance = this.handleImportance.bind(this);
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

  handleImportance(importance) {
    this.setState({
      importance
    });
  }

  saveItem() {
    this.props.addItem({
      added: new Date().getTime(),
      ...this.state
    });
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
        <FloatLabelTextInput
          placeHolder="Item Name"
          onChangeTextValue={this.handleName}
          value={this.state.name} />

        <Picker
          selectedValue={this.state.importance}
          onValueChange={this.handleImportance}>
          <Picker.Item label="I Need This" value="need" />
          <Picker.Item label="I Want This" value="want" />
          <Picker.Item label="I Have This" value="have" />
        </Picker>

        <Button
          onPress={this.saveItem}>
          Save Item
        </Button>
      </View>
    );
  }
}

AddItemPage.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);
