import React from "react"

export const TableHeader = (props) => {
    const {
        children
    } =props
    return (
        <thead>
            <tr>{children}</tr>
        </thead>
      
    )
}

export default TableHeader