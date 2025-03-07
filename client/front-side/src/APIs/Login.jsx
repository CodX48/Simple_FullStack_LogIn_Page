import axios from "axios";

async function LoginUser(UserInfo) {
    try {
        const res = await axios.post("http://localhost:5000/login", UserInfo);
        return res.data; 
    } catch (err) {
        return err.response ? err.response.data : "An error occurred"; // Return error message
    }
}

export { LoginUser };
