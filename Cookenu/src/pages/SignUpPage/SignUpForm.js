import React from "react";
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import { useHistory} from 'react-router-dom'
import { InputsContainer, SignUpFormContainer, SignUpButtonContainer } from "./styled";
import { signUp } from "../../services/user";



const SignUpForm = ({setRightButtonText}) => {
    
    const history = useHistory()
    const [form, onChange, clear] = useForm({name: "",email: "", password:""})

    const onSubmitForm =(event) => {
        event.preventDefault()
        signUp(form, clear, history,setRightButtonText)
        
        
    }


    return(
  
                <form onSubmit={onSubmitForm}>
                <SignUpFormContainer>
                <InputsContainer>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin= {"normal"}
                    required
                    type={"name"}
                    />
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
            </InputsContainer>
            <SignUpButtonContainer>
            <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            
            >
             Fazer Cadastro
             </Button>
             </SignUpButtonContainer>
             </SignUpFormContainer>
             </form>

            
    )
}
export default SignUpForm