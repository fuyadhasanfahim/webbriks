'use client';

import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

const data = [
    {
        servicename: 'eCommerce Product Photo Editing Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811554/abqludzmyv17le2zx3b3.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811555/hst8xqfpyhd7qse9kgav.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811576/ekc0zcme9t3n7gn7gidp.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811576/ylknj4j8liu7cpscb6ut.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811592/x33xqpwfqlt4od1yl01f.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811592/pvwhxkdxw8qkwoyx6x5s.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/qfm0lt9kqdwxprs7ub8m.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701986/a7ed5jxnxak8loftxg1t.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811570/su0phmt3s26l1cshmzow.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811569/aikvlrpsmbdj9wpgmsh7.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811553/so8xpzvnk9yhibdfbv00.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811550/iytzuf8eyxqugb0twe04.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811550/sxbndxgknsdttg6bjmtm.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811549/gkaubp5sapaicoj2zn3b.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811546/z3hcyqbl25evds2vypir.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811546/mcnjj9kan2zdryc1dygl.jpg',
            },
        ],
    },
    {
        servicename: 'Background Removal Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701983/egt1hz9ts2ngxapseg3p.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/bhwwtdnt1fl3pzu2minp.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811563/tqyuzi7ulhsmrlgcyuni.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811564/meicfdtttkq15aa6epec.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811594/rdeml3ipuwhwlkqevba6.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811594/ijt7fydbux7mwzismt5c.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811580/kzfvehfvvcmaxmpg4pq1.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811579/xqnxcnihsqvcewrq0qkp.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811579/wyilj8pdmirsoc6xo5g9.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811579/vognhqm9ifdwaytwibsi.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811571/bmrldgsgzcd5455uzsfb.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811570/t70gmxqiiikwspvaetj4.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811562/xckxocd8s4m7dsqobmq0.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811561/knf4sgesbfoigr87abuz.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811561/y36leomwhjnd5fifzkpa.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811560/oz5tr4nchqlcoeeculyt.jpg',
            },
        ],
    },
    {
        servicename: 'Color Correction Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/icl5mcwxlcdqyvoifmfd.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/iqfl5ypuvzqdl6db41qp.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811582/kmsezrwg9oi9k2bakire.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811582/ed9blee6tbs2mtjyxehs.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811591/w9uorwkdwz4xizzbjl4z.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811591/yjgtupu2j8swlw53hqtq.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811578/rilybdukgrhwftflx6ho.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811573/mumpyz9cqliwzhfmnffg.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811572/vwd7yoyy21zz0kvvlorq.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811571/kbeqj3qqzdqjgeuphp0m.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811569/m6onl3mgj8ldps0ofbbe.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811568/pmr6lxid4hhwn1vzivh7.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811545/bpbvjlphm4uaohkciz5c.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811545/pvjxyoqkdg2zijoxhnsk.jpg',
            },
        ],
    },
    {
        servicename: 'Photo Retouching Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811545/ztkszcj0wrua64vlxqbo.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811604/tvasbwjzedvk7j4kl8lc.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811596/xdgpq6vxcns1pmlkasej.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811595/srtwmou6mcjjgcm8jazq.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811586/foiysp4xtehowr38zdni.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811585/s80xfidnyp4hqkh14lin.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811584/dmgeuwwfol3dspqyc2vn.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811584/dmgeuwwfol3dspqyc2vn.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811575/tw7gxleby8cjupj7ildr.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811574/t1tabgwvajfg5kptuvet.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811572/bzeobgqq5ece4c4ocdey.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811573/njevuiwyozzanfulxgbp.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811568/yhu4097aegwwsas00rig.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811568/txvembroewwcipv6j10c.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811549/nzg1udnghpse8ngdzaot.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811549/krbfrbyvcjzqmp7tzpah.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811546/loz0hw0gr3e25np7saxl.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811545/pxvo1uofhuftlxwc9mcm.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811545/cqhjg5amv2apsavjs3e6.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811545/hx9nfe3kmws7ggahxofu.jpg',
            },
        ],
    },
    {
        servicename: 'Ghost Mannequin Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811602/hnykhbsyk7ddvxzppmwf.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811601/o1emaycc0cup2mwokdzd.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811602/fu50qo3onhnkm0y9d756.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811602/hoyuhtfzqjrhc5kksfz7.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811600/etnrnkr9u4vf0jxt7cnb.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811598/j1bhovbm6fsf7uzpxr4g.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811600/rjx7dumv5whjurbtxp0b.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811599/zcqwqom4mhfxcxt8hn0u.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811598/yvlznxlhqpwry0ooqjh3.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811597/salk3qqracuopssto8sf.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811587/mhu0vg27va1zc1jtp358.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811587/m9fifbt6js32sndjqrh3.jpg',
            },
        ],
    },
    {
        servicename: 'Hair Masking Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811597/pfywxqyevj6ldb4hluvi.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811596/hle3jkmeiptzwrpudylr.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811577/avuoheyvtw6c47t1vqz9.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811578/blagnldc5nn2epzytz6q.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811584/gufkg2sikj9zfaemfui4.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811583/p0zeempz5lvlvahldqci.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811581/s8wrkt6psfhznoxjtjmq.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811581/xdq43trrr55sbyr2afis.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811576/duu2f8obmgq68najzrss.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811575/togmcxgvp0xxxezotjwj.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811567/blqhquthotvx9m8syqam.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811566/xsonsdxzgtquehrlv861.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811566/o5x2yroe4btutpvcnsgl.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811565/donpes74u9v46dts7kb5.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811558/zwmtmoiybbw0jtkj8eio.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811556/lfdql6awwb1smj2wmqak.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811545/yxxbawvcdcmlfl6vzw7u.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811545/woi2gfdei9l6dbysf9pg.jpg',
            },
        ],
    },
    {
        servicename: 'Shadow Adding Service',
        images: [
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701985/kdky0jkzedwhumwr6bsy.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1737701984/tdonqqtr0fbgjtkjel0y.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811586/vrjl4cwjfwqqkhc59rnq.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811586/ynhakbqvusd112n9jart.jpg',
            },
            {
                before: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811565/cwwgfpxerbdubpait4cb.jpg',
                after: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1739811564/gxxufgnkqcb3cs4u4vkv.jpg',
            },
        ],
    },
];

const RootPhotoEditingService = () => {
    return (
        <section className="padding-x padding-y bg-white">
            <div className="container">
                <h2 className="heading-one text-center">
                    Our Photo Editing Services
                </h2>

                <div className="mt-8 md:mt-12 space-y-10">
                    {data.map(({ servicename, images }, index) => (
                        <section key={index} className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                {servicename}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                                {images.map(({ before, after }, index) => (
                                    <figure
                                        key={index}
                                        className="group relative overflow-hidden rounded-xl border border-gray-200 h-fit shadow-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        <ReactCompareSlider
                                            changePositionOnHover
                                            className="rounded-xl h-auto"
                                            transition="ease-in-out duration-500"
                                            itemOne={
                                                <ReactCompareSliderImage
                                                    src={before}
                                                    alt="Before image"
                                                    className="rounded-xl"
                                                />
                                            }
                                            itemTwo={
                                                <ReactCompareSliderImage
                                                    src={after}
                                                    alt="After image"
                                                    className="rounded-xl"
                                                />
                                            }
                                        />
                                    </figure>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RootPhotoEditingService;
