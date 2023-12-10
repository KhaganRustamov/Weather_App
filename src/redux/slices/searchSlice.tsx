import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchInitialState {
  searchValue: string;
}

const initialState: SearchInitialState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { changeSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
