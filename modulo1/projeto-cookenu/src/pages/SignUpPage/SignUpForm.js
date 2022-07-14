import { Button, TextField } from "@mui/material";
import { InputContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/user";


const SignUpForm = () => {

    const navigate = useNavigate()
    
    const [form, handleInputChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
        
    }

    return (
        <InputContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        value={form.name}
                        label={"Nome"}
                        name={"name"}
                        onChange={handleInputChange}
                        margin={"normal"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                    />

                    <TextField 
                        value={form.email}
                        label={"E-mail"}
                        type={"email"}
                        name={"email"}
                        onChange={handleInputChange}
                        margin={"normal"}
                        variant={"outlined"}
                        fullWidth
                        required 
                    />

                    <TextField 
                        value={form.password}
                        label={"Senha"}
                        type={"password"}
                        name={"password"}
                        onChange={handleInputChange}
                        margin={"normal"}
                        variant={"outlined"}
                        fullWidth
                        required 
                    />
                    
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}    
                        margin={"normal"}
                    >
                        Fazer Login!
                    </Button>
                </form>
            </InputContainer>
    )
}

export default SignUpForm;