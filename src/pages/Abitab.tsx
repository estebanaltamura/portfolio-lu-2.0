import CarouselDesktop from 'components/CarouselDesktop';
import CaseHeader from 'components/CaseHeader';
import PostitGrid from 'components/PostitGrid';
import { useEffect } from 'react';

const Abitab = () => {
  const caseHeaderData = {
    title: 'Giving uruguayans a digital identity',
    role: `As a UX designer, I collaborated with a remote team of 12 to identify key pain points in the app the company was using. I co-analysed and synthesised research findings with 1 designer, translating insights into actionable and user-centric design decisions. Utilising data and user behaviour insights, I implemented design iterations that optimised the user experience. Additionally, I created a backlog of tasks for future versions of the project and outlined key considerations to continue improving the user experience. `,
    teamStructure: `1 UX Designer, 1 Product Designer
    10 developers
    1 Project Manager`,
    researchMethods: 'Heuristic analysis, Usability testing. Benchmarking',
    platform: 'Native app',
    timeFrame: `3 months to design (July 2023)
Remote work`,
    tools: 'Figma, Figjam and Zoom',
  };

  const itemsPostItGridOne = [
    {
      icon: <img src="images/tyrCase/postItImages/postItImage1.svg" alt="Tyr case" />,
      paragraph:
        'Diverse access points: multiple websites with different logos, aesthetics, and content caused user confusion',
    },
    {
      icon: <img src="images/tyrCase/postItImages/postItImage2.svg" alt="Tyr case" />,
      paragraph: `Inconsistent terminology: varied terms for "Mobile Identity" across channels led to user confusion during account creation and service use`,
    },

    {
      icon: <img src="images/tyrCase/postItImages/postItImage3.svg" alt="Tyr case" />,
      paragraph:
        'App upgrade needed: the native app, initially a token, was disconnected from the website, missing opportunities for enhanced functionality and user engagement.',
    },
  ];

  const itemsPostItGridTwo = [
    {
      icon: <img src="images/abitab/postItImages/postItImage4.svg" alt="Tyr case" />,
      paragraph: `of users expressed high satisfaction with the overall user experience, highlighting the app's ease of use and intuitive design`,
    },
    {
      icon: <img src="images/abitab/postItImages/postItImage5.svg" alt="Tyr case" />,
      paragraph: `of users found the app's design clear and easy to understand, which facilitated navigation and task completion`,
    },
    {
      icon: <img src="images/abitab/postItImages/postItImage6.svg" alt="Tyr case" />,
      paragraph: `of users found the registration process quick and straightforward, rating it as 'super short' or 'short'`,
    },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1075px]  w-full mx-auto">
      <img src="images/abitab/cover.png" alt="Tyr case" className="rounded-3xl w-full" />
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
      <img src="images/abitab/2.svg" alt="Abitab case" className="mt-10  w-full" />

      {/* Overview */}
      <p className="jakartaFont mt-10" style={{ fontSize: '40px', fontWeight: '700' }}>
        Overview
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        Abitab is a Uruguayan company offering services like bill payments, money transfers, and mobile
        top-ups. One of its products, Abitab Mobile Identity, enables users to access public websites and
        perform tasks like paying taxes and scheduling appointments. To become the leading digital identity
        service in Uruguay, Abitab needed to significantly enhance its user experience and technology.
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

      {/* The Design System */}
      <p className="jakartaFont mt-10" style={{ fontSize: '40px', fontWeight: '700' }}>
        The Design System
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-3">
        Since we had a developed product, many elements of the Design System came predefined beforehand:
        colours, icons, typography, among others.
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-3">
        The job was to design the screens and create new elements that would complement the current design
        system and adapt it to have a more user-centered product.
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-3">
        This approach brought new icons, larger typography, process steppers, a brand new logo, and a great
        effort put on UX writing to ensure clarity as many concepts were new to users.
      </p>

      <img src="images/abitab/3.svg" alt="Tyr case" className="mt-[50px] w-full" />

      {/* Hi-Fi Screens */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '70px' }}>
        Hi-Fi Screens
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-5">
        In terms of visuals, the previously defined definitions extracted from the design system that Abitab
        had were applied, and it was proposed to the client to modify some colors within the color palette to
        make them accessible following the current web accessibility regulations.
      </p>

      <div className="flex flex-col sm:flex-row gap-12 mt-10   mx-auto w-full">
        <div className="flex flex-col bg-[#F5F5FF] rounded-[20px] p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <span className="sm:mr-7 xl:mr-0 w-fit">
              <img src="/images/abitab/HiScreen1.svg" alt="" />
            </span>

            <p className="jakartaFont" style={{ fontSize: '19px', fontWeight: '600', color: '#5E2FD3' }}>
              Process in well defined steps
            </p>
          </div>

          <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
            The central idea of the application was to carry out the process in well-defined steps to reduce
            possible user anxieties about where they were in the process and to decrease registration times,
            making it much more efficient.
          </p>
        </div>

        <div className="flex flex-col bg-[#F5F5FF] rounded-[20px] p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <span className="sm:mr-7 xl:mr-0 w-fit">
              {' '}
              <img src="/images/abitab/HiScreen2.svg" alt="" />
            </span>

            <p className="jakartaFont" style={{ fontSize: '19px', fontWeight: '600', color: '#5E2FD3' }}>
              High-Fidelity prioritized over Wireframes
            </p>
          </div>

          <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
            Due to the limited design hours allocated for the project, a prioritization was conducted, and it
            was decided not to create wireframes and proceed directly to high-fidelity designs.
          </p>
        </div>
      </div>

      <CarouselDesktop />

      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '100px' }}>
        Testing with real users
      </p>

      <p className="jakartaFont" style={{ fontSize: '21px', fontWeight: '700', marginTop: '20px' }}>
        Process of testing
      </p>

      <img src="/images/abitab/4.svg" alt="" className="mt-[30px] w-full" />

      <img src="/images/abitab/5.svg" alt="" className="mt-[30px] w-full" />

      {/* Reflections */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '60px' }}>
        Reflections{' '}
      </p>
      <p className="jakartaFont text-base leading-[28px] mt-3">
        The project was large and very complex, primarily because we had to base our work on a system with so
        many usability issues while needing to maintain certain structures. Additionally, the raw materials
        business model includes multiple actors and processes that had to be considered when thinking about
        new ways to present the workflows. The greatest difficulty was that we had very little design time,
        yet it needed to work. Therefore, it was decided to conduct research but to do so quickly, in order to
        have information to focus on what users needed while still meeting the deadlines for delivering the
        final UI. The key learning from this process was that we need to embrace the unknown and ask many
        questions along the way. For this, it is crucial to have the business on our side and always keep them
        informed of our progress. This allowed us to iterate and improve quickly and effectively.
      </p>
    </div>
  );
};

export default Abitab;
