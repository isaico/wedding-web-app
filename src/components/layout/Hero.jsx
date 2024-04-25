'use client';
import React from 'react';
import whiteFlowers from '../../assets/white-flowers-transparent.png';
import Image from 'next/image';
import HeroDivider from '../HeroDivider';
import Ampersand from '../Ampersand';
import ScrollDown from '../ScrollDown';
export const Hero = ({ wife, husband, eventDate, quotes }) => {
    return (
        <section className="w-screen lg:h-[80vh] h-[100vh] bg-bg ">
            <div className="flex flex-col md:flex-row h-full w-full">
                {/* picture */}
                <div className="md:w-[60%] relative bg-[url('https://picsum.photos/800/800')] w-full h-full bg-top bg-contain md:bg-cover">
                    {/* <img
                        src="https://picsum.photos/800/800"
                        alt="foto de una pareja"
                        // width={800}
                        // height={800}

                        className="w-full h-full object-top"
                    /> */}

                    <div className=" absolute md:top-0  md:-right-5 rotate-90 md:rotate-0 right-0 bottom-0 ">
                        {' '}
                        <HeroDivider className="text-bg w-[800px] h-[800px] md:w-[800px] md:h-full drop-shadow-[-20px_1px_10px_rgba(1,1,1,0.2)] z-0" />
                    </div>
                </div>

                {/* content */}
                <div className="md:w-[40%] h-full px-12  ">
                    <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-12 relative">
                        <Image
                            src={whiteFlowers}
                            alt=""
                            className="absolute md:-top-10 -top-16  w-fit h-[150px] md:h-[250px] rotate-3"
                        />
                        <Image
                            src={whiteFlowers}
                            alt=""
                            className="absolute -top-10 -left-24 md:-left-36 w-fit h-[150px] md:h-[250px] -rotate-6"
                        />
                        <Image
                            src={whiteFlowers}
                            alt=""
                            className="absolute -top-10 -right-24 w-fit h-[150px] md:h-[250px] rotate-[200deg]"
                        />

                        <div className="text-xl md:text-3xl md:px-12 md:py-8 py-4 px-8 border rounded-lg border-primary-4 font-semibold text-primary-6 ">
                            15.05.2024
                        </div>

                        <div className="relative">
                            <h1 className="relative text-6xl md:text-7xl xl:text-8xl font-ptSerif text-reg-black bg-transparent font-bold z-10">
                                Fede <br />
                                <span>Lore</span>
                            </h1>
                            <Ampersand className="absolute inset-0  opacity-70 z-0 text-primary-5 "></Ampersand>
                        </div>
                        {/* <Image
                                    src={ampersand}
                                    alt="ampesand"
                                    className=""
                                /> */}

                        {/* <span className="absolute inset-0 translate-y-[25%] object-cover text-reg-black">
                                - & -
                            </span> */}
                        <div className="flex items-start text-center md:gap-4 gap-2">
                            <svg
                                className="w-6 text-primary-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h2>
                                Todos somos mortales, hasta el primer beso y la
                                segunda copa de vino
                            </h2>

                            <svg
                                className="w-6 text-primary-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="md:w-12 absolute bottom-5 animate-bounce duration-300">
                            <ScrollDown></ScrollDown>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
