import React from 'react'
import { useEffect } from 'react';
import DisplayList from './DisplayList';
import TextBox from './TextBox';
import useList from './useList';

const Content = () => {

    const { listItems, deleteItem, handleSubmit } = useList();

    useEffect(() => {
        console.log("New List:",listItems);
    },[listItems])

    return ( <>
    <TextBox onSubmit={handleSubmit} />
    <DisplayList list={listItems} deleteItem={deleteItem} />
    </> );
}
 
export default Content;