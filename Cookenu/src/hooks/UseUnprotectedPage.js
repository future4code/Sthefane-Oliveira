import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import {GoToRecipeList } from "../routes/Coordinator"


const useUnprotectedPage = ()=>{
    const history = useHistory()
    useLayoutEffect(()=> {
        const token = localStorage.getItem('token')
        if (token){
            GoToRecipeList(history)
        }
    }, [history])
}
export default useUnprotectedPage