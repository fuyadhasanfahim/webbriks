import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const steps = [
    {
        id: 1,
        number: '01',
        icon: '/icons/consultation.svg',
        title: 'Consultation',
        description:
            'We start by understanding your needs and goals to tailor our services accordingly.',
        link: '',
        bg: 'bg-white',
        textColor: 'text-[#2b2121]',
        borderColor: 'border-[#d9d9d9]',
    },
    {
        id: 2,
        number: '02',
        icon: '/icons/planning.svg',
        title: 'Planning',
        description:
            'We create a detailed plan and timeline to ensure the project stays on track.',
        link: '',
        bg: 'bg-white',
        textColor: 'text-[#2b2121]',
        borderColor: 'border-[#d9d9d9]',
    },
    {
        id: 3,
        number: '03',
        icon: '/icons/execution.svg',
        title: 'Execution',
        description:
            'Our team executes the plan with precision and keeps you updated throughout.',
        link: '',
        bg: "bg-[url('/images/execution.png')] bg-cover bg-center",
        textColor: 'text-white',
        borderColor: 'border-[#d9d9d9]',
    },
    {
        id: 4,
        number: '04',
        icon: '/icons/deliver.svg',
        title: 'Deliver',
        description:
            'Our team executes the plan with precision and keeps you updated throughout.',
        link: '',
        bg: 'bg-white',
        textColor: 'text-[#2b2121]',
        borderColor: 'border-[#d9d9d9]',
    },
];

export default function HowWeWork() {
    return (
        <div
            className="w-full bg-[#FFFBF4] py-6 md:py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="w-[90%] mx-auto max-w-screen-2xl">
                <div className="space-y-6">
                    <h1 className="lg:text-5xl text-start md:text-center text-4xl text-[#2B2121] lg:leading-[58px] font-semibold lg:my-5 my-3">
                        How We Work
                    </h1>
                    <p className="text-center w-full max-w-[760px] text-[#2b2121] text-lg font-normal leading-snug mx-auto">
                        {`This growth led us to create "Web Briks LLC." Now, we
                        offer additional services, including virtual assistance
                        and web design.`}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start justify-center gap-6 mt-10">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`w-full min-w-[269px] h-[322px] ${step.bg} rounded-2xl border ${step.borderColor} p-6`}
                        >
                            <div
                                className={`text-end text-black/10 text-[32px] font-bold ${
                                    step.number === '03' && 'text-white/60'
                                }`}
                            >
                                {step.number}
                            </div>
                            <div className="flex flex-col justify-start items-start gap-8">
                                <div className="flex flex-col justify-start items-start gap-2.5">
                                    <div className="flex flex-col justify-start items-start gap-6">
                                        <div className="w-12 h-12 py-[0.39px] flex justify-center items-center">
                                            <Image
                                                src={step.icon}
                                                alt={`${step.title} icon`}
                                                width={48}
                                                height={47.22}
                                            />
                                        </div>
                                        <h4
                                            className={`text-xl font-semibold ${step.textColor}`}
                                        >
                                            {step.title}
                                        </h4>
                                    </div>
                                    <p
                                        className={`text-sm font-normal mt-2 ${
                                            step.textColor === 'text-white'
                                                ? 'text-white'
                                                : 'text-[#666666]'
                                        }`}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                                <div className="">
                                    {/* <Link href={step.link}>
                                        <span
                                            className={`flex gap-1 items-center hover:underline ${step.textColor}`}
                                        >
                                            Learn More <FiArrowUpRight />
                                        </span>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
