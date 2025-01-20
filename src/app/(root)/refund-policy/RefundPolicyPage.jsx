"use client";
import aos from "aos";
import Link from "next/link";
import { useEffect } from "react";

const RefundPolicyPage = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100 text-justify">
      {/* Hero Section */}
      <section
        data-aos="fade-up"
        style={{ backgroundImage: "url('https://iili.io/dhd9CUg.jpg')" }}
        className="bg-no-repeat bg-center bg-cover"
      >
        <div className="text-white py-10 lg:py-16 text-center bg-about-top">
          <div className="container mx-auto px-5">
            <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-xl mb-6">
              Please review our refund policy carefully.
            </p>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 mt-16"
      >
        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
        <div className="space-y-5">
          <p>
            {`
            At Web Briks LLC., we are committed to delivering high-quality outsourcing services. 
            If, for any reason, you are not satisfied with our services, we have established the following refund policy.
            `}
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">1. Refund Eligibility</h2>
        <div className="space-y-5">
          <p>
            {`
            Refunds may be provided in the following circumstances:
            `}
          </p>
          <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
            <li>
              Incomplete Services: If we fail to deliver the agreed-upon services within the specified timeline without valid justification or notification.
            </li>
            <li>
              Quality Issues: If the delivered services do not meet the agreed-upon quality standards or project scope outlined in the initial contract or service agreement.
            </li>
            <li>
              Mutual Agreement: If both parties mutually agree to discontinue the project due to unforeseen circumstances, a partial or full refund may be issued based on the work completed.
            </li>
          </ul>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">2. Non-Refundable Services</h2>
        <div className="space-y-5">
          <p>The following services are non-refundable:</p>
          <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
            <li>
              Completed Projects: Once the project or service is delivered and approved by the client, no refunds will be issued unless it falls under the eligibility criteria above.
            </li>
            <li>
              Digital Marketing Campaigns: Services such as SEO, social media marketing, and ad campaign management are non-refundable once the campaign has been launched.
            </li>
            <li>
              Consultation Fees: Any fees paid for consultations, assessments, or strategy sessions are non-refundable.
            </li>
          </ul>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">3. Refund Request Process</h2>
        <div className="space-y-5">
          <p>To request a refund, please follow these steps:</p>
          <ul className="list-disc pl-8 mb-4 mt-2 space-y-1">
            <li>
              Contact Us: Email us at <Link href="mailto:info@webbriks.com" className="text-blue-500 underline">info@webbriks.com</Link> within 7 days of receiving the service, detailing the issues or reasons for your refund request.
            </li>
            <li>
              Evaluation: We will review your request and assess whether it falls under our refund eligibility criteria. We may ask for further details or clarifications.
            </li>
            <li>
              Resolution: If your request is approved, we will issue a refund based on the original payment method within 14 business days. If the issue can be resolved, we may offer a revision or corrective services instead of a refund.
            </li>
          </ul>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">4. Partial Refunds</h2>
        <div className="space-y-5">
          <p>
            In some cases, a partial refund may be issued depending on the amount of work completed. The refund amount will be calculated based on the completed and delivered portion of the project relative to the total project cost.
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">5. Refund Timeframes</h2>
        <div className="space-y-5">
          <p>
            Approved refunds will be processed within 14 business days from the approval date. Please note that your bank or payment provider may take additional time to reflect the refund in your account.
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">6. Changes to the Refund Policy</h2>
        <div className="space-y-5">
          <p>
            Web Briks LLC. reserves the right to modify or update this refund policy at any time. Any changes will be posted on our website and will be effective as of the updated date.
          </p>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
      >
        <h2 className="text-3xl font-bold mb-4">7. Contact Information</h2>
        <div className="space-y-5">
          <p>
            If you have any questions or concerns regarding this refund policy, please get in touch with us at: <Link href="mailto:info@webbriks.com" className="text-blue-500 underline">info@webbriks.com</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;
