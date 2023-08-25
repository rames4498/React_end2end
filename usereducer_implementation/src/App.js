import React, { useReducer } from 'react'
import './App.css'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
//import DataFetchingOne from './components/DataFetchingOne'
import DataFetchingTwo from './components/DataFetchingTwo'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()

function App() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
    
			<div className="App">
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<CounterOne /> 
				{/* <CounterTwo /> */}
				{/* <CounterThree /> */}
				{/* {count} */}
				 {/* <ComponentA /> 
				<ComponentB /> 
				 <ComponentC />  */}
				{/* <DataFetchingOne /> */}
				 <DataFetchingTwo /> 
		
		</CountContext.Provider>
    </div>
	)
}

export default App