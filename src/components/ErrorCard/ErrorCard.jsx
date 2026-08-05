import React from 'react';

export const ErrorCard = ({ children }) => {
    return (
        <div className = 'card bg-danger'>
            <div className = 'card-body'>

                <h6 className = 'card-little'>Error</h6>
                <p className ='card-text'>{ children }</p>

            </div>
        </div>
    )
}