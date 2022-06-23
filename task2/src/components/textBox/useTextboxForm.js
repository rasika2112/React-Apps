import { useState } from 'react';

const useTextboxForm = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Context: ", props.listItems);
        if (input !== '' ) {
            if (props.listItems.some((element) => element === input)) {
                console.log("Duplicated Item");
            }else {
                props.onSubmit(input);
            }
            
        }
        
        setInput("");
    };

    const handleChange = (e) => setInput(e.target.value);

    return { input, handleSubmit, handleChange };
}
 
export default useTextboxForm;