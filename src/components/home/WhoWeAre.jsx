import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function WhoWeAre() {
    return (
        <div className='w-full bg-[#FFFBF4]'>
            <div className='w-[90%] mx-auto max-w-screen-2xl flex flex-col md:flex-row gap-5 md:justify-between md:items-center'>
                <div className='md:w-1/2 flex justify-center'>
                    <Image src='https://iili.io/2uthbO7.png' alt='WHo We Are' width={400} height={374} priority={true} className='w-[90%] h-auto' />
                </div>

                <div className='md:w-1/2 space-y-10'>
                    <h2 className='lg:text-5xl md:text-4xl text-3xl text-[#2B2121] font-semibold'>Who We Are</h2>
                    <div className='text-[#444444] space-y-5'>
                        <p>
                            {`At Web Briks, we began our journey in early 2018 as "Cut Out Expert." Our focus was on providing high-quality photo editing services. As we grew and gained more clients, we decided to expand our offerings. This growth led us to create "Web Briks LLC." Now, we offer additional services, including virtual assistance and web design.`}
                        </p>
                        <p>
                            {`Our founders bring a wealth of experience and vision to our company. They lead a passionate team dedicated to helping clients succeed. We prioritize tailored solutions that meet each client's unique needs.`}
                        </p>
                    </div>
                    <button className=''>
                        <a
                            href="/about"
                            className="bg-[#FFA726] text-[#2B2121] px-4 py-2 rounded hover:bg-[#2B2121] hover:text-white transition flex items-center gap-2"
                        >
                            <span>Learn More</span><span><FiArrowUpRight /></span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
