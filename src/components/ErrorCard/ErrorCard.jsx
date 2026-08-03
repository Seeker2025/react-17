import React from 'react';

export const ErrorCard = ({ childred }) => {
    return (
        <div className = 'card bg-danger'>
            <div className = 'card-body'>

                <h6 className = 'card-little'>Error</h6>
                <p className ='card-text'>{ childred }</p>

            </div>
        </div>
    )
}