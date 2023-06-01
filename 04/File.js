import React from 'react';

class File extends React.Component {
    render() {
        const {addFile} = this.props;
        return <input onChange={(e)=> addFile(e)}type="file" multiple />
    }
}

export default File;