import Faq from '@/components/shared/Faq';
import HeroSection from './HeroSection';
import PhotoEditingServices from './PhotoEditingServices';
import PhotoEditingStats from './PhotoEditingStats';
import CallToAction from '@/components/shared/CallToAction';

const faqs = [
    {
        id: 'faq-1',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                What types of photo editing services do you offer?
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                We offer a wide range of photo editing services, including
                background removal, image masking, color correction, shadow
                creation, ghost mannequin effects, photo retouching, and
                e-commerce image editing. Our services are designed to enhance
                product images, portraits, and other commercial photos.
            </p>
        ),
    },
    {
        id: 'faq-2',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                How much do your photo editing services cost?
            </div>
        ),
        answer: (
            <div>
                <p className="text-xl mt-4">
                    Our pricing starts at just $0.50 per image. We also offer
                    volume discounts for bulk orders:
                </p>
                <ul className="flex flex-col gap-y-2 list-inside list-disc mt-4">
                    <li className="text-lg">
                        <strong>Over 50 images daily</strong> – 10% discount
                    </li>
                    <li className="text-lg">
                        <strong>Over 100 images daily</strong> – 15% discount
                    </li>
                    <li className="text-lg">
                        <strong>Over 200 images daily</strong> – 25% discount
                        for a customized quote, please contact us with your
                        requirements.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: 'faq-3',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                What is your turnaround time for edited images?{' '}
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                Our standard turnaround time depends on the complexity of the
                project. Simple edits can be completed within 12-24 hours, while
                more complex tasks may take 48 hours or longer. If you need
                urgent delivery, we also offer express services upon request.
            </p>
        ),
    },
    {
        id: 'faq-4',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                Do you offer a free trial for new customers?{' '}
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                Yes! We provide a free trial for first-time customers so you can
                experience our high-quality editing services before placing a
                paid order. Just send us a sample image, and we’ll edit it for
                free.
            </p>
        ),
    },
    {
        id: 'faq-5',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                How do you ensure the security of my images?{' '}
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                We take data security very seriously. Your images are processed
                in a secure environment, and we never share or use them for any
                purpose other than editing. We also offer Non-Disclosure
                Agreements (NDAs) upon request for extra confidentiality.
            </p>
        ),
    },
    {
        id: 'faq-6',
        question: (
            <div className="text-2xl md:text-3xl lg:text-4xl">
                How can I place an order for photo editing?{' '}
            </div>
        ),
        answer: (
            <p className="text-xl mt-4">
                ing an order is simple! You can send us your images via email,
                cloud storage, or our online upload system. Specify your editing
                requirements, and we’ll take care of the rest. Once the editing
                is complete, we’ll deliver the final images through your
                preferred method.
            </p>
        ),
    },
];

export default async function RootPhotoEditingPage() {
    return (
        <section className="w-full">
            <HeroSection />
            <PhotoEditingServices />
            <PhotoEditingStats />
            <Faq data={faqs} />
            <CallToAction />
        </section>
    );
}
