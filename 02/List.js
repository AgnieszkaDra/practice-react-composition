import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const {elements} = props;
    return (
        <ul>
           {elements.map(element => {
                return <ListItem key={element + Math.random()} data={element}/>
            })}
        </ul>
    )
}

export default List;
