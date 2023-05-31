import React from 'react';
import TableHeaderItem from './TableHeaderItem';

export class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
             <table>
                <thead>
                    <tr>
                        <TableHeaderItem>{'Name'}</TableHeaderItem>
                        <TableHeaderItem>{'Quantity'}</TableHeaderItem>
                        <TableHeaderItem>{'Price'}</TableHeaderItem>
                    </tr>
                </thead>
             </table>
        )
       
    }
}

export default Table;
