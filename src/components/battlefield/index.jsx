import React from 'react';

export default function Battlefield() {
  return (
    <div className="items-center p-6 bg-white rounded-xl shadow-lg space-y-10 col-span-2 row-span-2">
      <h3 className="text-center font-bold pb-3">Campo de Batalha</h3>
      <div className=" items-center space-y-2">
        <p className="text-center font-extrabold text-6xl text-[#694AFD]">10s</p>
        <p className="text-center text-xs">tempo restante</p>
      </div>
      <div className="flex justify-center flex-wrap flex-row space-x-4 items-center">
        <div className="flex border  flex-col space-y-4 items-center rounded-xl justify-center py-6 px-10">
          <div className="bg-[#694AFD] rounded-full w-14 h-14"></div>
          <p className="text-base font-bold">Pedra</p>
        </div>
        <div className="flex border  flex-col space-y-4 items-center rounded-xl justify-center py-6 px-10">
          <div className="bg-[#694AFD] rounded-full w-14 h-14"></div>
          <p className="text-base font-bold">Papel</p>
        </div>
        <div className="flex border  flex-col space-y-4 items-center rounded-xl justify-center py-6 px-10">
          <div className="bg-[#694AFD] rounded-full w-14 h-14"></div>
          <p className="text-base font-bold">Tesoura</p>
        </div>
      </div>
      <h3 className="text-center font-base ">Escolha entre pedra, papel ou tesoura</h3>
      <button
        className="bg-[#694AFD] text-white font-extrabold py-2 px-8 rounded-md shadow"
        type="submit"
      >
        Escolher
      </button>
    </div>
  );
}
