import { useState } from "react";
import { Link } from "react-router-dom"
import { GetUser } from "./APIs/Login";


const inputStyle = "p-2 font-semibold outline-none border-none rounded-md";


export function Loginpage(){
    const [User,setUser] = useState({Gmail:"", Password:""});

    const HandleLogin = async (e)=>{
        e.preventDefault();
        const Respose = await GetUser(User);
        alert(Respose);
        setUser({Gmail:"", Password:""});
        console.log(User);
    }

    return(
    <div>
        <form onSubmit={HandleLogin} className="text-zinc-800 flex flex-col justify-between items-center bg-zinc-200 gap-5 p-5 w-80 h-96 rounded-sm"
        >
            <p className="font-semibold text-2xl">Login Page</p>
            <div className="flex flex-col gap-5 w-full ">
                <input className={inputStyle} value={User.Gmail} onChange={e=> setUser({ ...User, Gmail:e.target.value })} type="text" name="Gmail" placeholder="Gmail"/>
                <input className={inputStyle} value={User.Password} onChange={e=> setUser({ ...User, Password:e.target.value })} type="Password" placeholder="Password"name="Password"/>
                <button className={`bg-zinc-900 text-zinc-200 w-full ${inputStyle} `} type="submit">Login</button>
            </div>
            <div className="flex gap-3 font-semibold">
                <p className="text-zinc-700">Create Account?</p>
                <Link to="/">SignUp</Link>
            </div>
        </form>
    </div>)
}