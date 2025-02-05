import Image from 'next/image';

export default function loading() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-orange-100">
            <figure>
                <Image
                    src={
                        'https://res.cloudinary.com/dny7zfbg9/video/upload/v1738747698/qcy47myspra13v9mgwnp.webm'
                    }
                    alt="loading animation"
                    width={200}
                    height={200}
                    priority
                />
            </figure>
        </section>
    );
}
