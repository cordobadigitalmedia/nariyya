'use client';
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import {
  PlayIcon,
  PauseIcon,
  LanguageIcon,
  EyeSlashIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

interface TextOptions {
  main: string;
  none?: string;
  eng?: string;
  fre?: string;
  trans?: string;
}

const audioRoot = ".s3.eu-central-1.amazonaws.com/";

export function Text({
  text,
  totalPages = 0,
  path,
  translation,
  currentPage,
}: {
  text: TextOptions;
  totalPages: number;
  path: string;
  translation: "none" | "eng" | "fre" | "trans";
  currentPage: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showText, setShowText] = useState(true);
  const intervalRef = useRef<NodeJS.Timer>();
  const router = useRouter();

  return (
    <div className="group/page cursor-pointer touch">
      <div className="border border-slate-800 group-hover/page:border-slate-300 group-active/page:border-slate-300 rounded-t-xl p-4 pb-6">
        <div
          className={`${showText ? `visible` : `invisible`
            } flex w-full text-white ${showTranslation ? `text-lg font-serif tracking-wider` : `leading-relaxed text-2xl font-naskh`
            } text-center`}
        >
          {showTranslation ? text[translation] : text.main}
        </div>
        <div className="items-center justify-evenly text-slate-300 text-xs flex pt-5">
          {`${currentPage + 1}`} of {`${totalPages}`}
        </div>
      </div>
      <div className="invisible group-hover/page:visible group-active/page:visible bg-slate-50 text-slate-500 rounded-b-xl flex flex-col items-center">
        <div className="flex-auto flex items-center justify-evenly">
          {currentPage === 0 ? <div
            className="group/previous bg-gray-300 m-2 flex-none w-10 h-10 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
            aria-label="Previous Page"
          >
            <ArrowLeftIcon className="h-6 w-6 cursor-pointer text-slate-400" />
          </div> : <Link className="group/previous" href={`/${path}/${currentPage - 1}`}>
            <button
              type="button"
              className="bg-white group-hover/previous:bg-slate-200 text-slate-900 m-2 flex-none w-10 h-10 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
              aria-label="Previous Page"
              disabled={currentPage === 0}
            >
              <ArrowLeftIcon className="h-6 w-6 cursor-pointer text-black" />
            </button>
          </Link>}
          {translation !== "none" && (
            <div className="group/translation">
              <button
                type="button"
                className="bg-white group-hover/translation:bg-slate-200 text-slate-900 m-2 flex-none w-10 h-10 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
                aria-label="Show Translation"
                onClick={() => setShowTranslation(!showTranslation)}
              >
                <LanguageIcon className="h-6 w-6 cursor-pointer text-black" />
              </button>
            </div>
          )}
          <div className="group/show">
            <button
              type="button"
              className="bg-white group-hover/show:bg-slate-200 text-slate-900 m-2 flex-none w-10 h-10 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
              aria-label="Hide"
              onClick={() => setShowText(!showText)}
            >
              <EyeSlashIcon className="h-6 w-6 cursor-pointer text-black" />
            </button>
          </div>
          {currentPage < totalPages - 1 ?
            <Link href={`/${path}/${currentPage + 1}`} className="group/next">
              <button
                type="button"
                className="bg-white group-hover/next:bg-slate-200 text-slate-900 m-2 flex-none w-10 h-10 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
                aria-label="Hide"
              >
                <ArrowRightIcon className="h-6 w-6 cursor-pointer text-black" />
              </button>
            </Link> : <div
              className="group/next bg-gray-300 m-2 flex-none w-10 h-10 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
              aria-label="Next Page"
            >
              <ArrowRightIcon className="h-6 w-6 cursor-pointer text-slate-400" />
            </div>}
        </div>
      </div>
      <div className="block sm:hidden group-hover/page:invisible group-active/page:invisible text-slate-400 flex flex-col items-center text-sm text-center">
        Click/hover for options
      </div>
    </div>
  );
}
