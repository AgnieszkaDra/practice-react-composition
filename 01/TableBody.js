import React from "react"

export const TableBody = (props) => {
    const {
        children
    } =props
    return (
        <tbody>
            {children}
        </tbody>
      
    )
}

export default TableBody