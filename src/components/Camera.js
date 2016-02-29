import React from 'react-native';

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

const selectPhoto = () => {
  ImagePickerManager.showImagePicker(options, (response) => {
    if (response.error) {
      console.log('ImagePickerManager Error: ', response.error);
    } else {
      console.log(`data:image/jpeg;base64,${response.data}`);
    }
  });
};

const Camera = () => (
  <Button content="Select a Photo" onPress={selectPhoto} />
);

export default Camera;
