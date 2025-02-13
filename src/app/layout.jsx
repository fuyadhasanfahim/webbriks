import './globals.css';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Livvic } from 'next/font/google';

const livvic = Livvic({
    subsets: ['latin'],
    weight: ['400', '900'],
});

export const metadata = {
    title: 'Home | Webbriks',
    description: 'Generated by create next app',
};

export default function MyFunc({ children }) {
    return (
        <html lang="en" data-theme="light">
            <head>
                <link
                    rel="icon"
                    type="image/png"
                    href="https://iili.io/dj5tSSf.png"
                />
                <meta name="google-site-verification" content="fgq5zV3jb6OmFw6VzCx-sNQZT64LzgfYu4Qgi9nX6U0" />
            </head>

            <body className={`${livvic.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
