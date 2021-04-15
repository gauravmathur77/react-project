import React from 'react'

export default function Child(props) {
    const gifts = props.gift.map((item) => <li key={item}>{item}</li>)
    return (
        <div>
            
            <h1>Input from parents</h1>
            <ul>{gifts}</ul>
            <button onClick={() => props.childEvent({message : 'yo was up papa'})}>Greet from child</button>
        </div>
    )
}
