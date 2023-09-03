"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

interface IUserSignUp {
  username: string | undefined;
  password: string | undefined;
}

export default function Page() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: IUserSignUp = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };
    await fetch("http://localhost:5294/account/sign-in", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          router.push("/");
        } else {
          alert("invalid username or password");
        }
      })
      .then((data) => console.log(data));
  };

  return (
    <div className="w-full max-w-xl  mx-auto my-auto">
      <form
        onSubmit={onSubmit}
        className="bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            ref={usernameRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            ref={passwordRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
