import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import {GetUser} from '../src/APIs/getUser';

function User(){
    const params = useParams();
    
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await GetUser(params.UserName);
                console.log(res)
                if (res.Message !== "bad") {
                    setUser(res.Message);  
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [params.UserName]); 

    

    return(
   <div>
     <div>
            <h1> {user.FullName || `can't find any account with name ${params.UserName}`}</h1>
            <p>{user.Gmail || "No email provided"}</p>
        </div>
   </div>
    )
}

export {User}