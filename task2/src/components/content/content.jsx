import React from "react";
import { useEffect } from "react";

import { DisplayList } from "../displayList";
import { TextBox } from "../textBox";

import useList from "./useList";

const Content = () => {
  const { listItems, deleteItem, handleSubmit } = useList();

  useEffect(() => {
    console.log("New List:", listItems);
  }, [listItems]);

  return (
    <>
      <TextBox onSubmit={handleSubmit} listItems={listItems} />
      <DisplayList list={listItems} deleteItem={deleteItem} />
    </>
  );
};

export default Content;
