"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const RELEASE_DATE = new Date("2026-04-17T12:00:00Z");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState<number>(target.getTime() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(target.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}

export default function FantasySF6() {
  const timeLeft = useCountdown(RELEASE_DATE);
  const released = timeLeft <= 0;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="max-w-[96rem] mx-auto">
        <section id="hero" className="py-12">
          <h1 className="text-4xl md:text-7xl 2xl:text-9xl">Fantasy Street Fighter 6!</h1>
          <div className="w-full md:w-[75%] aspect-video rounded-lg overflow-hidden shadow-lg mb-0 mt-10 md:mt-20 mx-auto bg-neutral-800 flex items-center justify-center">
            {/* TODO: replace with fantasy trailer */}
            <p className="text-neutral-400 text-xl">Trailer coming soon</p>
          </div>
          <p className="mt-6 md:mt-15 text-lg md:text-xl 2xl:text-4xl">
            Introducing the first ever Street Fighter 6 Fantasy League! Create leagues, draft teams, and track leaderboards throughout the season!
          </p>
        </section>
          <section id="league">
            <div className="flex flex-col 2xl:flex-row gap-2 2xl:gap-6">
              <div className="w-full 2xl:w-[60%] self-center order-last 2xl:order-first">
                <p className="p-2 md:p-6 text-lg md:text-2xl">
                  Head on over to the league page to create your league with you and up to 4 friends: then build your dream teams! And what's a Fantasy League without trash talk? With realtime messaging and league updates, you can see exactly who's being drafted on every pick and share your absolutely NECESSARY opinions!
                </p>
              </div>
              <div className="w-full 2xl:w-[90%] mx-auto">
                <Image
                  src="/home/fantasy/league.png"
                  alt="The Fantasy League Player Pool"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </section>
          <section id="leaderboards">
            <div className="flex flex-col 2xl:flex-row gap-2 2xl:gap-6">
              <div className="w-full 2xl:w-[90%] mx-auto">
                <Image
                  src="/home/fantasy/leaderboards.png"
                  alt="The Fantasy League Player Pool"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <div className="w-full 2xl:w-[60%] self-center">
                <p className="p-2 md:p-6 text-lg md:text-2xl">Keep a sharp eye who's on top throughout the season on the leaderboards page. Take note of their rosters, both active and former, and maybe take a look at the loser to make sure you avoid their players at all costs!</p>
              </div>
            </div>
          </section>
          <section id="events">
            <div className="flex flex-col gap-2 2xl:gap-6">
              <div className="flex flex-col 2xl:flex-row gap-4 w-full mx-auto">
                <Image
                  src="/home/fantasy/events.png"
                  alt="The Fantasy League Player Pool"
                  width={1200}
                  height={800}
                  className="w-full h-auto hidden md:block"
                  unoptimized
                />
                <Image
                  src="/home/fantasy/standings.png"
                  alt="The Fantasy League Player Pool"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <div className="w-full">
                <p className="p-2 md:p-6 text-lg md:text-2xl">A CPT qualifier? A World Warrior Regional Finals? Or maybe just a big tournament? If it's where the competition's at, there'll be points on the line! Every time an event passes, the standings are uploaded and the scores updated. And with many, MANY, events on the line (and more yet to be announced), it's in your best interest to pick well-travelled players, not just your ranked warriors!</p>
              </div>
            </div>
          </section>
          <section id="trades">
            <div className="flex flex-col 2xl:flex-row gap-2 2xl:gap-6">
              <div className="w-full 2xl:w-[60%] self-center order-last 2xl:order-first">
                <p className="p-2 md:p-6 text-lg md:text-2xl">A player everyone's forgotten about? Your leaguemate not realising their team's full potential? Or maybe you want to bribe someone into taking a low-ball? Do it all on the trade page! Five trade windows throughout the season, and two trades per window, you better make them count if you wanna win!</p>
              </div>
              <div className="w-full 2xl:w-[90%] mx-auto">
                <Image
                  src="/home/fantasy/trades.png"
                  alt="The Fantasy League Player Pool"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </section>
          <section id="download" className="py-12 mt-10 mb-40">
            <div className="flex flex-col items-center md:items-start justify-center gap-10">
              <div className="w-full 2xl:w-[75%] self-center order-first">
                <p className="p-2 md:p-6 text-lg md:text-2xl">This app has been in development for 4 months and is finally out to the public! You can download the app here, or check out the source code below! The app is free and always will be, however if you would like to support me you can always simply star the repo on GitHub. More players, events, and updates will be coming throughout the season, if you have a feature you'd like to see, or an idea you just want to share, feel free to email me and I'll add it to the list!<br/><br/>Thank you for downloading, and I hope you win!</p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-15 mx-auto">
                <Image
                  src="/home/fantasy/logo.png"
                  alt="Fantasy SF6 Logo"
                  width={200}
                  height={200}
                  className="h-auto shrink-0"
                  unoptimized
                />
                <div className="flex flex-col gap-4">
                  {released ? (
                    <>
                      <a
                        href="https://github.com/bfararjeh/sf6-fantasy-league/releases/download/v1.4.0/FantasySF6.exe"
                        className="hidden md:block bg-[#006800] text-white font-bold text-xl px-8 py-4 rounded-2xl hover:brightness-120 transition-all text-center"
                      >
                        Download Fantasy SF6
                      </a>
                      <a
                        href="https://github.com/bfararjeh/sf6-fantasy-league"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#414141] text-white font-bold text-xl px-8 py-4 rounded-2xl hover:brightness-120 transition-all text-center"
                      >
                        View Source
                      </a>
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-neutral-400 text-sm uppercase tracking-widest mb-2">Releasing in</p>
                      <div className="flex gap-4 text-center">
                        {[{ label: "Days", value: days }, { label: "Hours", value: hours }, { label: "Mins", value: minutes }, { label: "Secs", value: seconds }].map(({ label, value }) => (
                          <div key={label} className="flex flex-col">
                            <span className="text-4xl font-bold tabular-nums">{String(value).padStart(2, "0")}</span>
                            <span className="text-neutral-400 text-xs uppercase tracking-widest">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
      </div>
    </main>
  );
}
