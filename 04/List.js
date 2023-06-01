import React from 'react';

class List extends React.Component {
    render() {
        const {list} = this.props;
        return <ul>{list.map(element => {
           return <><li>{element.name}</li>
                <li>{element.size}</li>
                <li>{element.content}</li>
            </>
        } 
            )
    }</ul>
    }
}

export default List;