import { useState } from 'react';

const useTextboxForm = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const duplicate = props.listItems.some((element) => element.value.toLowerCase() === input.toLowerCase()) || (props.editItem!==null && props.listItems.some((element) => element.value.toLowerCase() === props.editItem.value.toLowerCase()))

        if (input!=='' && duplicate===false ) {
            console.log(props.listItems.some((element) => element.value.toLowerCase() === input.toLowerCase()));
            props.onSubmit(input);
        }else if (props.editItem && duplicate===false) {
                console.log(props.editItem);
                props.onEdit();
        }
        
        setInput("");
    };

    const handleChange = (e) => {
        if (props.editItem === null) {
            setInput(e.target.value)
        }else {
            props.setEditItem({...props.editItem, value: e.target.value})
        }
    };

    return { input, handleSubmit, handleChange };
}
 
export default useTextboxForm;