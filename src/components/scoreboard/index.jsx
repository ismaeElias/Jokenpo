import React from 'react';

export default function Scoreboard() {
  return (
    <div className="justify-between flex-nowrap flex-grow bg-white p-6 rounded-xl shadow-lg space-y-4">
      <h3 className="text-center font-bold pb-3">Placar</h3>
      <div className="flex items-center flex-row space-x-4">
        <div className="bg-primary rounded-full w-14 h-14"></div>
        <div className="">
          <p className="text-xs">Fernando</p>
          <p className="text-base font-bold">4 vitórias</p>
        </div>
      </div>
      <div className="flex items-center flex-row space-x-4">
        <div className="bg-primary rounded-full w-14 h-14"></div>
        <div className="">
          <p className="text-xs">Fernando</p>
          <p className="text-base font-bold">4 vitórias</p>
        </div>
      </div>
    </div>
  );
}
