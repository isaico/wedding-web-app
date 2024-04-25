import { Hero } from '@/components/layout/Hero';
import { TimerSeparator } from '@/components/layout/TimerSeparator';

const clientDataModel = {
    wife: 'luna',
    husband: 'isaias',
    quotes: 'lorem ipsum dolorem ',
    eventDate: new Date(),
    ceremony: {
        date: '',
        location: '',
        address: '',
    },
    party: {
        date: '',
        location: '',
        address: '',
    },
};

export default function clientPage({ params }) {
    const { client } = params;
    const data = clientDataModel; //mockup data

    return (
        <main className="overflow-hidden">
            <Hero></Hero>
            <TimerSeparator></TimerSeparator>
            {/* 
        <UserButtons></UserButtons>
        <Separator></Separator>
        <Carousel></Carousel>
        <Cards></Cards>
        <Gifts></Gifts>
        <Banner></Banner>
        <Footer></Footer> */}
        </main>
    );
}
