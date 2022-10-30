import React from 'react'
import { createRoot } from 'react-dom/client'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import App from './components/app'

const root = createRoot( document.getElementById( 'root' ) ),
	  store = createStore( reducer )

root.render(
	<Provider store={ store }>
		<App />
	</Provider>
)
