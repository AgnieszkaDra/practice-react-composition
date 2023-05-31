import React from "react"

export const TableFooter= (props) => {
    const {
        children
    } =props
    return (
        <tfoot>
            <tr>{children}</tr>
        </tfoot>
      
    )
}

export default TableFooter