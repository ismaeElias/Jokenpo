import React from 'react';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

function HomePage() {
  return (
    <div className="w-screen h-screen bg-[#694AFD] flex items-center justify-center flex-col">
      <div className="flex  items-center mb-8">
        <h1 className="text-white text-7xl font-bold font-mont">Jokenpo</h1>
        <p className="text-[#FFA200] font-bold text-7xl font-baby">.io</p>
      </div>
      <section
        id="game"
        className="flex flex-col w-full lg:flex-wrap lg:flex-row lg:justify-center xl:space-x-4"
      >
        <div className="flex flex-col lg:flex-row xl:flex-col order-3 xl:order-1 mb-4 md:min-w-full lg:min-w-0 lg:w-11/12 xl:max-w-xs xl:w-3/12 space-y-4 lg:space-y-0 xl:space-y-4">
          <div className="flex flex-col lg:mr-4 xl:mr-0 justify-between flex-nowrap flex-grow bg-white p-6 rounded-xl shadow-lg space-y-4">
            <h3 className="text-center font-bold pb-3">Placar</h3>
            <div className="flex items-center flex-row space-x-4">
              <div className="bg-[#694AFD] rounded-full w-14 h-14"></div>
              <div className="flex flex-col">
                <p className="text-xs">Fernando</p>
                <p className="text-base font-bold">4 vitórias</p>
              </div>
            </div>
            <div className="flex items-center flex-row space-x-4">
              <div className="bg-[#694AFD] rounded-full w-14 h-14"></div>
              <div className="flex flex-col">
                <p className="text-xs">Fernando</p>
                <p className="text-base font-bold">4 vitórias</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-nowrap flex-grow p-6 bg-white rounded-xl shadow-lg space-y-4">
            <h3 className="text-center font-bold pb-3">Configurações da sala</h3>
            <div className="flex justify-between flex-row space-x-4 items-center">
              <p className="text-base font-medium pr-5">Modo de jogo:</p>
              <p className="text-base text-[#694AFD]">Melhor de 3</p>
            </div>
            <div className="flex justify-between flex-row space-x-4 items-center">
              <p className="text-base font-medium pr-5">Link:</p>
              <p className="text-base text-[#694AFD]">jokenpo.io/khjgkjsa2</p>
            </div>
            <div className="flex justify-between flex-row space-x-4 items-center">
              <p className="text-base font-medium pr-5">Proprietario:</p>
              <p className="text-base text-[#694AFD]">Fernando</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col order-1 xl:order-2 mb-4 md:min-w-full lg:min-w-0 lg:w-7/12 xl:w-5/12  lg:mr-4 xl:mr-0 items-center p-6 bg-white rounded-xl shadow-lg space-y-10">
          <h3 className="text-center font-bold pb-3">Campo de Batalha</h3>
          <div className="flex flex-col items-center space-y-2">
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
        <div className="flex flex-col order-2 xl:order-3 mb-4 md:min-w-full lg:min-w-0 lg:w-4/12 xl:w-3/12 xl:max-w-xs bg-white p-6 rounded-xl">
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
      </section>
    </div>
  );
}

export default HomePage;
