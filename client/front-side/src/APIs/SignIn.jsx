import axios from "axios";

async function PostUser(UserInfo) {
    try {
        const res = await axios.post("http://localhost:5000/register", UserInfo);
        return res.data; 
    } catch (err) {
        return err.response ? err.response.data : "An error occurred"; // Return error message
    }
}

export { PostUser };
