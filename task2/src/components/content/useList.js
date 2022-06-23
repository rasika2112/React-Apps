import { useState } from "react";

const useList = () => {
  const [listItems, setListItem] = useState([]);

  const deleteItem = (id) => {
    const newList = listItems.filter((item, index) => index !== id && item);

    setListItem(newList);
    console.log("Previous List", listItems);
  };

  const handleSubmit = (item) => setListItem((prevItems) => [...prevItems, item]);

  return {
    listItems,
    deleteItem,
    handleSubmit
  };
};

export default useList;
