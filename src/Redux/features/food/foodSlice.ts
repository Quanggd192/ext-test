import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FoodState {
  type: string;
}

const initialState: FoodState = {
  type: "",
};

export const foodSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { setType } = foodSlice.actions;

export default foodSlice.reducer;
