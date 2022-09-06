import axios from "axios";
import { BASE_URL } from "../constants/urls";

const createRecipe = (body, clear) => {
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((response) => {
        alert(response.data.message)
        clear()
    }).catch((error) => {
        alert(error.response.message)
    })
}

export default createRecipe;