import React from "react";
import { useNavigate } from "react-router-dom";

import { UserIcon } from "@heroicons/react/24/solid";

import Botao from "../../components/botao";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen h-screen bg-[#694AFD] flex items-center justify-center">
        <div className="flex  flex-col items-center">
          <div className="flex  items-center mb-8">
            <h1 className="text-white text-7xl font-bold font-mont">Jokenpo</h1>
            <p className="text-[#FFA200] font-bold text-7xl font-baby">.io</p>
          </div>
          <div className="w-72 h-72 bg-white rounded-xl flex flex-col justify-between items-center py-8 drop-shadow-md">
            <div>
              <h2 className="text-center font-bold text-2xl">Bem vindo!</h2>
              <p className="text-sm font-light">
                Insira um nickname para jogar:
              </p>
            </div>
            <div className="relative mb-6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <UserIcon className="h-6 w-6 text-[#00000029]" />
              </div>
              <input
                type="text"
                placeholder="Insira seu nickname"
                className="border-[#F1F1F1] border h-10 w-48 bg-gray-50 font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-32">
              <Botao
                onClick={() => {
                  navigate("/home");
                }}
              >
                PLAY
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
