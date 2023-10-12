import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
        setActiveUser: (state, action) => {
            state.email = action.payload.email
        },
        setLogOut: (state) => {
            state.email = null
        }
  }
});

export const { setActiveUser, setLogOut } = userSlice.actions

export const selectUserEmail = state => state.user.email

export default userSlice.reducer