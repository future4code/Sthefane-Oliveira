import React from "react";
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assents/logo.jpg"
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import { useHistory} from 'react-router-dom'
import {GoToSignUp} from '../../routes/Coordinator'
import { login } from "../../services/user";
import useUnprotectedPage from "../../hooks/UseUnprotectedPage";


const LoginPage = ({ setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()

    

    const [form, onChange, clear] = useForm({email: "", password:""})
    const onSubmitForm =(event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
        
    }

    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin= {"normal"}
                    required
                    type={"email"}
                    />
                    <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin= {"normal"}
                    required
                    type={"password"}
                    />
                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                    >
                        Login
                    </Button>
                </form>
            </InputsContainer>
            <SignUpButtonContainer>
                <Button
                    onClick={() => GoToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}>
                            Cadastrar
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}
export default LoginPage