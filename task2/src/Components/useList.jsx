import { useState } from 'react'

const useList = () => {

    const [listItems, setListItem] = useState([]);

    const deleteItem = (id) => {
        console.log(id);
        setListItem(listItems.slice(0, id).concat(listItems.slice(id+1, listItems.length )))
        console.log(listItems);
    };

    const handleSubmit = (item) => setListItem((prevItems) => [...prevItems, item]);
    return {
        listItems,
        deleteItem,
        handleSubmit
    };
}
 
export default useList;