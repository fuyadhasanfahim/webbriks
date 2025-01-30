import TeamMember from './TeamMember';

const profiles = [
    {
        id: 1,
        imgSrc: 'https://iili.io/dh6T9Wv.jpg',
        title: 'Md Ashaduzzaman',
        position: 'CEO & Founder',
        fb: '/fb/asad',
        twitter: '/twitter/asad',
        instagram: '/instagram/asad',
    },
    {
        id: 2,
        imgSrc: 'https://iili.io/dh6Tdfp.jpg',
        title: 'Md Ariful-Islam',
        position: 'Managing Director',
        fb: '/fb/arif',
        twitter: '/twitter/arif',
        instagram: '/instagram/arif',
    },
    {
        id: 3,
        imgSrc: 'https://iili.io/dh6T20N.jpg',
        title: 'Md Masum Kamal',
        position: 'Director',
        fb: '/fb/dulu',
        twitter: '/twitter/dulu',
        instagram: '/instagram/dulu',
    },
    {
        id: 4,
        imgSrc: 'https://iili.io/dh6T3gI.jpg',
        title: 'Md Kabir Hossain',
        position: 'Director',
        fb: '/fb/kabir',
        twitter: '/twitter/kabir',
        instagram: '/instagram/kabir',
    },
];

export default function MeetOurTeamMate() {
    return (
        <div
            className="w-full bg-[#FFFBF4] py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="space-y-6 mb-12">
                    <h1 className="lg:text-5xl text-start md:text-center text-4xl text-[#2B2121] lg:leading-[58px] font-semibold lg:my-5 my-3">
                        Meet Our Team Mate
                    </h1>
                    <div className="text-center space-y-3">
                        <p>
                            At Web Briks, we have a team of highly skilled and
                            dedicated professionals. Each person on our team is
                            passionate about their work. They commit themselves
                            to delivering the best results for our clients.
                        </p>
                        <p>
                            We invest in regular training to keep our team
                            updated on the latest trends and technologies in the
                            industry. This approach helps us maintain
                            high-quality standards. It also allows us to take on
                            even the most complex projects with confidence.
                        </p>
                        <p>
                            {`Our team’s dedication and expertise make Web Briks a trusted partner for businesses around the world. We believe that together, we can achieve great things.`}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                    {profiles.map((service, index) => (
                        <TeamMember
                            key={index}
                            imgSrc={service.imgSrc}
                            title={service.title}
                            position={service.position}
                            fb={service.fb}
                            twitter={service.twitter}
                            instagram={service.instagram}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
