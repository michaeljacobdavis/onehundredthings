import React, {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  ListView
} from 'react-native';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  section: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#B6B6B6',
    borderColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  sectionText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
const items = {
  Electronics: [
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    },
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    },
    {
      image: 'http://www.technobuffalo.com/wp-content/uploads/2013/10/Nexus-5-Press-Image-001-1280x874.jpg',
      name: 'Phone',
      added: 1456686725450
    },
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    },
    {
      image: 'http://www.technobuffalo.com/wp-content/uploads/2013/10/Nexus-5-Press-Image-001-1280x874.jpg',
      name: 'Phone',
      added: 1456686725450
    },
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    }
  ],
  Clothes: [
    {
      image: 'http://www.customink.com/assets/site_content/products/220x225/unisex/color/blue-c8f5960ee511b84495b0da2854e4929c.jpg',
      name: 'Shirt',
      added: 1456686725450
    },
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    },
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    },
    {
      image: 'http://www.technobuffalo.com/wp-content/uploads/2013/10/Nexus-5-Press-Image-001-1280x874.jpg',
      name: 'Phone',
      added: 1456686725450
    },
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    },
    {
      image: 'http://www.technobuffalo.com/wp-content/uploads/2013/10/Nexus-5-Press-Image-001-1280x874.jpg',
      name: 'Phone',
      added: 1456686725450
    },
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    }
  ]
};

const dataSource = new ListView.DataSource({
  rowHasChanged: (prev, next) => prev !== next,
  sectionHeaderHasChanged: (prev, next) => prev !== next
});

const renderSectionHeader = (data, id) => (
  <View style={styles.section}>
    <Text style={styles.sectionText}>{id}</Text>
  </View>
);

const renderRow = (item) => (
  <ListItem
    name={item.name}
    image={item.image}
    added={item.added} />
);

const Gallery = () => (
  <ListView
    dataSource={dataSource.cloneWithRowsAndSections(items)}
    renderSectionHeader={renderSectionHeader}
    renderRow={renderRow} />
);

Gallery.propTypes = {
};

export default Gallery;
