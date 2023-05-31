import React from 'react';
import TableHeader from './TableHeader';
import TableHeaderItem from './TableHeaderItem';

export class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
             <table>
              <TableHeader>
                <TableHeaderItem>{'Name'}</TableHeaderItem>
                <TableHeaderItem>{'Quantity'}</TableHeaderItem>
                <TableHeaderItem>{'Price'}</TableHeaderItem>
              </TableHeader>
            </table>
        )
       
    }
}

export default Table;
