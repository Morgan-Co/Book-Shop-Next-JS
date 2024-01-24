import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialState = {
	category: string
}

const initialState: InitialState = {
	category: 'Architecture',
}

const categorySlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload
		},
	},
})

export const { setCategory } = categorySlice.actions
export default categorySlice.reducer
