import React from "react"

export const TableHeaderItem = (props) => {
    const {
        children
    } =props
    return (
       <th scope="col">{children}</th>
    )
}

export default TableHeaderItem