import React from 'react';
import Image from 'next/image';
import { Event } from '@/types/types';

export const MOCK_EVENTS: Event[] = [
    {
        id: 1,
        imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa-Nkf9MqLCM3u5Pp9D2uY5AZ0HeGuI3-OxUH0AbPEwI1S5KYBl75vKgpGDnclDyJRDmaxHkaLia2tMYa9l_J1RVHbwvcd8XnRu11s4ypRti3sgl4Lnip7DNqMIeyeoyK3w_jm7asU9b_UKH4b2rwsb7X7b6ksitmc5J8RhENMtZlRDFtMeEeKEVRjS_YCkTUrS1CZf8eQsrtrMf1tyKa7uk_gjx24logkPF-g3w1aiJj9BnoCnLJQkbzuTf79CTNA5-QyLLiQMFkr',
        title: 'Rally for Change',
        description: 'A powerful event to raise awareness and funds for climate action and policy reform. Join activists and leaders.',
        date: 'JUN 20',
        time: '4:00 PM',
    },
    {
        id: 2,
        imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS6H01LGDGLhHIuTMiSktwL8GqMDTLBZye-F9w49sJE9WfBexIG5gcbc1ItvGq3vMAqg8IQJqAZvOYQG5sHTQmeHVZRFHBZu1a13a1E_oTyDvYxvvCrppoARXz72eo-cpPcmDHLlzJzfcZsUYjSshq22DDwRKY5tmY_rAjllsAt-MHBr_ua-VH8JrN95HUpav-0hlDs1pdlH9Pp8O2Ug27J87o3DKvlrHoYIxxn3BMKqyT-764rTxyvP17lsqB3sSWadnGf0aoygwT',
        title: 'Community Clean-up Day',
        description: 'Help us make our local park and riverbanks pristine. Gloves and bags provided. All volunteers welcome!',
        date: 'JUL 15',
        time: '9:30 AM',
    },
    {
        id: 3,
        imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA50yWxvIvGRtAf5IXjzme6ulNYr6R5YwU8l3s2qmSKb2wg3yeT9z2fuxmUUdAQdUbHzMGGJPEojyadF7cVw40XDMlAQLEcuW_XaWJQLqk5h_QOyruce4TpZf1kSPw7y_iChoOnlwLfsclDM07XQnM_FQ7EEdFOpC_-IzBZl1_O9DOcSnU2y-y20_hZ6Ph8uiGoifI-QhnUwKBmxhz_M-4pOzEV_O6d3OluvuCwUDKvHU_hPfXuPc065CEFRX5M0aTjhnQ3UIo1Gnth',
        title: 'Educational Workshop',
        description: 'Learn about sustainable living, composting, and reducing your carbon footprint from our expert panel.',
        date: 'AUG 01',
        time: '2:00 PM',
    },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
    const formatDateTime = (date: string, time: string) => (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <span className="text-4xl font-extrabold leading-none text-white lg:text-5xl">
                {date.split(' ')[1]}
            </span>
            <span className="mt-1 text-sm font-semibold tracking-widest text-white uppercase lg:text-base">
                {date.split(' ')[0]}
            </span>
        </div>
    );

    return (
        <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-2xl group transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative w-full h-56 md:h-64 lg:h-72">
                <Image
                    src={event.imgSrc}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-opacity duration-500 group-hover:opacity-90 object-cover"
                />
                <div className="absolute top-0 left-0 h-20 w-20 p-2 lg:h-24 lg:w-24 bg-green-600/90 z-10">
                    {formatDateTime(event.date, event.time)}
                </div>
            </div>

            <div className="p-4 sm:p-6">
                <p className="mb-2 text-sm font-semibold text-gray-500 uppercase">
                    {event.time}
                </p>

                <h3 className="mb-2 text-xl font-bold leading-snug text-gray-900 line-clamp-2 md:text-2xl">
                    {event.title}
                </h3>

                <p className="text-base text-gray-600 line-clamp-3">
                    {event.description}
                </p>
            </div>
        </div>
    );
};

// --- Main Component ---
interface UpcomingEventsProps {
    events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
    return (
        <section className="py-12 sm:py-16 lg:py-24">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mb-10 text-center lg:mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                        Upcoming Events
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Join us for our next community gatherings and initiatives.
                    </p>
                </div>


                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                <div className="flex justify-center mt-12 lg:mt-16">
                    <button
                        className="px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-green-600 rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
                    >
                        View All Events
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;