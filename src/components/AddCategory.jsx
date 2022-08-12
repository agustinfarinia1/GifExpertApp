import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue,setInputValue] = useState('');

    const handleChangeInputValue = ({target}) => {
        setInputValue(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputVerified = inputValue.trim();
        //Si solo tiene espacios vacios
        if(inputVerified.length <= 1) return;
        onNewCategory(inputVerified);
        setInputValue('');
    }

    return (
        <form    
            aria-label="form-add-category"
            style={{
                width:"100%",
                marginBottom:"1rem"
            }}
            onSubmit={handleSubmit}>
                <div style={{
                    display: "flex",
                    width:"95%",
                    minWidth:"10rem"}}>
                    <div style={{
                        display: "flex",
                        width:"80%",
                        minWidth:"20%"}}>
                        <input 
                            type='text'
                            placeholder='Type something...'
                            value={inputValue}
                            onChange={handleChangeInputValue}
                            style={{
                                width:"100%",
                                minWidth:"6rem",
                                borderRadius: "5px 0px 0px 5px"}}/>
                    </div>
                    <div style={{
                        display: "flex",
                        width:"20%"}}>
                        <button 
                            type="submit"
                            style={{
                                width:"100%",
                                minWidth:"4rem",
                                borderRadius: "0px 5px 5px 0px"}}>Submit
                        </button>
                    </div>
                </div>
        </form>
    );
}

AddCategory.propTypes={
    onNewCategory : PropTypes.func.isRequired,
}
