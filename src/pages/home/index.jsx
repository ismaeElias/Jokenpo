import React from "react";

function HomePage() {
  return (
    <div className="w-screen h-screen bg-[#694AFD] flex items-center justify-center flex-col">
      <div className="flex  items-center mb-8">
            <h1 className="text-white text-7xl font-bold font-mont">Jokenpo</h1>
            <p className="text-[#FFA200] font-bold text-7xl font-baby">.io</p>
          </div>
     <div className="grid grid-cols-[320px_minmax(500px,_1fr)_320px] grid-rows-2 gap-4 h-4/6 w-4/5">
      <div className="bg-white rounded-xl drop-shadow-md">
        Placar
      </div>
      <div className="row-span-2 bg-white   rounded-xl drop-shadow-md">
        Campo de batalha
      </div>
      <div className="row-span-2 bg-white  rounded-xl drop-shadow-md">
        Chat
      </div>
      <div className="bg-white rounded-xl drop-shadow-md">
        Configuração da sala
      </div>
     </div>
    </div>
  );
}

export default HomePage;