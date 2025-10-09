import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden rounded-lg mt-2 py-16 md:py-20 lg:py-24 xl:py-28">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 h-full w-full">
                    <Image
                        src="https://i.ibb.co/MxkTRWBm/DemoImg.png"
                        alt="A person in modest attire standing, representing a brighter future"
                        fill
                        priority
                        className="object-cover object-center md:object-[center_30%]"
                    />
                </div>


                <div className="absolute inset-0 bg-[#1A4C4F] opacity-60"></div>
            </div>


            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center text-center text-white">
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
                    A Brighter Future, Together.
                </h1>
                <p className="mb-8 max-w-2xl text-base md:text-lg lg:text-xl">
                    Join a new generation of leaders committed to progress and unity.
                </p>
                <button className="rounded-full bg-[#F5B301] px-8 py-3 font-semibold text-black shadow-lg transition-colors duration-300 hover:bg-[#E0A000] md:px-10 md:py-4">
                    Join the Movement
                </button>
            </div>
        </section>
    );
};

export default HeroSection;