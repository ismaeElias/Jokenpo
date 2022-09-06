import React from 'react';

import Battlefield from '@/components/battlefield';
import Chat from '@/components/chat';
import RoomConfig from '@/components/config';
import Scoreboard from '@/components/scoreboard';

function HomePage() {
  return (
    <div className="px-8 xl:px-10 2xl:container mx-auto">
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-white text-4xl font-bold font-mont">Jokenpo</h1>
        <p className="text-[#FFA200] font-semibold  text-4xl font-baby">.io</p>
      </div>
      <section className="grid grid-cols-4 grid-rows-2 gap-4 py-8 max-h-[50rem]">
        <Scoreboard />
        <Battlefield />
        <Chat />
        <RoomConfig />
      </section>
    </div>
  );
}

export default HomePage;
