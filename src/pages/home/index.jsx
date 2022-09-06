import React from 'react';

import Battlefield from '@/components/battlefield';
import Chat from '@/components/chat';
import RoomConfig from '@/components/config';
import Scoreboard from '@/components/scoreboard';

function HomePage() {
  return (
    <div className="px-6 md:px-8 xl:px-10 2xl:container mx-auto lg:h-screen">
      <div className="h-[10%] pt-8 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold font-mont">Jokenpo</h1>
        <p className="text-[#FFA200] font-semibold  text-4xl font-baby">.io</p>
      </div>
      <section className="h-[80%]  grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 py-8">
        <Scoreboard />
        <Battlefield />
        <Chat />
        <RoomConfig />
      </section>
    </div>
  );
}

export default HomePage;
