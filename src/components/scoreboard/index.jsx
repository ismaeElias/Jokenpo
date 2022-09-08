import React from 'react';

export default function Scoreboard() {
  return (
    <div className="flex-grow flex-nowrap justify-between space-y-4 rounded-xl bg-white p-6 shadow-lg">
      <h3 className="pb-3 text-center font-bold">Placar</h3>
      <div className="flex flex-row items-center space-x-4">
        <div className="h-14 w-14 rounded-full bg-primary"></div>
        <div className="">
          <p className="text-xs">Fernando</p>
          <p className="text-base font-bold">4 vitórias</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <div className="h-14 w-14 rounded-full bg-primary"></div>
        <div className="">
          <p className="text-xs">Fernando</p>
          <p className="text-base font-bold">4 vitórias</p>
        </div>
      </div>
    </div>
  );
}
