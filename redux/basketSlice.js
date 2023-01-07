import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[]
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.items = [...state.items,action.payload]
    },
    decrement: (state,action) => {
      let index = state.items.findIndex(item=>item.id === action.payload.id)
      let newItems = [...state.items]
      if(index >= 0){
        newItems.splice(index,1)
      }else {
        console.log("you can't decrase the number")
      }

      state.items = newItems
 


    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = basketSlice.actions

export default basketSlice.reducer