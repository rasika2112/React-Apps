import { useState } from 'react';

const useTextboxForm = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input !== '') {
            props.onSubmit(input);
        }
        
        setInput("");
    };

    const handleChange = (e) => setInput(e.target.value);
    return {
        input,
        handleSubmit,
        handleChange        
    };
}
 
export default useTextboxForm;