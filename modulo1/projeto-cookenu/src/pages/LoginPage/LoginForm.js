import React from "react";
import { InputContainer } from "./styled";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";

const LoginForm = ({rightButton, setRightButton}) => {
  const [form, handleInputChange, clear ] = useForm({ email: "", password: "" });

  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate, setRightButton)
    
  }

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          type={"email"}
          value={form.email}
          onChange={handleInputChange}
          label={"E-mail"}
          margin={"normal"}
          variant={"outlined"}
          fullWidth
          required
        />

        <TextField
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={handleInputChange}
          label={"Senha"}
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
  );
};

export default LoginForm;
