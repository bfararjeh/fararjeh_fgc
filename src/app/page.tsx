"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MasonryGallery from "../components/MasonryGallery";
import ReturnSubs from "../components/ReturnSubs";
import { galleryImages } from "../lib/gallery";
import Link from "next/link";

export default function Home() {

  const reviews = [
    {
      name: "Narwen",
      text: "Purchased the Month-long coaching Session. Fararjeh was amazing. He not only helped me improve on my current issues but also taught me how to improve on my own. Was 100% worth the purchase, and I will definitely be purchasing more coaching in the future. Best coach on metafy!",
      date: "16/9/2025"
    },
    {
      name: "DadDeeUwU",
      text: "Fantastic time training with coach! We played and trained more than advertised. He went into a lots of details quick yet super understandable with demonstrations. It's surprising how I overlooked something that he made so so strong (fireballs). He made a very detailed note as well, can't really progress everything all at once, so his note is super helpful to keeps tracks of what need to be working on! Great deals for new and returning students as well. Highly recommend!",
      date: "23/8/2025"
    },
    {
      name: "Steampunkio86",
      text: "Professional and likable guy, helpful advice, recommend.",
      date: "30/08/2025"
    },
    {
      name: "Isai Vazquez",
      text: "he give me one of the best advices that i ever heard in this game, ts a good perso, charismatic, and takes the correct time to explain everything what you need :)",
      date: "30/08/2025"
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left +1 for right

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 250 : -250,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 250 : -250,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  return (
    <div>
      <main>
        <div className="max-w-[96rem] mx-auto">
          <section id="hero" className="py-12">
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-10 mx-auto">
              <video
              src="/home/trailer.mp4"
              autoPlay
              muted
              controls
              loop
              playsInline
              />
            </div>

            <h1>Your Favourite Player's Favourite Player</h1>
            <p className="mt-10">Analytical, pragmatic, and zealous, Fararjeh is a competitor, content creator, and coach for Street Fighter 6.
              <br/><br/>I will be one of the best, I know that: as long as I maintain my attitude and discipline, it's just a matter of time. I've been competing since the end of the 2024 season, and since then I've travelled to plenty of international and domestic events, placing well across them all while I slowly become stronger and stronger. With one of my greatest strengths being my mental, travelling to offline events is the only way to harness the final tool missing in my arsenal: experience.
              <br/><br/>Throughout my time competing, I also create free content on my YouTube; from educational tutorials aimed at mid-high level players, to more informal or casual montages and discussions. For those looking for something more personal, I also offer coaching; On my Metafy I provide personalised coaching including single session and multi-session packages. With a background in puzzle solving and tutoring, my coaching comes not only with a guarantee to make you a better player, but with a guarantee to teach you something about yourself you didn't even know.</p>
          </section>
          <section id="achievements">
            <h2 className="text-center 2xl:text-left">Achievements</h2>
            <div className="flex flex-col 2xl:flex-row">
              <div className="relative w-[85%] 2xl:w-1/2 rounded-xl aspect-square mx-auto">
                <Link href="https://www.start.gg/user/4c8f3024" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/home/fighting-games.png"
                    alt="Fararjeh at Red Bull Gaming Sphere"
                    fill
                    className="object-cover image"
                    unoptimized
                  />
                </Link>
              </div>
              <div className="bg-site-bg-dim self-center w-[70%] rounded-b-2xl 2xl:rounded-bl-none 2xl:rounded-r-2xl">
                <p className="p-6">Aside from catching the tail end of the 2024 season with Kings of the World, the 2025 season was my first official season as a competitor. I managed to travel to a handful of CPT and non-CPT events abroad and domestically, with consistent results. Evo France was my best result to date with a final placing of 33rd out of almost 1700 entrants: a confident promise for the future.<br/><br/>I also competed in the 2025 UK/Ireland World Warrior series; achieving a final standing of 26th within my region. While I initially set a goal to hit the top 20, with the improvements I made throughout the season it would be a struggle to not be satisfied - at least temporarily.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              <a 
              href="https://www.start.gg/tournament/kings-of-the-world/event/street-fighter-6-capcom-pro-tour-2024/entrant/18531700"
              target="_blank"
              rel="noopener noreferrer">
                <div className="relative group aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/results/KOTW24.png"
                    alt="CPT 2024"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover "
                  />

                  <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/20 hover-element">
                    <p>14/12/2024</p>
                  </div>

                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-element">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold text-3xl">33rd/200</p>
                      <p >Kings of the World</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/75 hover-replace">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-xl md:text-3xl">33rd/200</p>
                      <p >Kings of the World<br/>14/12/2024</p>
                      <p className="font-bold text-lg md:text-2xl text-white">Tier 1</p>
                    </div>
                  </div>

                </div>
              </a>
              <a 
              href="https://www.start.gg/tournament/brussels-challenge-major-edition-2025/event/street-fighter-6-pc-ewc-qualifiers/entrant/19831986"
              target="_blank"
              rel="noopener noreferrer"> 
                <div className="relative group aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/results/BSC25.png"
                    alt="CPT 2024"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/20 hover-element">
                    <p>17/5/2025</p>
                  </div>

                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-element">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold text-3xl">25th/152</p>
                      <p className="">Brussels Challenge Major Edition</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/75 hover-replace">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-xl md:text-3xl">25th/152</p>
                      <p >Brussels Challenge Major Edition<br/>17/5/2025</p>
                      <p className="font-bold text-lg md:text-2xl text-white">Tier 1</p>
                    </div>
                  </div>
                </div>
              </a>
              <a 
              href="https://www.start.gg/tournament/ultimate-fighting-arena-2025-3/attendee/19095718"
              target="_blank"
              rel="noopener noreferrer"> 
                <div className="relative group aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/results/UFA25.png"
                    alt="CPT 2024"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/10 hover-element">
                    <p>11/09/2025</p>
                  </div>

                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-element">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold text-3xl">97th/393</p>
                      <p className="">Ultimate Fighting Arena</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/75 hover-replace">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-xl md:text-3xl">97th/393</p>
                      <p>Ultimate Fighting Arena<br/>11/09/2025</p>
                      <p className="font-bold text-lg md:text-2xl text-white">Tier 1</p>
                    </div>
                  </div>

                </div>
              </a>
              <a 
              href="https://www.start.gg/tournament/evo-france-2025/event/street-fighter-6-ps5/entrant/21189173"
              target="_blank"
              rel="noopener noreferrer"> 
                <div className="relative group aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/results/EVO25.png"
                    alt="CPT 2024"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 text-white p-5 flex justify-center items-end bg-black/10 hover-element">
                    <p>10/10/2025</p>
                  </div>

                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover-element">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold text-3xl">33rd/1664</p>
                      <p className="">Evo Nice</p>
                      <p className="font-bold text-xl text-white">Tier 1</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/75 hover-replace">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-xl md:text-3xl">33rd/1664</p>
                      <p >Evo Nice<br/>10/10/2025</p>
                      <p className="font-bold text-lg md:text-2xl text-white">Tier 1</p>
                    </div>
                  </div>

                </div>
              </a>
            </div>
          </section>
          <section id="coaching">
            <h2 className="text-center 2xl:text-right">Get Coaching</h2>
            <div className="flex flex-col 2xl:flex-row">
              <div className="bg-site-bg-dim self-center w-[70%] rounded-b-2xl 2xl:rounded-br-none 2xl:rounded-l-2xl 2xl:order-1 order-2">
                <p className="p-6">From private tutoring in academia, to informal coaching since I started the game, I've always had a knack for breaking down complex topics into simpler, digestible lessons you can apply immediately. Not to mention having studied computer science at university - having directly studied the art of puzzle solving - there is no weakness within you that I cannot bring into the spotlight.<br/><br/> Whether you don't know your biggest weakness or think you do, my coaching will make you a stronger player. I offer single sessions and group deals, all of which are available on my Metafy. Still not convinced? You can check out some reviews of my coaching down below to see for yourself the results of my abilities.</p>
              </div>
              <div className="relative w-[85%] 2xl:w-1/2 rounded-xl aspect-square mx-auto 2xl:order-2 order-1">
                <Link href="https://metafy.gg/@fararjeh" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/home/status.png"
                    alt="Fararjeh's Metafy Status"
                    fill
                    className="object-cover image"
                    unoptimized
                  />
                </Link>
              </div>
            </div>
            <div className="py-0 sm:py-2 md:py-5"></div>
            <div className="flex items-center w-full justify-center gap-2 sm:gap-5 md:gap-10">
              <button
                onClick={handlePrev}
                className="bg-site-bg-dim hover:bg-neutral-950 rounded-full p-1 sm:p-2 md:p-3 transition w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <ChevronLeft className="w-full h-full" />
              </button>
              <div className="relative w-full h-[300px] sm:h-[325px] md:h-[350px] overflow-hidden flex items-center justify-center">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className=" w-full bg-site-bg-dim rounded-xl p-4 sm:p-6 md:p-10"
                  >
                      <p className="italic">{reviews[index].text}<br/><br/></p>
                      <p className="font-bold">{reviews[index].name}</p>
                      <p>{reviews[index].date}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={handleNext}
                className="bg-site-bg-dim hover:bg-neutral-950 rounded-full p-1 sm:p-2 md:p-3 transition w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <ChevronRight className="w-full h-full" />
              </button>
            </div>
            <div className="flex justify-center items-center mt-5 gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-1 sm:w-5 md:w-7 rounded-full transform origin-center ${
                    i === index
                      ? "bg-fararjeh scale-150"
                      : "bg-neutral-200 hover:bg-neutral-600"
                  }`}
                />
              ))}
            </div>
          </section>
          <section id="content">
            <h2 className="text-center 2xl:text-left">Content Creation</h2>
            <div className="flex flex-col 2xl:flex-row">
            <div className="relative w-[85%] 2xl:w-1/2 rounded-xl aspect-square mx-auto">
              <Link href="https://www.youtube.com/@fararjeh" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/home/content.png"
                  alt="Fararjeh's YouTube"
                  fill
                  className="object-cover image"
                  unoptimized
                />
              </Link>
              </div>

              <div className="bg-site-bg-dim self-center w-[70%] rounded-b-2xl 2xl:rounded-bl-none 2xl:rounded-r-2xl">
                <p className="p-6">Sitting at around <ReturnSubs/> subscribers, what's a fighting game player without some content? Since around 2024, I've been producing videos on YouTube that range from educational yet entertaining tutorials to candid clip montages. "You Can't Play Neutral" is the first result when you search up "SF6 Neutral" on YouTube, not to mention it was also featured on the front page of EventHubs: you can read the article
                <a href="https://www.eventhubs.com/news/2024/jul/31/how-demand-respect-sf6-gameplay/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600"> here</a>.
                <br/><br/>As well as my YouTube, I stream around three times a week on Twitch. These streams highlight and show the work it takes to be great, and I cover everything tournament runs and VOD reviews to more relaxed lobbies and casual matches. You can check out this weeks stream schedule below.</p>
              </div>
            </div>
            <div id="schedule" className="relative w-full rounded-xl aspect-[2/1] mx-auto">
              <Image
                src="/home/schedule.png"
                alt="Fararjeh's Stream Schedule"
                fill
                className="object-cover image mt-15"
                unoptimized
                />
            </div>
          </section>
          <section id="gallery" 
          className="pb-0"
          >
            <h2 className="text-center 2xl:text-right">Gallery</h2>
            <MasonryGallery images={galleryImages} />
          </section>
          <section id="return">
            <div className="flex justify-center">
              <button
                onClick={()=> {
                  document
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                id="toTopButton"
              >
                Back to Top
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}