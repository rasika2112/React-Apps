import { useState } from "react";

const useList = () => {
  const [listItems, setListItem] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const deleteItem = (id) => {
    const newList = listItems.filter((item) => item.id !== id && item);

    setListItem(newList);
  };

  const handleSubmit = (item) => setListItem((prevItems) => [...prevItems, {id: Math.floor(Math.random()*100 + 1), value: item}]);

  const edit = (id) => setEditItem(listItems.find((item) => item.id === id));

  const handleEdit = () => {
    const newList = listItems.map((item) => {
      if (item.id === editItem.id) {
        return editItem
      }
    return item
    });

    setListItem(newList);
    setEditItem(null);
  };

  return {
    listItems,
    deleteItem,
    handleSubmit,
    edit,
    handleEdit,
    editItem,
    setEditItem
  };
};

export default useList;
