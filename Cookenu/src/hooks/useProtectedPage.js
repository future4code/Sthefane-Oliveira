import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { GoToLogin } from "../routes/Coordinator"


const useProtectedPage = ()=>{
    const history = useHistory()
    useLayoutEffect(()=> {
        const token = localStorage.getItem('token')
        if (!token){
            GoToLogin(history)
        }
    }, [history])
}
export default useProtectedPage