import React, {useEffect} from 'react';

const TableRow = ({ item }) => {
    useEffect(() => {
        console.log("TableRow rendered");
    })
    return ( 
        <>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
        </>
     );
}
 
export default TableRow;