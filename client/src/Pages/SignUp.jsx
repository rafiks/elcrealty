import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" action="">
        <input
          className="border-2 border-gray-300 rounded-md p-3 "
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className="border-2 border-gray-300 rounded-md p-3"
          type="text"
          placeholder="email"
          id="email"
        />
        <input
          className="border-2 border-gray-300 rounded-md p-3"
          type="text"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in" className="text-blue-700 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
