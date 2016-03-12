import React, {
  View,
  TouchableOpacity,
  Image,
  Text,
  PropTypes,
  ScrollView,
  Component,
  StyleSheet
} from 'react-native';
import Camera from '../components/Camera';
import Button from '../components/Button';
import Favorite from '../components/Favorite';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsActions from '../actions/items';
import { Actions } from 'react-native-router-flux';
import TextField from 'react-native-md-textinput';

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginBottom: 50,
    flex: 1
  },
  image: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 150
  },
  favoriteContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoriteText: {
    color: '#b0b0b0',
    fontSize: 16,
    flex: 1, marginLeft: 5
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
      favorite: false,
      tags: []
    };

    this.handleName = this.handleName.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
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

  handleFavorite() {
    this.setState({
      favorite: !this.state.favorite
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

  renderFavorite(isFavorite) {
    return (
      <View style={styles.favoriteContainer}>
        <Favorite enabled={isFavorite} size={50} />
        <Text
          style={styles.favoriteText}
          animation="slideInUp"
          easing="ease-in"
          duration={20}>
          {isFavorite ? 'I love this!' : ''}
        </Text>
      </View>
    );
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
        <TouchableOpacity
          onPress={this.handleFavorite}>
          {this.renderFavorite(this.state.favorite)}
        </TouchableOpacity>
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
  currentItem: PropTypes.object,
  update: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);
