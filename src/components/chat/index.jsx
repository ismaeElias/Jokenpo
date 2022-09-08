import React from 'react';
import { useState } from 'react';

import { nanoid } from 'nanoid';

import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const messagesVal = [
  {
    content: 'Lorem ipsum dolor sit amet?',
    user: 'Fernando',
    sent: true,
  },
  {
    content: 'Consectetur adipisicing elit.',
    user: 'João',
    sent: false,
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi illum saepe numquam maxime asperiores voluptate sit, minima perspiciatis.',
    user: 'Fernando',
    sent: true,
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi illum saepe numquam maxime asperiores voluptate sit, minima perspiciatis.',
    user: 'Fernando',
    sent: true,
  },
];

function Chat() {
  const [messages, setMessages] = useState(messagesVal);
  const [userMessage, setUserMessage] = useState('');

  return (
    <div className="max-h-[35rem] rounded-xl bg-white lg:row-span-2 lg:max-h-full ">
      <div className="flex h-full w-full flex-row overflow-x-hidden ">
        <div className="flex h-full flex-auto flex-col ">
          <div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl">
            {/* header */}
            <h3 className="border-b border-gray-200 p-4 text-center font-bold">Chat</h3>
            {/* body */}
            <div className="flex h-full flex-col overflow-x-auto bg-slate-50">
              <div className="flex h-full flex-col">
                <div className="grid grid-cols-12 gap-y-2">
                  {messages.map((message) => {
                    if (message.sent) {
                      return <Sent key={nanoid()} message={message} />;
                    } else {
                      return <Received key={nanoid()} message={message} />;
                    }
                  })}
                  {/* <div className="col-start-1 col-end-8 hidden rounded-lg p-3">
                    <div className="flex flex-row items-center">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                        A
                      </div>
                      <div className="relative ml-3 rounded-xl bg-white py-2 px-4 text-sm shadow">
                        <div className="flex flex-row items-center">
                          <button className="flex h-8 w-10 items-center justify-center rounded-full bg-primary hover:bg-indigo-800">
                            <svg
                              className="h-6 w-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </button>
                          <div className="ml-4 flex flex-row items-center space-x-px">
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-4 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-8 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-8 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-10 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-10 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-12 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-10 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-6 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-5 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-4 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-3 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-10 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-10 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-8 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-8 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-1 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-1 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-8 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-8 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-2 w-1 rounded-lg bg-gray-500"></div>
                            <div className="h-4 w-1 rounded-lg bg-gray-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="flex w-full flex-row items-center space-x-2 border-t border-gray-200 p-4">
              <div className="flex-grow">
                <div className="relative w-full ">
                  <input
                    type="text"
                    onChange={(e) => setUserMessage(e.target.value)}
                    value={userMessage}
                    placeholder="Escreva aqui..."
                    className="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 hover:text-gray-600"
                  >
                    <FaceSmileIcon className="h-6 w-6 bg-white" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMessages([
                    ...messages,
                    { user: 'Fernando', content: userMessage, sent: true },
                  ]);
                  setUserMessage('');
                }}
                className="flex h-10 w-10  flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary-darker"
              >
                <span className="">
                  <PaperAirplaneIcon className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Received({ message }) {
  return (
    <div className="col-start-1 col-end-12 rounded-lg p-3">
      <div className="flex flex-row items-center">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
          F
        </div>
        <div className="relative ml-3 rounded-xl bg-white py-2 px-4 text-sm shadow">
          <div>{message.content}</div>
        </div>
      </div>
    </div>
  );
}

function Sent({ message }) {
  return (
    <div className="col-start-2 col-end-13 snap-end rounded-lg p-3">
      <div className="flex flex-row-reverse items-center justify-start">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
          F
        </div>
        <div className="relative mr-3 rounded-xl bg-primary py-2 px-4 text-sm text-white shadow">
          <div>{message.content}</div>
          <div className="absolute bottom-0 right-0 -mb-5 mr-2 hidden text-xs text-gray-500">
            Seen
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
