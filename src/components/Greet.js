import React from 'react';

export const Greet = (props) => {
    return (
        <div>
            <h1>Welcome {props.name} - {props.job}</h1>  
        </div>
    )
};
