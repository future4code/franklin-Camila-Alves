import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import createRecipe from "../../services/recipe";

const AddRecipesForm = () => {
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <div>
                    <TextField 
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={'Título'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField 
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={'Descrição'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField 
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={'Foto'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                </div>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                >
                    Adicionar receita
                </Button>
            </div>
        </form>
    )
}

export default AddRecipesForm;