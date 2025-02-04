'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurPartners() {
    const partners = [
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128330/jfx6vodd8auej6czpbno.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128330/p493plgmvchxs1z0e9h5.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128326/djasgy114vevsjp4wvyy.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128309/m4pysaj73xrcaomeefd5.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/vj6cbe0kozg5yrv24qyu.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/ic1wlv39vwbdsyictaua.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/hkr30et622h7m1rvtqdw.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/jmhoz7iuukj0cerjhdjs.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/aipabehkirzotvpncmzr.png',
        'https://res.cloudinary.com/dny7zfbg9/image/upload/v1738128300/oup43fduugwgzb2uoq4e.png',
    ];

    return (
        <section className="bg-black padding-x padding-y relative overflow-hidden">
            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="heading-one text-white text-center mb-6 md:mb-10">
                        Valuable Partnerships
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto">
                        Working with industry leaders to deliver exceptional
                        results
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                            {partners.map((logo, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="flex items-center justify-center group"
                                >
                                    <div className="relative w-full aspect-[3/1] bg-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                                        <Image
                                            src={logo}
                                            alt="Partner logo"
                                            height={40}
                                            width={120}
                                            priority
                                            className="w-auto h-10 md:h-16 object-contain transition-all duration-300
                                                     filter grayscale brightness-150
                                                     group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
