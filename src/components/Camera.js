import React, {
  PropTypes,
  Component
} from 'react-native';
import { ImagePickerManager } from 'NativeModules';
import Button from './Button';

const options = {
  title: 'Get a Photo',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...',
  chooseFromLibraryButtonTitle: 'Choose from Library...',
  cameraType: 'back',
  mediaType: 'photo',
  maxWidth: 500,
  maxHeight: 500,
  aspectX: 2,
  aspectY: 1,
  quality: 0.5,
  allowsEditing: false,
  noData: false, // TODO: Disable if we don't need bas64
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


class Camera extends Component {
  constructor(props) {
    super(props);
    this.selectPhoto = this.selectPhoto.bind(this, props.onSelect);
  }

  selectPhoto(onSelect) {
    ImagePickerManager.showImagePicker(options, (response) => {
      if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      } else {
        onSelect(`data:image/jpeg;base64,${response.data}`);
      }
    });
  }

  render() {
    return (
      <Button onPress={this.selectPhoto}>
        {this.props.children}
      </Button>
    );
  }
}

Camera.propTypes = {
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Camera;
