"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-2 z-50 bg-site-bg-dim p-1 rounded-lg lg:hidden border-1 border-white hover:bg-neutral-800"
      >
        <Menu size={20}/>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 lg:hidden "
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-full bg-site-bg-dim text-white flex flex-col items-center justify-center z-40 transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-8 text-2xl font-centgoth font-bold text-center items-center justify-center">
          <Link href="/" onClick={() => setOpen(false)}>About</Link>
          <Link href="/#achievements" onClick={() => setOpen(false)}>Achievements</Link>
          <Link href="/#coaching" onClick={() => setOpen(false)}>Coaching</Link>
          <Link href="/#content" onClick={() => setOpen(false)}>Content</Link>
          <Link href="/#gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <h3 className="mt-30">Socials</h3>
          <div className="flex flex-row gap-5 items-center">
            <a
            href="https://youtube.com/@fararjeh"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image src="/icons/youtube.png" alt="YouTube" width={48} height={48} className="transition duration-300 hover:brightness-50"/>
            </a>  
            <a
            href="https://x.com/balfararjeh"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image src="/icons/twitter.png" alt="Twitter" width={48} height={48} className="transition duration-300 hover:brightness-50"/>
            </a>
            <a
            href="https://metafy.gg/@fararjeh"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image src="/icons/metafy.png" alt="Metafy" width={48} height={48} className="transition duration-300 hover:brightness-50"/>
            </a>
            <a
            href="https://twitch.tv/fararjeh"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image src="/icons/twitch.png" alt="Twitch" width={40} height={40} className="transition duration-300 hover:brightness-50"/>
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}