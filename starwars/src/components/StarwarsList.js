import React from 'react';
import Character from './Character';

const StarwarsList = props => {
    return (
        <div>
            {props.banana.map(item => {
                return <Character character={item} />;
            })}
        </div>
    );
};

export default StarwarsList;
