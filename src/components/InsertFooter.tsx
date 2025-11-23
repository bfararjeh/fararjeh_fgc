"use client";

import Image from "next/image";

export default function InsertFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50">
      <nav className="font-centgoth hidden lg:flex w-full justify-center">
        <a
          href="https://youtube.com/@fararjeh"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/youtube.png" alt="YouTube" width={48} height={48}/>
          YouTube</a>
          
        <a
          href="https://x.com/balfararjeh"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/twitter.png" alt="Twitter" width={48} height={48}/>
          Twitter</a>

        <a
          href="https://metafy.gg/@fararjeh"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/metafy.png" alt="Metafy" width={48} height={48}/>
          Metafy</a>

          <a
          href="https://twitch.tv/fararjeh"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/twitch.png" alt="Twitch" width={40} height={40}/>
          Twitch</a>

          <a
          href="https://discord.gg/pYHYwMGycD"
          target="_blank"
          rel="noopener noreferrer"
          className="footerButton text-stroke"
        >
          <Image src="/icons/discord.png" alt="Discord" width={40} height={40}/>
          Discord</a>
      </nav>
    </footer>
  );
}