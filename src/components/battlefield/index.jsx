import React from 'react';

export default function Battlefield() {
  return (
    <div className="items-center space-y-10 rounded-xl bg-white p-6 shadow-lg lg:col-span-2 lg:row-span-2">
      <h3 className="pb-3 text-center font-bold">Campo de Batalha</h3>
      <div className=" items-center space-y-2">
        <p className="text-center text-6xl font-extrabold text-primary">10s</p>
        <p className="text-center text-xs">tempo restante</p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center space-x-4">
        <div className="flex flex-col  items-center justify-center space-y-4 rounded-xl border py-6 px-10">
          <div className="h-14 w-14 rounded-full bg-primary"></div>
          <p className="text-base font-bold">Pedra</p>
        </div>
        <div className="flex flex-col  items-center justify-center space-y-4 rounded-xl border py-6 px-10">
          <div className="h-14 w-14 rounded-full bg-primary"></div>
          <p className="text-base font-bold">Papel</p>
        </div>
        <div className="flex flex-col  items-center justify-center space-y-4 rounded-xl border py-6 px-10">
          <div className="h-14 w-14 rounded-full bg-primary"></div>
          <p className="text-base font-bold">Tesoura</p>
        </div>
      </div>
      <h3 className="font-base text-center ">Escolha entre pedra, papel ou tesoura</h3>
      <button
        className="rounded-md bg-primary py-2 px-8 font-extrabold text-white shadow"
        type="submit"
      >
        Escolher
      </button>
    </div>
  );
}
