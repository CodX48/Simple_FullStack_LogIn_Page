import axios from "axios";

async function GetUser(UserName) {
    try {
        const res = await axios.get(`http://localhost:5000/user/${UserName}`);
        return res.data; 
    } catch (err) {
        return err.response ? err.response.data : "An error occurred"; // Return error message
    }
}

export { GetUser };
