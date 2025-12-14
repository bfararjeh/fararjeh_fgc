"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function InsertHeader() {
  return (
    <div>
      <header className="px-6">
        <div className="flex items-center lg:w-full gap-4">
          <Image
            src="/icons/fararjeh.png"
            alt="Site Icon"
            width={100}
            height={100}
            className="shadow-fararjeh-dim drop-shadow-md rounded-4xl w-8 h-8 lg:w-12 lg:h-12"
          />
          <Link
            href="/"
            className="font-centgoth font-bold text-3xl lg:text-5xl tracking-wider text-stroke"
          >
            Fararjeh
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="whitespace-nowrap hidden lg:block">
          <button
            type="button"
            onClick={() => {
              document
              .getElementById("schedule")
              ?.scrollIntoView({ behavior: "smooth" });
            }}
            id="toScheduleButton"
            >
            Stream Schedule
          </button>
        </motion.div>
      </header>
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="whitespace-nowrap flex lg:hidden justify-center">
      <button
        type="button"
        onClick={() => {
          document
          .getElementById("schedule")
          ?.scrollIntoView({ behavior: "smooth" });
        }}
        id="toScheduleButtonMobile"
        className="text-stroke"
        >
        Stream Schedule
      </button>
    </motion.div>
    </div>
  );
}