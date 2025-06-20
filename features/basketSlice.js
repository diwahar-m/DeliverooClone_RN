import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      console.log(index);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
        console.log(newBasket);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in basket`,
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToBasket, removeFromBasket} = basketSlice.actions;

export const selectBasketItems = state => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket?.items.filter(item => item.id === id);

export const selectBasketTotal = state =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
