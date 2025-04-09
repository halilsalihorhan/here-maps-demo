'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Restriction(): React.ReactElement {
  useEffect(() => {
    // Update time
    const updateTime = () => {
      const now = new Date();
      const twelveSecondsAgo = new Date(now.getTime() - 12000);
      if (document.getElementById('updateTime')) {
        document.getElementById('updateTime')!.textContent = twelveSecondsAgo.toLocaleTimeString();
      }
    };
    updateTime();
    setInterval(updateTime, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Restriction - Here Maps Demo</title>
      </Head>
      <div className="h-screen bg-[#2b2b2b] text-[#a9b7c6]">
        <div className="h-screen p-5">
          <div className="bg-[#3c3f41] rounded-lg p-4 h-full relative overflow-hidden shadow-md">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="bg-[rgba(60,63,65,0.9)] px-8 py-6 rounded-3xl shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Restricted Area</h1>
                <p className="m-1">Connection Status: <span className="text-[#6a8759] font-bold">Active</span></p>
                <p className="m-1">Last Location Update Time: <span id="updateTime"></span></p>
                <p className="mt-4 text-[#cc7832]">Access to this area is restricted.</p>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 z-10 bg-[rgba(158,157,157,0.62)] shadow-md">
              <img src="https://avatars.githubusercontent.com/u/2835506?s=200&v=4" alt="HERE Maps Logo" className="w-[90px] h-[90px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 