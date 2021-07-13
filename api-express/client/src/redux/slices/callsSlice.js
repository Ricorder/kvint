import { createSlice } from '@reduxjs/toolkit'
import initState from '../initState'

export const callsSlice = createSlice({
  name: 'calls',
  initialState: initState().calls,
  reducers: {
    findCalls(state, action) {
      return action.payload
    },
    changedStatus(state, action) {
      return state.map(call => {
        if (call._id === action.payload._id) {
          
          return {
            ...call,
            status: action.payload.status
          }
        }
        return call
      })
    },
  },
})

export const sendCalltoServer = ({ phone, status }) => async  (dispatch) => {
  await fetch("http://localhost:3006/api/v1/call", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone, status }),
  });
};

export const findndCalltoServer = () => async  (dispatch) => {
  const response = await fetch("http://localhost:3006/api/v1/call");
  const allCallFromServer = await response.json();
  dispatch(findCalls(allCallFromServer));
};

export const changeStatus = (id, status) => async (dispatch) => {
  const response = await fetch('http://localhost:3006/api/v1/call', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, status }),
  })
  const changeFromServer = await response.json()
  dispatch(changedStatus(changeFromServer));
}

export const { findCalls, changedStatus } = callsSlice.actions
export default callsSlice.reducer
