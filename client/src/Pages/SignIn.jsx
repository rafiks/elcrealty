import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInFailure, signInSuccess } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({}); //[username, email, password
  //const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false);
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh
    // add a try and catch block to catch error with signup

    try {
      //setLoading(true);
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }); // goto vite.config.js to add proxy
      const data = await res.json();
      if (data.success === false) {
        //setError(data.message);
        //setLoading(false);
        dispatch(signInFailure(data.message));
        return;
      }
      //setLoading(false);
      //setError(null);
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      //setLoading(false);
      //setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">

        <input
          className="border-2 border-gray-300 rounded-md p-3 "
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-3 "
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading...." : "Sign In"}
        </button>
      <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700 hover:underline">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}

