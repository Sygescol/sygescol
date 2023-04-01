import React from "react";

export default function FormParam76({
  title,
  abbr,
}: {
  title: string;
  abbr: string;
}) {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1>{title}</h1>
        <h2>{abbr}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-cyan-600 hover:stroke-light-green-500"
        >
          <title>Abrir Selección</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
}
