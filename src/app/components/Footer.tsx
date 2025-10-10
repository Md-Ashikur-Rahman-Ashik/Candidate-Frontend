import React from 'react';
import { SocialLink, IconComponentProps } from '@/types/types';


const FacebookIcon: React.FC<IconComponentProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
    >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
);

const TwitterIcon: React.FC<IconComponentProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
    >
        <path d="M22.54 6.31c-.81.36-1.68.61-2.58.71.93-.56 1.64-1.45 1.97-2.5-1.12.66-2.36 1.14-3.68 1.4-.64-.68-1.55-1.1-2.56-1.1-2.45 0-4.43 1.98-4.43 4.43 0 .35.04.69.11 1.02-3.68-.18-6.94-1.95-9.13-4.62-.38.65-.59 1.4-.59 2.22 0 1.54.78 2.9 1.97 3.7-.72-.02-1.39-.22-1.98-.55v.06c0 2.15 1.53 3.96 3.56 4.37-.37.1-.76.15-1.16.15-.28 0-.55-.03-.81-.08.56 1.76 2.19 3.05 4.12 3.09-1.52 1.19-3.44 1.9-5.54 1.9-.36 0-.71-.02-1.06-.06 1.97 1.27 4.3 2.01 6.78 2.01 8.13 0 12.57-6.73 12.57-12.57v-.58c.87-.63 1.62-1.42 2.22-2.32z" />
    </svg>
);

const InstagramIcon: React.FC<IconComponentProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8a4 4 0 013.37 3.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);


const socialLinksData: SocialLink[] = [
    { id: 1, name: 'Facebook', href: '#', icon: <FacebookIcon /> },
    { id: 2, name: 'Twitter', href: '#', icon: <TwitterIcon /> },
    { id: 3, name: 'Instagram', href: '#', icon: <InstagramIcon /> },
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const candidateName = 'Candidate Name';

    return (
        <footer className="bg-white border-t border-gray-200 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">

                    <p className="text-gray-600 order-3 md:order-1 text-center md:text-left">
                        &copy; {currentYear} {candidateName}. All rights reserved.
                    </p>

                    <div className="order-2">
                        <a
                            href="#"
                            aria-label="Privacy Policy"
                            className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Privacy Policy
                        </a>
                    </div>

                    <div className="flex space-x-4 order-1 md:order-3">
                        {socialLinksData.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
                            >
                                {React.cloneElement(link.icon, {
                                    className: 'w-5 h-5',
                                    'aria-hidden': true
                                })}
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;