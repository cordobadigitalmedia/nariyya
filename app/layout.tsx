import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Noto_Naskh_Arabic, Noto_Serif_Display } from 'next/font/google'
import {
    HomeIcon
} from "@heroicons/react/24/solid";

const notoArabic = Noto_Naskh_Arabic({
    subsets: ['arabic'],
    display: 'swap',
    variable: '--font-arabic',
})

const notoSerif = Noto_Serif_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-serif',
})

export const metadata: Metadata = {
    title: 'Lawh Tablet',
    description: 'Read, review and listen to Arabic remembrance.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${notoArabic.variable} ${notoSerif.variable}`}>
            <body>
                <div className='flex items-center justify-center sticky top-0 py-1 w-full bg-slate-300 text-center drop-shadow'><Link href="/"><HomeIcon className="hover:text-gray-500 h-6 w-6 cursor-pointer text-black" /></Link></div>
                {children}</body>
        </html>
    )
}