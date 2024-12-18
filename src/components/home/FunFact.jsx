import React from 'react'

export default function FunFact() {
    return (
        <div className='w-full bg-[#FFFBF4]'>
            <div className='w-[90%] mx-auto max-w-screen-2xl'>
                <div className="md:bg-gradient-to-br bg-gradient-to-b from-[#FFA726B2] to-[#FFFBF2B2]  rounded-lg md:p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-10 py-8">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-[#2B2121]">5+</p>
                        <p className="text-[#444444]">Years Of Experience</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-[#2B2121]">350+</p>
                        <p className="text-[#444444]">Total Clients</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-[#2B2121]">1320+</p>
                        <p className="text-[#444444]">Completed Projects</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-[#2B2121]">4.8</p>
                        <p className="text-[#444444]">Average Review</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
