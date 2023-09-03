"use client";

import Link from "next/link";
interface INavLink {
  text: string;
  href: string;
}
export default function MainHeader() {
  const NavLink = (props: INavLink) => {
    return (
      <div className="group p-0 ml-10">
        <Link className="font-semibold text-white group-hover:text-green-400" href={props.href}>
          {props.text}
        </Link>
        <div className="group-hover:w-8 transition-all duration-500 ease-in-out h-px w-0 bg-white"></div>
      </div>
    );
  };
  return (
    <div className="container flex justify-between items-center h-10/100t bg-purple-500">
      <div className="w-9/12 mx-auto flex justify-between">
        <h1 className="font-sans font-bold text-xl text-white">Real-time Chat</h1>
        <div className="w-9/12 flex justify-end items-center">
          <NavLink text="Messenger" href="/sign-in"></NavLink>
          <NavLink text="Find Friends" href="/sign-in"></NavLink>
          <NavLink text="Sign In" href="/sign-in"></NavLink>
          <Link
            className="transition duration-300 ml-5 bg-green-500 hover:bg-transparent text-white font-semibold hover:bg-green-600 py-2 px-4 hover:border-transparent rounded"
            href={"/sign-in"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
