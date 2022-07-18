import React from "react";
import { useEffect } from "react";

import { DisplayList } from "../displayList";
import { TextBox } from "../textBox";

import useList from "./useList";

const Content = () => {
  const {
    listItems,
    deleteItem,
    handleSubmit,
    edit,
    handleEdit,
    editItem,
    setEditItem,
  } = useList();

  useEffect(() => {
    console.log("New List:", listItems);
  }, [listItems]);

  return (
    <>
      <TextBox
        onSubmit={handleSubmit}
        onEdit={handleEdit}
        listItems={listItems}
        editItem={editItem}
        setEditItem={setEditItem}
      />
      <DisplayList list={listItems} deleteItem={deleteItem} edit={edit} />
    </>
  );
};

export default Content;
