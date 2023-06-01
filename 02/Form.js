import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
      } 

     
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={(e)=>handleSubmit(e, this.input.current.value)}>
                <input ref={this.input}/><input type="submit" value="Add to list"/>
            </form>
        )
    }
}

export default Form;