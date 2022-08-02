import { useState } from 'react';

const useForm = (initalState) => {
    const [form, setForm] = useState(initalState)

    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const cleanFields = () => {
        setForm(initalState)
    }

    return { form, onChange, cleanFields }
}

export default useForm;