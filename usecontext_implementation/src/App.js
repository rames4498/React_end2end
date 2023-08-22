import React from 'react'
import './App.css'
import ComponentD from './Components/ComponentD'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'Sherlock'}>
        <ChannelContext.Provider value={'Fictional_Detective'}>
					<ComponentD/>
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App