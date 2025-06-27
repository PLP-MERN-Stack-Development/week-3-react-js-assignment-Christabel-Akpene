import { FaRegSun } from "react-icons/fa";

export default function Navigation() {
  return (
    <div className="mx-10 my-8">
        <header className="flex justify-between items-center ">
            <h1 className="font-bold text-3xl font-mono ">Task Manager</h1>
            <nav className="text-lg space-x-4 ">
                <a href="tasks" className="hover:underline hover:text-zinc-400 transition duration-300 ease-in-out" >Tasks</a>
                <a href="posts" className="hover:underline hover:text-zinc-400 transition duration-300 ease-in-out" >Posts</a>
            </nav>
            <div className="flex items-center text-sm">Theme <span className="px-3 cursor-pointer"><FaRegSun /> </span></div>
        </header>
    </div>
  )
}
