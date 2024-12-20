'use client'

import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

const navItems = {
  "/": {
    name: 'home',
  },
  "/cv": {
    name: "cv",
  },
  "/philosophy": {
    name: "philosophy"
  }
}

export function NavBar() {
  return (
    <nav className="min-h-20 tracking-tight flex justify-between mb-10">
      <div>
        {Object.entries(navItems).map(([path, {name}]) => {
          return (
            <Link className="mr-4 font-extrabold text-6xl sm:mr-8 md:mr-14"
              key={path}
              href={path}
            >
              {name}
            </Link>
          )
        })}
      </div>
      <div className="flex gap-1 mt-8">
        <Link 
          href="https://github.com/foundsheep" 
          target="_blank"
          onClick={() => sendGAEvent("event", "buttonClicked", { value: 'github'})}
        >
          <Image
            className="grayscale"
            src="/skills/github-tile.svg"
            alt="github"
            width={30}
            height={30}
          />
        </Link>
        <Link 
          href="https://huggingface.co/DJMOON" 
          target="_blank"
          onClick={() => sendGAEvent("event", "buttonClicked", { value: 'huggingface'})}
        >
          <Image
            className="grayscale"
            src="/skills/huggingface-logo.svg"
            alt="github"
            width={30}
            height={30}
          />
        </Link>
        {/* <Link 
          href="mailto:moondeokjong@gmail.com" 
        >
          <Image
            className="grayscale"
            src="/skills/gmail-icon.svg"
            alt="github"
            width={30}
            height={30}
          />
        </Link>         */}
      </div>
    </nav>
  )
}