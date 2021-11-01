import React from "react";
import { Typography } from "@material-ui/core";
import {ErrorImage, ErrorPageContainer} from "./styled"
import error from "../../assents/error.jpg"

const ErrorPage = () =>{
    return (
        <ErrorPageContainer>
            <ErrorImage src={error}/>
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Pagina nao encontrada</Typography>
        </ErrorPageContainer>
    )
}
export default ErrorPage