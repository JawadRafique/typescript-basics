import { title } from "process";
import React, { useState } from "react";

interface FormData {
    title: string;
    body: string;
}

const defaultFormData = {
    title: "",
    body: "",
};

export const Form = () => {
    const [formData, setFormData] = useState<FormData>(defaultFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };
    const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <>
            <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                id="body"
                value={formData.body}
                onChange={handleChange}
            />
            <button onClick={submitForm}>Click TO submit</button>
        </>
    );
};
