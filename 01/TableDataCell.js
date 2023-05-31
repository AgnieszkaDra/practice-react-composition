import React from "react"

export const TableDataCell = (props) => {
    const {
        children
    } =props
    return (
        <td>{children}</td>
    )
}

export default TableDataCell