import React from 'react';

import Battlefield from '@/components/battlefield';
import Chat from '@/components/chat';
import RoomConfig from '@/components/config';
import Scoreboard from '@/components/scoreboard';

function HomePage() {
  return (
    <div className="container h-screen mx-auto">
      <div className="flex items-center">
        <h1 className="text-white text-7xl font-bold font-mont">Jokenpo</h1>
        <p className="text-[#FFA200] font-bold text-7xl font-baby">.io</p>
      </div>
      <section className="grid grid-cols-4 grid-rows-2 gap-4 py-8">
        <Scoreboard />
        <Battlefield />
        <Chat />
        <RoomConfig />
      </section>
    </div>
  );
}

export default HomePage;
