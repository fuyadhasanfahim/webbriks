"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import aos from "aos";




const TermsAndConditionsPage = () => {

  useEffect(() => {
    aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        data-aos="fade-up"
        style={{ backgroundImage: "url('https://iili.io/dhd9CUg.jpg')" }}
        className="bg-no-repeat bg-center bg-cover"
      >
        <div className="text-white py-10 lg:py-16 text-center bg-about-top">
          <div className="container mx-auto px-5">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl mb-6">
              Please review our Terms and Conditions carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-16 bg-gray-100 text-gray-800 text-justify" data-aos="fade-up">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="prose max-w-none leading-relaxed text-lg">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <div className='space-y-5'>
                <p>
                  Welcome to Web briks, LLC. Please review our Terms and Conditions
                  of Use carefully, as they impact your legal rights and include
                  provisions for resolving any disputes that may arise between us.
                  Your agreement to these terms signifies your consent to the
                  outlined terms and conditions.
                </p>
                <p>
                  Thank you for choosing **Web briks, LLC** (“we,” “us,” “our”).
                  By using our website (webBriks.com) and services (collectively,
                  the “Site”), or accessing any content provided by us, you
                  (“you,” “client,” “user”) are entering into a binding agreement
                  with us.
                </p>
                <p>
                  Our company operates with a registered office located at 1209
                  Mountain Road PL NE, Ste R, Albuquerque, NM, 87110, and an
                  operational office at House 106, 1/1 Zigzag Road, Masterpara,
                  Gaibandha, Bangladesh. We are committed to delivering
                  high-quality services tailored to the unique needs of our
                  clients.
                </p>
                <p>
                  {`In these Terms and Conditions, the term **"Client"** refers to the individual, company, or organization that engages **Web briks, LLC** for professional services. **"Service"** encompasses any task, project, or work provided by Web briks, LLCluding but not limited to Graphic Design, Photo Editing, Web Development, Virtual Assistance, and Digital Marketing.`}
                </p>
                <p>
                  {`
                A **"Project"** refers to the specific scope of work agreed upon between Web Briks and the Client, detailing the deliverables, deadlines, and expectations. The **"Agreement"** is the legally binding contract between Web Briks and the Client, governed by these Terms, outlining the services to be provided. **"Third-Party Application"** refers to any external software, platform, or tool used by Web Briks in the course of providing services. 
                `}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">2. Age</h2>
              <p>
                To use Web Briks services and access our content, you must meet
                the following criteria:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  You must be 18 years or older, or if you are between 13 and
                  18, you must have the consent of a parent or guardian to agree
                  to these terms.
                </li>
                <li>
                  You must have the legal capacity to enter into a binding
                  contract with Web Briks.
                </li>
                <li>
                  You must be a resident of a country where our services are
                  legally available.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                3. Scope of Services
              </h2>
              <p>
                At Web briks, LLC, we offer a wide range of outsourcing services
                tailored to meet the specific needs of our clients. Our core
                services include Graphics Design and Photo Editing, Web Design
                and Development, Virtual Assistant and Digital Marketing
              </p>
              <div className="ml-5">
                <h2 className="text-xl font-bold mt-8 mb-4">
                  1. Customization of Services
                </h2>
                <p>
                  At Web briks, LLC, We understand that every business is unique.
                  Our services are fully customizable based on the specific
                  goals, requirements, and budget of each client. We collaborate
                  closely with clients to understand their objectives and
                  deliver tailored solutions that align with their business
                  strategies. Whether it’s a one-time project or ongoing
                  support, our flexibility ensures that we adapt our offerings
                  to fit the client’s needs.
                </p>
                <h2 className="text-xl font-bold mt-8 mb-4">
                  2. Client-Provided Information
                </h2>
                <p>
                  Our services are largely dependent on the information,
                  materials, and specifications provided by the client. For
                  example, the quality and accuracy of projects rely on the
                  clarity and completeness of the materials supplied (such as
                  images, text, branding guidelines, or functional requirements.
                  It is the client’s responsibility to provide true, accurate,
                  and complete information to ensure successful project
                  outcomes. Web briks, LLC is not liable for delays, errors, or
                  quality issues that arise due to incomplete or inaccurate data
                  from the client. In every engagement, we aim to maintain open
                  communication, ensuring that clients are informed at every
                  stage of the project and that deliverables meet their
                  expectations.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                4. User Guidelines
              </h2>
              <p>
                At Web briks, LLC, we value professionalism and mutual respect in
                all interactions. To ensure a positive and efficient working
                relationship, we have established clear expectations for how
                clients should engage with our services. By using our services,
                clients agree to abide by the following guidelines:
              </p>
              <div className="ml-5">
                <h2 className="text-xl font-bold mt-8 mb-4">
                  1. Professional Communication
                </h2>
                <p>
                  Clients are expected to communicate with Web briks, LLC in a
                  clear, respectful, and professional manner. This includes
                  providing concise and accurate project briefs, timely
                  responses to inquiries, and maintaining open dialogue
                  throughout the project. Effective communication ensures smooth
                  project execution and timely delivery of services.
                </p>
                <ul className="list-disc pl-8 mb-4 mt-2">
                  <li>
                    Clients should respond to project-related queries within a
                    reasonable time frame to avoid delays.
                  </li>
                  <li>
                    Any concerns or issues with the project should be
                    communicated promptly so they can be addressed and resolved
                    in a constructive manner.
                  </li>
                </ul>
                <h2 className="text-xl font-bold mt-8 mb-4">
                  2. Respect and Professionalism
                </h2>
                <p>
                  We encourage respectful interaction at all times. Offensive,
                  discriminatory, or unprofessional behavior towards our team
                  will not be tolerated. Web briks, LLC promotes a positive
                  working environment, and we expect our clients to treat our
                  team members with dignity and respect. Similarly, our team
                  will always uphold the same standards of professionalism in
                  all client interactions.
                </p>
                <h2 className="text-xl font-bold mt-8 mb-4">
                  3. Prohibited Actions
                </h2>
                <p>
                  Clients are strictly prohibited from engaging in any of the
                  following activities while using Web Briks’ services:
                </p>
                <ul className="list-disc pl-8 mb-4 mt-2">
                  <li>
                    Sharing or submitting offensive, abusive, or unlawful
                    content, including content that promotes hate, violence,
                    harassment, or discrimination.
                  </li>
                  <li>
                    Uploading materials that infringe on intellectual property
                    rights or violate third-party rights without proper
                    authorization.
                  </li>
                  <li>
                    Engaging in any fraudulent activities, such as
                    misrepresenting project needs, payment information, or any
                    other critical details.
                  </li>
                </ul>
                <p>
                  Any content provided by the client must comply with legal and
                  ethical standards. Web briks, LLC reserves the right to refuse
                  to work on projects that violate these guidelines or involve
                  illegal, unethical, or harmful content.
                </p>
                <h2 className="text-xl font-bold mt-8 mb-4">
                  4. Consequences for Non-Compliance
                </h2>
                <p>
                  Failure to comply with these guidelines may result in the
                  following actions:
                </p>
                <ul className="list-disc pl-8 mb-4">
                  <li>
                    Warning or Request for Rectification: Minor infractions may
                    result in a warning, with an opportunity for the client to
                    rectify the issue.
                  </li>
                  <li>
                    Suspension of Services: Repeated or severe violations of the
                    guidelines may lead to the temporary suspension of services
                    until the matter is resolved.
                  </li>
                  <li>
                    Service Termination: In cases of serious or repeated
                    breaches of these guidelines, Web briks, LLC reserves the
                    right to terminate the service agreement immediately.
                    Clients will be notified of the termination, and any
                    outstanding work or payments will be handled as outlined in
                    the agreement.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                5. Pricing and Payment Terms
              </h2>
              <p>
                Web briks, LLC offers flexible pricing options based on the
                nature and scope of the services provided. Here’s a detailed
                outline of our pricing and payment terms:
              </p>
              <h2 className="text-xl mt-8 mb-4">Pricing Structure:</h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Project-Based Pricing: For well-defined projects with specific
                  deliverables, we offer a fixed price based on the scope of
                  work. This pricing is agreed upon before work commences and
                  outlined in the project agreement.
                </li>
                <li>
                  Hourly Pricing: For services that are not easily quantifiable
                  or may vary in scope, we charge on an hourly basis. The hourly
                  rate is specified in the service agreement.
                </li>
                <li>
                  Retainer-Based Pricing: For ongoing or long-term services, we
                  offer retainer agreements. Clients pay a set fee at regular
                  intervals (e.g., monthly) for a predefined amount of work or
                  support.
                </li>
              </ul>

              <h2 className="text-xl mt-8 mb-4">Payment Schedules:</h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Initial Deposit: A deposit of 50% of the total project cost is
                  required upfront before the commencement of work. This deposit
                  secures the project and covers initial costs.
                </li>
                <li>
                  Final Payment: The remaining balance is due upon completion of
                  the project, before any deliverables are handed over to the
                  client.
                </li>
              </ul>
              <h2 className="text-xl mt-8 mb-4">Accepted Payment Methods:</h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Credit Cards: Payments can be made via major credit cards
                  (e.g., Visa, MasterCard).
                </li>
                <li>
                  Wire Transfers: Bank wire transfers are accepted for larger
                  payments or international clients.
                </li>
                <li>
                  PayPal: We also accept payments through PayPal for added
                  convenience.
                </li>
              </ul>

              <h2 className="text-xl mt-8 mb-4">Late Payment Policies:</h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Interest Charges: Invoices that remain unpaid beyond the due
                  date may incur an interest charge of 1.5% per month on the
                  outstanding balance, or the maximum allowed by law, whichever
                  is lower.
                </li>
                <li>
                  Suspension of Services: Continued non-payment may result in
                  the suspension of ongoing services until payment is received.
                </li>
              </ul>
              <h2 className="text-xl mt-8 mb-4">
                Invoice Issuance and Payment Deadlines:
              </h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Invoice Issuance: Invoices are issued upon project completion
                  or at the end of each billing cycle, depending on the pricing
                  structure.
                </li>
                <li>
                  Payment Deadlines: Payments are due within 15 days of the
                  invoice date. Clients are responsible for ensuring that
                  payments are made promptly to avoid any service interruptions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                6. Refunds and Cancellations
              </h2>
              <h2 className="text-xl mt-8 mb-4">Refund Policy:</h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Incomplete or Canceled Services: Clients may be eligible for a
                  refund if services are not completed or if the project is
                  canceled before any deliverables are provided. Refunds will be
                  calculated based on the amount of work completed and any costs
                  incurred.
                </li>
                <li>
                  Completed Services: No refunds will be provided for services
                  that have been completed and approved by the client.
                </li>
                <li>
                  Partial Refunds: If a client is dissatisfied with the service
                  and a reasonable resolution cannot be reached, partial refunds
                  may be considered. This will be evaluated on a case-by-case
                  basis.
                </li>
              </ul>
              <h2 className="text-xl mt-8 mb-4">Cancellation Policy:</h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Client-Initiated Cancellation: Clients may cancel a project at
                  any time. Refunds, if any, will be determined based on the
                  amount of work completed up to the point of cancellation. Web
                  Briks, LLC reserves the right to charge for work performed and
                  costs incurred before cancellation.
                </li>
                <li>
                  Web Briks-Initiated Cancellation: Web briks, LLC reserves the
                  right to cancel a project if the client violates the terms of
                  service or fails to cooperate in a reasonable manner. In such
                  cases, refunds may not be provided, and the client may be
                  charged for work completed up to the point of termination.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                7. Intellectual Property
              </h2>
              <ul className="list-disc pl-8 mb-4">
                <li>
                  Ownership and Transfer: Upon full payment, clients receive
                  ownership of the final deliverables produced by Web briks, LLC.
                  This includes all work specifically created for the client’s
                  project. And, we won’t use it for our purposes in future.{" "}
                </li>
                <li>
                  Web Briks Rights: Web briks, LLC retains ownership of all
                  project files, templates, and design elements not explicitly
                  transferred to the client (free works). We also reserve the
                  right to use these elements in future projects.
                </li>
                <li>
                  Copyrights and Trademarks: Any designs, concepts, or templates
                  created by Web briks, LLC remain the property of Web Briks,
                  including copyrights and trademarks. Ownership of these rights
                  will only be transferred to the client if explicitly stated in
                  the service agreement.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                8. Revisions and Modifications
              </h2>
              <p>
                Web briks, LLC includes a specified number of revisions in the
                scope of each service, as outlined in the project agreement. Our
                aim is to satisfy clients. So revisions will continue until the
                client approves the project. Once the project approves, we may
                incur extra charges for further modifications. We strive to
                complete modifications within a reasonable turnaround time,
                typically 3-5 business days. It depends on the complexity of the
                changes and project workload. All modifications must be
                requested in writing and will be handled promptly to ensure
                client satisfaction.
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                9. Limitation of Liability
              </h2>
              <p>
                Web briks, LLC shall not be held liable for any indirect,
                incidental, or consequential damages arising from service
                interruptions, data loss, or errors during the provision of our
                services. In cases where third-party applications or software
                are involved, Web briks, LLC limits its liability to issues
                directly arising from our services. We are not responsible for
                any problems or damages caused by the performance,
                functionality, or reliability of third-party tools or software
                used in the course of delivering our services. Clients are
                encouraged to review and understand the terms and conditions of
                any third-party services integrated into their projects.
              </p>
            </section>
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                10. Changes to Terms
              </h2>
              <p>
                Web briks, LLC reserves the right to update or modify these Terms
                and Conditions at any time to reflect changes in our services,
                business practices, or legal requirements. Clients will be
                notified of any significant changes through email or through a
                notice on our website. Continued use of our services following
                such updates constitutes acceptance of the revised terms. It is
                the clients responsibility to review the terms periodically to
                stay informed of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">
                11. Contact Information
              </h2>
              <p>
                For inquiries, disputes, or issues, please contact us at{" "}
                <Link
                  href="mailto:info@webbriks.com"
                  className="text-blue-500 underline"
                >
                  info@webbriks.com
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        data-aos="fade-up"
        className="text-center text-gray-100 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('https://iili.io/dhdK4wu.jpg')" }}
      >
        <div className="bg-cta py-16">
          <div className="container mx-auto px-5 lg:px-20">
            <h2 className="text-3xl font-bold mb-4">Questions?</h2>
            <p className="text-xl mb-8">
              If you have any questions or need further clarification, feel free
              to contact us.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
