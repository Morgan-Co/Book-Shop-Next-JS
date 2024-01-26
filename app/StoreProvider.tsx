// 'use client'

// import { AppStore, makeStore } from '@/redux/store'
// import { useRef } from 'react'

// import React from 'react'
// import { Provider } from 'react-redux'

// const StoreProvider = ({ children }: { children: React.ReactNode }) => {
// 	const storeRef = useRef<AppStore>()

// 	if (!storeRef.current) {
// 		storeRef.current = makeStore()
// 	}
// 	return <Provider store={storeRef.current}>{children}</Provider>
// }

// export default StoreProvider

'use client'
import store, { persistor } from '@/redux/store'

import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	)
}

export default StoreProvider
