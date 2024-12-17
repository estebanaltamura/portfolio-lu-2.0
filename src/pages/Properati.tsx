import CarouselDesktop from 'components/CarouselDesktop';
import CaseHeader from 'components/CaseHeader';
import PostitGrid from 'components/PostitGrid';
import { useEffect } from 'react';

const Properati = () => {
  const caseHeaderData = {
    title: 'A tool for real estate expers to work faster and efficiently',
    role: `I collaborated with a remote team to tackle key pain points faced by Properati’s real estate experts. As the UX designer, I helped create a solution that automated the manual process of searching and presenting properties, which had been causing delays and client losses. By co-analyzing research and leveraging user insights, I implemented design improvements that sped up responses and enhanced proposal visuals. I also created a backlog of tasks for future iterations to ensure continued optimization of the user experience.`,
    teamStructure: `1 UX Designer,
    3 developers,
    1 Project Manager`,
    researchMethods: 'User interviews, Benchmarking, User testing ',
    platform: 'Responsive web',
    timeFrame: `1 month to design (Mar 2021)
Remote work`,
    tools: 'Figma, Figjam and Zoom',
  };

  const itemsPostItGridOne = [
    {
      icon: <img src="images/properati/postItImages/postItImage1.svg" alt="Tyr case" />,
      paragraph:
        'Doing things manually: Creating manual proposals was a highly time-consuming process that significantly impacted the efficiency of the commercial workflow. Each expert had to manually gather information about the properties, format the proposal individually, and then send it to each client.',
    },
    {
      icon: <img src="images/properati/postItImages/postItImage2.svg" alt="Tyr case" />,
      paragraph: `Mutiple channels: The process of sending house proposals by the experts lacked uniformity, as some used WhatsApp, others used email, and some made phone calls. This impacted the consistency of the company's brand image and the customer experience.`,
    },

    {
      icon: <img src="images/properati/postItImages/postItImage3.svg" alt="Tyr case" />,
      paragraph:
        'No design in the proposal: The absence of a standardized design for the proposals, along with each expert sending their own version, resulted in an inconsistent brand image. Without a cohesive format, the information about each property was presented in various ways, making it difficult for clients to compare options effectively.',
    },
  ];

  const itemsPostItGridTwo = [
    {
      icon: <img src="images/properati/postItImages/postItImage4.svg" alt="Tyr case" />,
      paragraph: `percentage of increase in the number of scheduled appointments, highlighting the effectiveness of the redesign in facilitating easier and more frequent scheduling of property visits by clients.`,
    },
    {
      icon: <img src="images/properati/postItImages/postItImage5.svg" alt="Tyr case" />,
      paragraph: `increase in the client response rate, demonstrating the effectiveness of the redesign in making proposals more responsive and appealing to clients.`,
    },
    {
      icon: <img src="images/properati/postItImages/postItImage6.svg" alt="Tyr case" />,
      paragraph: `reduction in proposal creation time, allowing real estate experts to focus more on client interactions and closing deals.`,
    },
  ];

  const itemsPostItGridthree = [
    {
      icon: <img src="images/properati/postItImages/postItImage7.svg" alt="Tyr case" />,
      paragraph: `The main idea was to keep everything on a single screen, so we chose a one-page website with the client's name front and center. We also used the same cards from the main site to maintain a consistent aesthetic, ensuring a smooth, cohesive experience without losing the established style.`,
    },
    {
      icon: <img src="images/properati/postItImages/postItImage8.svg" alt="Tyr case" />,
      paragraph: `The sellers also requested as a main feature that clients be able to choose a visit date from a calendar that would sync with their own calendar, along with a button to automatically chat via WhatsApp directly from the website. This would make communication more seamless and prevent any loss of appointments.`,
    },
    {
      icon: <img src="images/properati/postItImages/postItImage9.svg" alt="Tyr case" />,
      paragraph: `Due to the limited design hours allocated for the project, a prioritization was conducted, and it was decided not to create wireframes and proceed directly to high-fidelity designs.`,
    },
  ];

  const desktopSrcImages = [
    '/images/properati/properatiTelefono1.svg',
    '/images/properati/properatiTelefono2.svg',
    '/images/properati/properatiTelefono3.svg',
    '/images/properati/properatiTelefono4.svg',
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1075px]  w-full mx-auto">
      <img src="images/properati/cover.png" alt="Tyr case" className="rounded-3xl w-full" />
      <p className="jakartaFont text-base font-medium mt-10">ABITAB</p>
      <CaseHeader
        title={caseHeaderData.title}
        role={caseHeaderData.role}
        teamStructure={caseHeaderData.teamStructure}
        researchMethods={caseHeaderData.researchMethods}
        platform={caseHeaderData.platform}
        timeFrame={caseHeaderData.timeFrame}
        tools={caseHeaderData.tools}
      />
      <img src="images/properati/2.svg" alt="Abitab case" className="mt-10  w-full" />

      {/* Overview */}
      <p className="jakartaFont mt-10" style={{ fontSize: '40px', fontWeight: '700' }}>
        Overview
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        Real estate experts work every day with multiple clients simultaneously and have to send multiple
        proposals, each of which always includes more than one property.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        Until that point, there was no defined methodology for work. Each expert used different tools to do
        the same job, contacted clients through various channels, and there was no defined script for talking
        to potential clients nor any follow-up after the initial contact, among other issues.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        Additionally, clients interested in buying houses often need a fast response and a visually pleasing
        proposal. Since we didn&apos;t have either of these, we were losing clients.
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        Due to the necessity of solving all these problems, we were asked to create a solution as soon as
        possible.
      </p>

      <div className="flex flex-col mt-10">
        <p className="jakartaFont mb-5" style={{ fontSize: '21px', fontWeight: '700' }}>
          Main problems
        </p>
        <PostitGrid items={itemsPostItGridOne} />
      </div>

      <div className="flex flex-col mt-10">
        <p className="jakartaFont mb-5" style={{ fontSize: '21px', fontWeight: '700' }}>
          Outcomes{' '}
        </p>
        <PostitGrid items={itemsPostItGridTwo} />
      </div>

      {/* User interviews & user journey */}
      <p className="jakartaFont mt-10" style={{ fontSize: '40px', fontWeight: '700' }}>
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

      {/** The Design */}
      <p className="jakartaFont mt-10" style={{ fontSize: '40px', fontWeight: '700' }}>
        The design
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        Since the commercial proposal was going to be part of Properati’s ecosystem, we decided to maintain
        the brand style guide. The only thing we wanted to add to the design where illustrations, so we used
        an illustration bank and defined the aesthetics and tone for the rest of the company to ensure a
        unified approach regarding these elements.
      </p>

      <div className="flex flex-col mt-10">
        <p className="jakartaFont mb-5" style={{ fontSize: '21px', fontWeight: '700' }}>
          Key design decisions
        </p>
        <PostitGrid items={itemsPostItGridthree} />
      </div>

      <CarouselDesktop desktopImages={desktopSrcImages} />

      {/** The Design */}
      <p className="jakartaFont mt-10" style={{ fontSize: '40px', fontWeight: '700' }}>
        Reflections{' '}
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        The commercial proposal was created to solve a huge time and speed issue with customers that are in
        the search of a new home.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        We construct a design for a new product based on a research investigation focused on the experts and
        also on the clients. We also created a backlog with ideas that could not be included in this first
        iteration due to time constraints but will make the proposal much more efficient and attractive.
      </p>

      <p className="jakartaFont text-base leading-[28px] mt-5">
        Additionally, we designed a small survey for sellers to give to their clients regarding the new
        commercial proposal, asking about things that do not work or features they would like to have. This
        will help us gather ideas to incorporate into future versions.
      </p>
    </div>
  );
};

export default Properati;
