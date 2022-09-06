import React from 'react';

import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function Chat() {
  return (
    <div className="bg-white rounded-xl max-h-[35rem] lg:max-h-full lg:row-span-2 ">
      <div className="flex flex-row h-full w-full overflow-x-hidden ">
        <div className="flex flex-col flex-auto h-full ">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full">
            <h3 className="text-center font-bold p-4 border-b border-gray-200">Chat</h3>
            <div className="flex flex-col h-full overflow-x-auto bg-slate-50">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <div className="col-start-1 col-end-12 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 flex-shrink-0">
                        F
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>Hey How are you today?</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-12 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 flex-shrink-0">
                        F
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi
                          illum saepe numquam maxime asperiores voluptate sit, minima perspiciatis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white flex-shrink-0">
                        I
                      </div>
                      <div className="relative mr-3 text-sm bg-primary text-white py-2 px-4 shadow rounded-xl">
                        <div>Im ok what about you?</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white flex-shrink-0">
                        I
                      </div>
                      <div className="relative mr-3 text-sm bg-primary text-white py-2 px-4 shadow rounded-xl">
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing. ?</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-12 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 flex-shrink-0">
                        F
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>Lorem ipsum dolor sit amet !</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white flex-shrink-0">
                        I
                      </div>
                      <div className="relative mr-3 text-sm bg-primary text-white py-2 px-4 shadow rounded-xl">
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing. ?</div>
                        <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                          Seen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-12 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 flex-shrink-0">
                        F
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 hidden col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div className="flex flex-row items-center">
                          <button className="flex items-center justify-center bg-primary hover:bg-indigo-800 rounded-full h-8 w-10">
                            <svg
                              className="w-6 h-6 text-white"
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
                          <div className="flex flex-row items-center space-x-px ml-4">
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-12 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-5 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-3 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                            <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full space-x-2 p-4 border-t border-gray-200">
              <div className="flex-grow">
                <div className="relative w-full ">
                  <input
                    type="text"
                    placeholder="Escreva aqui..."
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <FaceSmileIcon className="h-6 w-6 bg-white" />
                  </button>
                </div>
              </div>
              <button className="flex items-center justify-center  bg-primary hover:bg-primary-darker rounded-xl text-white w-10 h-10 flex-shrink-0">
                <span className="">
                  <PaperAirplaneIcon className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
