import { ADD_ITEM } from '../action-types/items';

const items = {
  Electronics: [
    {
      image: 'http://static1.squarespace.com/static/5410b3bee4b026adbd0c488f/t/541b5c27e4b019f079f788f1/1411079207340/computer1+copy.png',
      name: 'Desktop Computer',
      added: 1456686725450
    },
    {
      image: 'http://www.technobuffalo.com/wp-content/uploads/2013/10/Nexus-5-Press-Image-001-1280x874.jpg',
      name: 'Phone',
      added: 1456686725450
    }
  ],
  Clothes: [
    {
      image: 'http://www.customink.com/assets/site_content/products/220x225/unisex/color/blue-c8f5960ee511b84495b0da2854e4929c.jpg',
      name: 'Shirt',
      added: 1456686725450
    }
  ]
};

export const initialState = items;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        Clothes: state.Clothes,
        Electronics: [].concat.call(state.Electronics, [action.payload])
      };
    default:
      return state;
  }
}
