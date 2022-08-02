import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            alert('É preciso estar logado para acessar essa página.')
            navigate("/login")
        }
    }, [])
}

export default useProtectedPage;