import React from 'react';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function Chat() {
  return (
    <div className="bg-white p-6 rounded-xl row-span-2">
      <h3 className="text-center font-bold pb-3">Chat</h3>
      <div className="flex justify-between flex-row flex-grow space-x-4 items-center"></div>
      <div className="flex flex-row">
        <form id="loginForm" className="flex flex-row justify-between space-x-2 w-full">
          <input
            placeholder="Escreva aqui..."
            type="name"
            className="flex-grow py-1.5 px-3 border rounded-md"
            name="nickname"
            id="nickname"
            required
          />
          <button
            className="flex self-center px-3 py-3 bg-[#694AFD] text-white font-extrabold rounded-md shadow"
            type="submit"
          >
            <PaperAirplaneIcon className="h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
}
