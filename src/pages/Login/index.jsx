import React from 'react';
import { useNavigate } from 'react-router-dom';

import { UserIcon } from '@heroicons/react/24/solid';

import Botao from '../../components/botao';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex  flex-col items-center">
          <div className="mb-8  flex items-center">
            <h1 className="font-mont text-7xl font-bold text-white">Jokenpo</h1>
            <p className="font-baby text-7xl font-bold text-[#FFA200]">.io</p>
          </div>
          <div className="flex h-72 w-72 flex-col items-center justify-between rounded-xl bg-white py-8 drop-shadow-md">
            <div>
              <h2 className="text-center text-2xl font-bold">Bem vindo!</h2>
              <p className="text-sm font-light">Insira um nickname para jogar:</p>
            </div>
            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-6 w-6 text-[#00000029]" />
              </div>
              <input
                type="text"
                placeholder="Insira seu nickname"
                className="block h-10 w-48 rounded-lg border border-[#F1F1F1] bg-gray-50 p-2.5 pl-10 text-sm font-bold text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
            <div className="w-32">
              <Botao
                onClick={() => {
                  navigate('/home');
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
