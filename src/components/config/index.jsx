import React from 'react';

export default function RoomConfig() {
  return (
    <div className="justify-between flex-nowrap flex-grow p-6 bg-white rounded-xl shadow-lg space-y-4">
      <h3 className="text-center font-bold pb-3">Configurações da sala</h3>
      <div className="flex justify-between flex-row space-x-4 items-center">
        <p className="text-base font-medium pr-5">Modo de jogo:</p>
        <p className="text-base text-primary">Melhor de 3</p>
      </div>
      <div className="flex justify-between flex-row space-x-4 items-center">
        <p className="text-base font-medium pr-5">Link:</p>
        <p className="text-base text-primary">jokenpo.io/khjgkjsa2</p>
      </div>
      <div className="flex justify-between flex-row space-x-4 items-center">
        <p className="text-base font-medium pr-5">Proprietario:</p>
        <p className="text-base text-primary">Fernando</p>
      </div>
    </div>
  );
}
