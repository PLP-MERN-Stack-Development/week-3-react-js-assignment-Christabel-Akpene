const Card = ({ title, body }) => {
  return (
    <div className="w-lg h-42 border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-3 items-center rounded-lg shadow-lg hover:scale-103 transition duration-150 ease-in-out">
      <p className="font-extrabold text-lg text-black dark:text-white">
        {title}
      </p>
      <p className="italic text-base text-gray-700 dark:text-gray-300">
        {body}
      </p>
    </div>
  );
};

export default Card;
