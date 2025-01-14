import CaseHeader from 'components/CaseHeader';
import PostitGrid from 'components/PostitGrid';
import { useEffect } from 'react';

const Proppit = () => {
  const caseHeaderData = {
    title: 'A tool for real estate experts to work faster and efficiently',
    role: `The UXR team I was working in, was tasked with understanding why customers weren’t renewing their subscriptions on Proppit a marketing tool for real estate professionals, and identifying solutions to reduce churn from 9% to 5%. 
The research focused on customers in Colombia who had churned within 90 days of activation. The plan involved analyzing existing customer data followed by phone interviews. Key challenges included recruiting participants without incentives and conducting the initial phase via phone.`,
    teamStructure: `1 UX Designer, 
    1 Product Designer`,
    researchMethods: 'User interviews by phone',
    timeFrame: `3 weeks to do research
Remote work`,
    tools: 'Figma, Excel',
    platform: '',
  };

  const itemsPostItGridOne = [
    {
      icon: <img src="images/proppit/postItImages/postItImage1.svg" alt="Tyr case" />,
      paragraph:
        'The 9% churn rate within the first 90 days of activation highlights a significant customer retention issue, which must be addressed to meet the goal of reducing the churn rate to 5%.',
    },
    {
      icon: <img src="images/proppit/postItImages/postItImage2.svg" alt="Tyr case" />,
      paragraph: `The research faced the challenge of recruiting customers for interviews without offering incentives, which may have limited participation and impacted the quality of the data collected.`,
    },

    {
      icon: <img src="images/proppit/postItImages/postItImage3.svg" alt="Tyr case" />,
      paragraph:
        'Conducting the initial phase of the research through phone calls might have introduced limitations, such as a lack of connection with users or gathering less detailed information compared to other methods.',
    },
  ];

  const itemsPostItGridTwo = [
    {
      icon: <img src="images/proppit/postItImages/postItImage4.svg" alt="Tyr case" />,
      paragraph: '15% of the users went to or used stronger competitors (Finca Raíz).',
    },
    {
      icon: <img src="images/proppit/postItImages/postItImage5.svg" alt="Tyr case" />,
      paragraph: `11.5% felt they wasted their money with a solution that isn’t working.`,
    },

    {
      icon: <img src="images/proppit/postItImages/postItImage6.svg" alt="Tyr case" />,
      paragraph: '11.5%  mentioned mistreatment in customer service.',
    },
  ];

  const itemsPostItGridThree = [
    {
      icon: <img src="images/proppit/postItImages/postItImage7.svg" alt="Tyr case" />,
      paragraph: '7.6% was the cost and/or lack of smaller plans suitable for small real estate agencies.',
    },
    {
      icon: <img src="images/proppit/postItImages/postItImage8.svg" alt="Tyr case" />,
      paragraph: `7.6% of the users had initial account activation problems.`,
    },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1075px]  w-full mx-auto">
      <img src="images/proppit/cover.png" alt="Tyr case" className="rounded-3xl w-full" />
      <p className="jakartaFont text-base font-medium mt-10">Proppit</p>

      <CaseHeader
        title={caseHeaderData.title}
        role={caseHeaderData.role}
        teamStructure={caseHeaderData.teamStructure}
        researchMethods={caseHeaderData.researchMethods}
        platform={caseHeaderData.platform}
        timeFrame={caseHeaderData.timeFrame}
        tools={caseHeaderData.tools}
      />

      {/* Overview */}
      <p className="jakartaFont mt-20" style={{ fontSize: '40px', fontWeight: '700' }}>
        Overview
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        Our UXR team of two was tasked with understanding why customers weren’t renewing their subscriptions
        on Proppit and finding solutions to reduce churn from 9% to 5%.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        The target audience for this research was customers from Colombia who had churned within 90 days of
        activation.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        Working independently yet collaboratively across the company, we met with Proppit stakeholders to
        present and adjust our plan, which had a maximum duration of one month.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        The plan involved first analyzing existing customer data and then conducting phone interviews. The
        main challenges were recruiting customers for interviews without incentives and conducting the initial
        phase by phone.
      </p>

      <div className="flex flex-col mt-10">
        <p className="jakartaFont mb-5" style={{ fontSize: '21px', fontWeight: '700' }}>
          Main problems
        </p>
        <PostitGrid items={itemsPostItGridOne} />
      </div>

      {/* User interviews */}
      <p className="jakartaFont mt-20" style={{ fontSize: '40px', fontWeight: '700' }}>
        User interviews & user journey
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        We started interviewing a selected group of real estate experts to map the expert&apos;s User Journey.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        Until that point, there was no defined methodology for work. Each expert used different tools to do
        the same job, contacted clients through various channels, and there was no defined script for talking
        to potential clients nor any follow-up after the initial contact, among other issues.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        All interviews were conducted virtually with experts from Colombia, Ecuador, and Peru. While we
        gathered answers, many new questions also arose.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        The key discovery was that the proposal served as a property display. Clients would select properties
        they liked and schedule visits with the expert. Thus, the proposal needed a feature for scheduling
        appointments.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        Experts emphasized the importance of highlighting certain parts of the proposal, such as images and
        property prices, as clients often discard properties if the price isn’t right. Additionally, for new
        projects, the completion date was crucial to include in the proposal design.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        To develop this project we followed the lines of the Double Diamond methodology and as a team, we
        generated deliverables for the first two phases: for Discovery and in the Define phase.
      </p>

      <img src="images/proppit/proppitImage1.png" alt="Tyr case" className="rounded-3xl w-2/3 m-auto mt-16" />

      {/* Stage 1 */}
      <p className="jakartaFont mt-10" style={{ fontSize: '40px', fontWeight: '700', marginTop: '80px' }}>
        Stage 1: Customer Information Analysis
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        In the first stage, we analyzed existing data from Proppit’s customers to minimize the need for high
        investment. We requested access to customer complaint/request emails and NPS survey results.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        We reviewed 137 emails from an 8-month period and 500 NPS messages. The emails revealed urgent issues
        and needs, while the NPS responses highlighted customer grievances and suggestions.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        We compiled all the information into an Excel sheet, categorized it, and created quantitative graphs
        per topic.
      </p>

      {/* Stage 2 */}
      <p className="jakartaFont mt-16" style={{ fontSize: '40px', fontWeight: '700' }}>
        Stage 2: Interviewing Unsubscribed Users
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        In the second stage, we interviewed customers who did not renew their subscriptions to understand
        their pain points and reasons for churn.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        We requested a list of customers who had been active for less than 90 days, were from Colombia, and
        had unsubscribed. Initially, we had no incentives, resulting in a low response rate and extended
        timeline. When incentives were later provided, we had already reached theoretical saturation and
        stopped interviewing.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        Interviews were conducted by phone, as per stakeholder request, but we recommended video calls for
        richer interaction. We called users first to set up video calls, defaulting to phone interviews if
        video calls were not feasible.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        To ensure effective follow-up, we prepared several tools:
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-2 ml-3">1. User recruitment spreadsheet</p>

      <p className="jakartaFont text-base leading-[28px] mt-2 ml-3">2. Recruitment email</p>

      <p className="jakartaFont text-base leading-[28px] mt-2 ml-3">3. Calendly setup for scheduling</p>

      <p className="jakartaFont text-base leading-[28px] mt-2 ml-3">4. Reminder messages via WhatsApp</p>

      <p className="jakartaFont text-base leading-[28px] mt-7">
        For detailed tools and scripts, you can view the documents by <a>clicking here</a>.
      </p>

      <div className="flex flex-col mt-16 gap-8">
        <p className="jakartaFont" style={{ fontSize: '21px', fontWeight: '700' }}>
          Key takeaways from the interviews{' '}
        </p>
        <PostitGrid items={itemsPostItGridTwo} />

        <PostitGrid items={itemsPostItGridThree} />
      </div>
      <p className="jakartaFont text-base leading-[28px] mt-10">
        These reasons were consistent with issues mentioned in customer emails and NPS survey responses
        analyzed in stage 1.
      </p>

      {/* Summary and Conclusion */}
      <p className="jakartaFont mt-20" style={{ fontSize: '40px', fontWeight: '700' }}>
        Summary and Conclusion
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        The research identified clear user pain points, leading to concrete improvement solutions that could
        solve the churn problem:
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-2 ml-3">
        1. Offer smaller plans for small clients.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-2 ml-3">
        2. Improve the payment/renewal process by adding features for users to self-manage invoices and report
        payments.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-2 ml-3">
        3. Enhance initial account activation with an automatic system for new customers.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-2 ml-3">
        4. Provide training through webinars or a YouTube channel to help customers better utilize the
        platform.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        Our research team provided these insights to the product team for implementation.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        The presented data serves as a baseline to measure the impact of future improvements.
      </p>
    </div>
  );
};

export default Proppit;
