import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

export const userLoginInforSlice = createSlice({
  name: 'userLoginInfor',
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      console.log(action.payload);
      state.isLogin = action.payload.login;
    },
  },
});

export const { setLogIn } = userLoginInforSlice.actions;

export default userLoginInforSlice.reducer;
