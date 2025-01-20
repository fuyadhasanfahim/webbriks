import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from '@material-tailwind/react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const TeamMember = ({ imgSrc, title, position, fb, twitter, instagram }) => {
    const [social, setSocial] = useState(false);

    const handleMouseEnter = () => {
        setSocial(!false);
    };
    const handleMouseLeave = () => {
        setSocial(false);
    };

    return (
        <Card
            className="hover:shadow hover:shadow-blue-gray-400 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardHeader floated={false} className="">
                <Image
                    src={imgSrc}
                    alt="profile-picture"
                    width={540}
                    height={628}
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                >
                    {position}
                </Typography>
            </CardBody>
            <CardFooter
                className={`${
                    social
                        ? 'flex flex-col gap-1 absolute top-[20%] left-3 ease-in-out transform transition-opacity duration-1000 opacity-100 translate-y-0 bg-social p-2 rounded-md'
                        : 'opacity-0 translate-y-4 absolute'
                }`}
            >
                <Tooltip content="Facebook">
                    <Link href={fb}>
                        <FaFacebook className="text-3xl hover:text-orange-400" />
                    </Link>
                </Tooltip>
                <Tooltip content="Twitter">
                    <Link href={twitter}>
                        <AiFillTwitterCircle className="text-3xl hover:text-orange-400" />
                    </Link>
                </Tooltip>
                <Tooltip content="Instagram">
                    <Link href={instagram}>
                        <FaInstagram className="text-3xl hover:text-orange-400" />
                    </Link>
                </Tooltip>
            </CardFooter>
        </Card>
    );
};

export default TeamMember;
