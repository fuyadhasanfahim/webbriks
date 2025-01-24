'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Ambitious = () => {
    const logos = {
        topLine: [
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713605/bax1scwxbtfhmubvynok.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713608/ayfntpxxvgyyh1kiksci.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713610/qlppiermg4dx9g3mgjgh.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713609/ym7es9zq1ogobqqzbelc.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713608/mmlaqxldq19wapbodxai.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713609/ooia4lmy7t8rwirqpkut.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713602/ob8m64dt9pizkzab5bgz.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713604/kqbytu5qknbcwn2amv4m.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713604/wmicabfrbtvnczpay3ll.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713605/zzggy0ytr0biyvvgn1rq.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713608/jiysimh6he1o6tvutqmb.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737713606/lvnubbnh1usneto9r1ix.jpg',
        ],
        middleLine: [
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714508/gvjyaojuuizz1xarawk1.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714506/buzmale2tnl8niic1wgr.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714507/tlalg8w00cqrbsfhx6nt.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714505/dksoi8ajyqrkeumgv7zx.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714506/bwlsrzh6eea5pvzkskpf.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714505/qhoocgyikqxiiuoqrktz.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714504/mak1tplulegzggiqvlul.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714503/zigu6fq2l8jwu5kcmhkb.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714503/xvjro5ijrxskgvqe7zgj.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714501/icpss7kxcqqrgqwbdgkl.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714500/xnk53wgkpa6f3brmijmm.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714500/gevrtz7c4qpvpob6nsfu.jpg',
        ],
        lastLine: [
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714675/dosv7eegeuabot9zvp5q.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714680/z11jk9cgku66i6dfaqmp.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714683/ouf9d2bpaziqqhvy79u3.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714681/vcb0nek6eihlavgbtfrf.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714681/bmmshsoqag4aw5wmuulg.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714681/geewqetfyew9dlttxkaa.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714677/wmrpcwvtntycju7uwbds.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714676/jli81scofup35rc3m0jg.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714675/vwbwu5ma8bejliu3vbg3.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714675/y01ytvu6mt81uhhddi7y.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714675/wkn44fge40tbfx2jco13.jpg',
            'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737714683/idfwywkcjypqhtyxn5jd.jpg',
        ],
    };

    const marqueeVariants = {
        animate: {
            x: ['0%', '-100%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                },
            },
        },
        animateReverse: {
            x: ['-100%', '0%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                },
            },
        },
    };

    return (
        <section className="w-full space-x space-y-6 md:space-y-10 overflow-hidden">
            <div className="max-w-lg mx-auto px-4">
                <h3 className="heading-three font-semibold text-center">
                    Meet Our Team Mates
                </h3>
            </div>

            <div className="overflow-hidden relative w-full space-y-10">
                <motion.div
                    className="flex items-center gap-10 md:gap-20 justify-between"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {logos.topLine.concat(logos.topLine).map((logo, index) => (
                        <Image
                            key={index}
                            src={logo}
                            alt="Image"
                            priority
                            width={140}
                            height={140}
                            className="rounded-full"
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="flex items-center gap-10 md:gap-20 justify-between whitespace-nowrap mt-4"
                    variants={marqueeVariants}
                    animate="animateReverse"
                >
                    {logos.middleLine
                        .concat(logos.middleLine)
                        .map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt="Image"
                                priority
                                width={140}
                                height={140}
                                className="rounded-full"
                            />
                        ))}
                </motion.div>

                <motion.div
                    className="flex items-center gap-10 md:gap-20 justify-between whitespace-nowrap mt-4 ml-10"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {logos.lastLine
                        .concat(logos.lastLine)
                        .map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt="Image"
                                priority
                                width={140}
                                height={140}
                                className="rounded-full"
                            />
                        ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Ambitious;
