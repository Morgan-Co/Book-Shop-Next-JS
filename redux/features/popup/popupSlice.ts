import { createSlice } from '@reduxjs/toolkit'

const popupSlice = createSlice({
	name: 'popup',
	initialState: {
		isOpen: false,
		data: []
	},
	reducers: {
		togglePopup: (state) => {
			state.isOpen = !state.isOpen
		},
	},
})

export default popupSlice.reducer
export const { togglePopup } = popupSlice.actions
