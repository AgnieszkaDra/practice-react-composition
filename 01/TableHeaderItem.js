import React from "react"

export const TableHeader = (props) => {
    const {
        children
    } =props
    return (
       <th scope="col">{children}</th>
    )
}

export default TableHeader