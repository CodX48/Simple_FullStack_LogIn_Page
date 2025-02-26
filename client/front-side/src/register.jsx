import { useState } from "react";
import { PostUser } from "./APIs/SignIn";
import { Link } from "react-router-dom";

const Registering = () => {
  const [User, setUser] = useState({ FullName: "", Gmail: "", Password: "", ProfilePic: "" });
  const [UnValid, setUnValid] = useState(false);

  const inputStyle = "p-2 font-semibold outline-none border-none rounded-md";

  const sendInfo = async (e) => {
    e.preventDefault();
    console.log(User)
    const response = await PostUser(User);
    if (response === "All Data Required") {
      setUnValid(true);
    } else {
      setUnValid(false);
      setUser({ FullName: "", Gmail: "", Password: "", ProfilePic: "" }); 
      alert(response);
    }
  };

  return (
    <form
      onSubmit={sendInfo}
      className="text-zinc-800 flex flex-col justify-between items-center bg-zinc-200 gap-5 p-5 w-80 h-fit rounded-sm"
    >
      <h2 className="font-semibold text-3xl">Sign Up</h2>
      <label htmlFor="ProfilePic" className="w-fit flex flex-col justify-center items-center cursor-pointer">
        <input
          type="file"
          name="pic"
          id="ProfilePic"
          hidden
          onChange={(e) => setUser({ ...User, ProfilePic: e.target.files[0] })}
        />
        <div
          className="w-28 h-28 bg-zinc-100 rounded-full border z-10 flex justify-center items-center"
          onClick={() => document.getElementById("ProfilePic").click()}
        >
          {User.ProfilePic ? (
            <img
              src={URL.createObjectURL(User.ProfilePic)}
              alt={`${User.FullName} pic`}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            "Click to Upload"
          )}
        </div>
      </label>

      <div className="flex flex-col gap-5 w-full">
        <input
          onChange={(e) => setUser({ ...User, FullName: e.target.value })}
          value={User.FullName}
          className={inputStyle}
          type="text"
          placeholder="Full Name"
          name="FullName"
        />
        <input
          onChange={(e) => setUser({ ...User, Gmail: e.target.value })}
          value={User.Gmail}
          className={inputStyle}
          type="text"
          placeholder="Gmail"
          name="Gmail"
        />
        <input
          onChange={(e) => setUser({ ...User, Password: e.target.value })}
          value={User.Password}
          className={inputStyle}
          type="password"
          placeholder="Password"
          name="Password"
        />
        {UnValid && <p className="text-red-800 text-sm">You must add the information</p>}
      </div>
      <button className={`bg-zinc-900 text-zinc-200 w-full ${inputStyle}`} type="submit">
        Sign Up
      </button>
      <div className="flex gap-3 font-semibold">
        <p className="text-zinc-700">Already Have an Account?</p>
        <Link to="/login">Log In</Link>
      </div>
    </form>
  );
};

export { Registering };
