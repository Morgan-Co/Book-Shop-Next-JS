import { Book } from '@/types/type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialState = {
	books: Book[]
	totalPrice: number
}

const initialState: InitialState = {
	books: [],
	totalPrice: 0,
}

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addBookInBasket: (state, action: PayloadAction<Book>) => {
			state.books.push(action.payload)
		},
		deleteBookFromBasket: (state, action: PayloadAction<string>) => {
			state.books = state.books.filter(book => book.id !== action.payload)
		},
		countTotalPrice: (state, action: PayloadAction<number>) => {
			if (state.books.length > 0) {
				state.totalPrice = state.books.reduce(
					(accumulator, currentValue) =>
						accumulator +
						currentValue.saleInfo.retailPrice.amount * action.payload,
					0
				)
				return
			}
			state.totalPrice = 0
		},
	},
})

export default booksSlice.reducer
export const { addBookInBasket, deleteBookFromBasket, countTotalPrice } =
	booksSlice.actions
