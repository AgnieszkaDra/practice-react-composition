import React from "react"

export const TableRow = (props) => {
    const {
        children
    } = props
    return (
        <tr>{children}</tr>
    )
}

export default TableRow