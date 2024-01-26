// import { configureStore } from '@reduxjs/toolkit'
// import booksReducer from './features/books/booksSlice'
// import popupReducer from './features/popup/popupSlice'
// import categoryReducer from './features/categories/categorySlice'

// export const makeStore = () => {
// 	return configureStore({
// 		reducer: {
// 			books: booksReducer,
// 			popup: popupReducer,
// 			categories: categoryReducer,
// 		},
// 	})
// }

// export type AppStore = ReturnType<typeof makeStore>
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import booksReducer from './features/books/booksSlice'
import popupReducer from './features/popup/popupSlice'
import categoryReducer from './features/categories/categorySlice'
import storage from 'redux-persist/lib/storage'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
	books: booksReducer,
	popup: popupReducer,
	categories: categoryReducer,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export default store
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
