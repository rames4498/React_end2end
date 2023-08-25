import React from 'react'

const Treasure = (props) => {
    console.log(props.name)
//return <h2>Welcome to the Treasure </h2>
return <h2> Treasure {props.name}</h2>

}

export default Treasure