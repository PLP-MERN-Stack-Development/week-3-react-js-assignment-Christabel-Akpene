const Button = ({ text, onClick, isActive }) => {
  return (
    <div>
      <button
        className={`border border-gray-300 dark:border-zinc-600 px-2 py-2 w-50 block cursor-pointer text-black dark:text-white transition duration-300 ease-in-out ${isActive ? "font-extrabold bg-gray-200 dark:bg-zinc-700" : "bg-gray-50 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700" }`}
        onClick={onClick} >
        {text}
      </button>
    </div>
  );
};

export default Button;
