import React from 'react';
import {
    MapPin,
    Building2,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
} from 'lucide-react';
import Image from 'next/image';

export default function JobDetailsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 relative overflow-hidden">
                <div className="max-w-6xl mx-auto padding-x padding-y">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            {/* Illustration would go here - using placeholder */}
                            <Image
                                src={
                                    'https://res.cloudinary.com/dny7zfbg9/image/upload/v1757952280/dswndmppltiswsqvxd7v.png'
                                }
                                alt="nothng"
                                width={320}
                                height={256}
                                className="flex items-center justify-center"
                            />
                        </div>
                        <div className="flex-1 text-right">
                            <h1 className="text-white text-4xl font-bold mb-2">
                                We&apos;re Hiring
                            </h1>
                            <h2 className="text-white text-3xl font-bold mb-8">
                                Content Marketing
                                <br />
                                Executive (Junior)
                            </h2>
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded"></div>
                                <span className="font-bold text-gray-800">
                                    startise
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">
                                        S
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Startise
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        3 mins Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Job Title
                                    </label>
                                    <p className="text-gray-900">
                                        Content Marketing Executive (Junior)
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Experience
                                    </label>
                                    <p className="text-gray-900">Junior</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Vacancies
                                    </label>
                                    <p className="text-gray-900">4</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Salary
                                    </label>
                                    <p className="text-gray-900">
                                        20000 - 30000 BDT Monthly
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Office time
                                    </label>
                                    <p className="text-gray-900">
                                        8:00 AM to 4:00 PM
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Location
                                    </label>
                                    <p className="text-gray-900">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Job Type
                                    </label>
                                    <p className="text-gray-900">
                                        Permanent{' '}
                                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs ml-2">
                                            On-site
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600">
                                        Deadline
                                    </label>
                                    <p className="text-gray-900">
                                        11 October, 2025
                                    </p>
                                </div>
                            </div>

                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg mt-6 transition-colors">
                                Apply Now
                            </button>

                            <div className="mt-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                    <Share2 size={16} />
                                    <span>Share On:</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors">
                                        <Facebook size={16} />
                                    </button>
                                    <button className="p-2 bg-sky-100 text-sky-600 rounded hover:bg-sky-200 transition-colors">
                                        <Twitter size={16} />
                                    </button>
                                    <button className="p-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors">
                                        <Linkedin size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg p-8 shadow-sm border">
                            {/* Company Description */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Building2
                                        className="text-orange-500"
                                        size={20}
                                    />
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Company Description
                                    </h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>Startise</strong> is a beacon of
                                    innovation and the dynamic parent company of
                                    WIDMorgan and many other subsidiaries. With
                                    a diverse portfolio of brands, we are
                                    committed to enriching our customers&apos;
                                    experience to nation growth vision millions
                                    growth locally and globally.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    We strongly believe{' '}
                                    <strong>{'good for the business'}</strong>{' '}
                                    should also mean{' '}
                                    <strong>{'good for the customers'}</strong>{' '}
                                    and our culture reflect this commitment in
                                    unique ways across the role and beyond,
                                    leveraging the strengths of our wide and
                                    space-based portfolio.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-5 h-5 bg-purple-500 rounded"></div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Skills
                                    </h2>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
                                        Java
                                    </span>
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                        Copywriting
                                    </span>
                                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                                        Content
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-5 h-5 bg-blue-500 rounded"></div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Description
                                    </h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Here at <strong>Startise</strong>, our
                                    community is growing continuously, and we as
                                    our team. Currently, we are looking for a{' '}
                                    <strong>
                                        Content Marketing Executive (Junior)
                                    </strong>{' '}
                                    to work with the marketing team and the hr
                                    house creative department on diverse blog
                                    posts, guides, and marketing copy. We&apos;d
                                    like to have a productive individual to
                                    bring us excellent creative and technical
                                    writing skills to grow our brand.
                                </p>
                            </div>

                            {/* About You */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl">👤</span>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        About You
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            <strong>
                                                You&apos;re passionate about
                                                content creation.
                                            </strong>{' '}
                                            You&apos;re familiar with different
                                            types of content & have previously
                                            created content for your own
                                            blog/portfolio site.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            <strong>
                                                You love to learn new things
                                                online.
                                            </strong>{' '}
                                            You&apos;re a self-starter & you
                                            take the initiative to solve
                                            problems as well as learn new skills
                                            with minimal supervision.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            <strong>
                                                You want to learn your craft on
                                                the web.
                                            </strong>{' '}
                                            Instead of taking criticism
                                            personally, you accept critical
                                            feedback gladly & seek to improve
                                            yourself.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            <strong>
                                                You&apos;re an excellent written
                                                communicator who thrives through
                                                the cracks.
                                            </strong>{' '}
                                            As writing is our primary means of
                                            communication.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            <strong>
                                                You&apos;re an expert in finding
                                                anything online
                                            </strong>{' '}
                                            and have the ability to research
                                            even the most technical parts of the
                                            products in order to explain those
                                            in simple words to end users.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Responsibilities */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl">👨‍💼</span>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        As Content Marketing Executive (Junior),
                                        You Will:
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Create blog posts, technical
                                            documentation, email and other types
                                            of clear marketing copies to promote
                                            our products.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Responsible for ensuring that our
                                            written communications are clear,
                                            engaging and most importantly,
                                            simple for the users who aren&apos;t
                                            tech-savvy.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Conduct keyword research and use SEO
                                            guidelines to increase web traffic.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Ensure all-around consistency
                                            (style, fonts, images and tone).
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Use data to help inform good content
                                            decisions for our customers.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Along with the marketing & content
                                            team, you&apos;ll also collaborate
                                            with designers, developers and
                                            support team members to write
                                            content for our products.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Skills & Experience */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl">💡</span>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Skills & Experience That You Should
                                        Have:
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Excellent overall English writing
                                            skills in different styles/tones.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Ability to write both long-form and
                                            short-form content.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Familiarity with marketing content
                                            like Google Docs, Google Sheets etc.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Ability to learn quickly, adapt, and
                                            think fast in different situations.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Sound knowledge of WordPress,
                                            technical writing, content marketing
                                            etc.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Basic knowledge about SEO and
                                            keywords research.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Experience doing online research
                                            using multiple sources.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Bonus Points */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl">🎯</span>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Bonus Points If You Have:
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Hands-on experience with using
                                            WordPress.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            Previous copywriting/email marketing
                                            experience.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-2">
                                            •
                                        </span>
                                        <span className="text-gray-700">
                                            A personal blog where you write
                                            regularly.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Benefits */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl">🎁</span>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Benefits
                                    </h2>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-4">
                                    Perks & Benefits That You Will Get:
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Competitive Salary As per standard.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Yearly Profit Share as you
                                            contribute to the growth.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Flexible working schedule to improve
                                            skills.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Scholarship to improve development
                                            out of the country.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Two team Retreat (Out of the
                                            city/country).
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Family yearly Day (we invite all of
                                            your family members).
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Fast career growth opportunities
                                            offered.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Free breakfast, lunch, snowing
                                            coffee, tea and snacks.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Maternity and paternity leave for
                                            all employees.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Continuous feedback and innovation
                                            to advance benefit.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            A challenge to prove value
                                            development as we offer opportunity
                                            for special occasion...
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            If you get married (for the first
                                            time) after being permanent, we will
                                            sponsor your honeymoon.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Family support system, access body
                                            for system sports.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Yearly health checkup (we is great
                                            team).
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">
                                            •
                                        </span>
                                        <span>
                                            Accommodation facility, we have a
                                            1650 sqft 2-storied team for team
                                            member.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
