import React from 'react';

export default function RoomConfig() {
  return (
    <div className="flex-grow flex-nowrap justify-between space-y-4 rounded-xl bg-white p-6 shadow-lg">
      <h3 className="pb-3 text-center font-bold">Configurações da sala</h3>
      <div className="flex flex-row items-center justify-between space-x-4">
        <p className="pr-5 text-base font-medium">Modo de jogo:</p>
        <p className="text-base text-primary">Melhor de 3</p>
      </div>
      <div className="flex flex-row items-center justify-between space-x-4">
        <p className="pr-5 text-base font-medium">Link:</p>
        <p className="text-base text-primary">jokenpo.io/khjgkjsa2</p>
      </div>
      <div className="flex flex-row items-center justify-between space-x-4">
        <p className="pr-5 text-base font-medium">Proprietario:</p>
        <p className="text-base text-primary">Fernando</p>
      </div>
    </div>
  );
}
