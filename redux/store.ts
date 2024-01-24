import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './features/books/booksSlice'
import popupReducer from './features/popup/popupSlice'
import categoryReducer from './features/categories/categorySlice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			books: booksReducer,
			popup: popupReducer,
			categories: categoryReducer,
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
