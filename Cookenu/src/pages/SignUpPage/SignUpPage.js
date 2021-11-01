import React from "react";
import { LogoImage, ScreenContainer } from "./styled";
import SignUpForm from "./SignUpForm";
import logo from "../../assents/logo.jpg"
import useUnprotectedPage from "../../hooks/UseUnprotectedPage";

const SingUpPage = ({setRightButtonText={setRightButtonText}}) => {
    useUnprotectedPage()
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm/>
        </ScreenContainer>
    )
}
export default SingUpPage