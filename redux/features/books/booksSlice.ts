import { Book } from '@/types/type'
import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
	books: Book[]
}

const initialState: InitialState = {
	books: [],
}

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
})

export default booksSlice.reducer
// export const {changeCategory} = booksSlice.actions
