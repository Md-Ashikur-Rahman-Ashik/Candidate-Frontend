import React from 'react';


export interface CommitmentBannerProps {
    heading: string;
    body: string;
    buttonText: string;
    buttonHref: string;
}


const CommitmentBanner: React.FC<CommitmentBannerProps> = ({ heading, body, buttonText, buttonHref }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4 md:text-5xl lg:text-[42px] lg:leading-snug">
                {heading}
            </h2>

            <p className="text-base sm:text-lg text-center text-gray-600 mb-8 lg:text-xl">
                {body}
            </p>

            <div className="flex justify-center w-full">
                <a
                    href={buttonHref}
                    className="inline-block px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition-colors duration-200 bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default CommitmentBanner;



export const CommitmentBannerExample = () => {
    const bannerData: CommitmentBannerProps = {
        heading: "Our Commitment to You",
        body: "We are dedicated to building a stronger, more prosperous community for all. Our vision is rooted in empowering our youth, fostering economic growth, and strengthening community bonds.",
        buttonText: "Learn More",
        buttonHref: "#commitment",
    };

    return (
        <div className="py-12 bg-white">
            <CommitmentBanner {...bannerData} />
        </div>
    );
};