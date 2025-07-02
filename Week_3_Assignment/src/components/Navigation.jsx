import { useState,useEffect } from "react";
import { FaRegSun, FaRegMoon  } from "react-icons/fa";
import { NavLink } from "react-router";

export default function Navigation() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme){
      setTheme(savedTheme)
    }
    else if(systemPrefersDark){
      setTheme("dark")
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme)
  }, [theme]);

  const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
  }


  return (
    <div className="mx-10 my-8">
      <header className="flex justify-between items-center ">
        <h1 className="font-bold text-3xl font-mono text-black dark:text-white">
          Task Manager
        </h1>
        <nav className="text-lg space-x-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:underline hover:text-zinc-400 transition duration-300 ease-in-out ${
                isActive
                  ? "text-zinc-400 underline"
                  : "text-black dark:text-gray-200"
              }`
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `hover:underline hover:text-zinc-400 transition duration-300 ease-in-out ${
                isActive
                  ? "text-zinc-400 underline"
                  : "text-black dark:text-gray-200"
              }`
            }
          >
            Posts
          </NavLink>{" "}
        </nav>
        <div className="flex items-center text-sm text-black dark:text-gray-200">
          Theme
          <span className="px-3 cursor-pointer" onClick={toggleTheme}>
            {theme === "dark" ? (  <FaRegSun />) : (<FaRegMoon />)}
          
          </span>
        </div>
      </header>
    </div>
  );
}
