import React from 'react';
import TableHeader from './TableHeader';
import TableHeaderItem from './TableHeaderItem';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableDataCell from './TableDataCell';

export class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return (
             <table>
                <TableHeader dataInfo={data}>
                    <TableHeaderItem>{Object.keys(data[0])[0]}</TableHeaderItem>
                    <TableHeaderItem>{Object.keys(data[0])[1]}</TableHeaderItem>
                    <TableHeaderItem>{Object.keys(data[0])[2]}</TableHeaderItem>
                    <TableHeaderItem>{Object.keys(data[0])[3]}</TableHeaderItem>        
                </TableHeader>
                <TableBody dataInfo={data}>
                    {data.map(element => {
                        return (
                            <TableRow key={element.id}>
                                <TableDataCell>{element.id}</TableDataCell>
                                <TableDataCell>{element.name}</TableDataCell>
                                <TableDataCell>{element.price}</TableDataCell>
                                <TableDataCell>{element.quantity}</TableDataCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </table>
        )
       
    }
}

export default Table;
