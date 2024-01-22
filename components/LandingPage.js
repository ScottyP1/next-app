import Image from 'next/image';
import Link from 'next/link';

import Card from './Card';
import Promo from './Promo';
import { IoIosArrowForward } from "react-icons/io";


export default function LandingPage() {
    return (
        <main>
            <Promo />
            <Card title='Enjoy on your TV' body='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more'
                vSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' imgSrc='/images/tv.png' />
            <Card title='Watch everywhere' body='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
                vScc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v' imgSrc='/images/mac.png' />
            <Card title='Create profiles for kids' body='Send kids on adventures with their favorite characters in a space made just for them---free with your membership.'
                vSrc='' imgSrc='/images/kids.png' />
            <Card title='Download your shows to watch offline' body='Watch on a plane, train, or submarine' vSrc='' imgSrc='/images/phone.jpg' />
            <Card title='Frequently Asked Questions' body='Watch on a plane, train, or submarine' vSrc='' imgSrc='/images/phone.jpg' />
            <div className="text-white text-center pt-4 mx-8 content-center">
                <label className="block text-[18px] font-[500]">Ready to watch? Enter your email to create or restart your membership.</label>
                <input placeholder="Email address" className="bg-[##0000007c] h-[3.2em] p-3 bg-transparent border mx-auto rounded-sm mt-3 mb-4 w-80 block md:inline-block" required></input>
                <Link href='/signup' className="text-[18px] rounded-md p-3 ms-3 w-40 bg-[#E50914]">Get Started<IoIosArrowForward className='inline ms-3 text-2xl' /></Link>
            </div>
        </main>
    )
}