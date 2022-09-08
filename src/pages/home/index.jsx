import React from 'react';

import Battlefield from '@/components/battlefield';
import Chat from '@/components/chat';
import RoomConfig from '@/components/config';
import Scoreboard from '@/components/scoreboard';

function HomePage() {
  return (
    <div className="mx-auto px-6 md:px-8 lg:h-screen xl:px-10 2xl:container">
      <div className="flex h-[10%] items-center justify-center pt-8">
        <h1 className="font-mont text-4xl font-bold text-white">Jokenpo</h1>
        <p className="font-baby text-4xl  font-semibold text-[#FFA200]">.io</p>
      </div>
      <section className="grid h-[90%] grid-cols-1 gap-4 py-8 lg:grid-cols-4 lg:grid-rows-2">
        <Scoreboard />
        <Battlefield />
        <Chat />
        <RoomConfig />
      </section>
    </div>
  );
}

export default HomePage;
