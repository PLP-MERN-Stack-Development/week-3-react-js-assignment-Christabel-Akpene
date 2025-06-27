import React from 'react'

const Button = ({text, onClick, isActive}) => {
  return (
    <div>
       <button
          className={`border px-2 py-2 w-50 block cursor-pointer bg-gray-50 hover:bg-gray-200 transition duration-300 ease-in-out ${isActive ? "font-extrabold bg-gray-200 " : ""}`}
          onClick={onClick}
        >
          {text}
        </button>
    </div>
  )
}

export default Button