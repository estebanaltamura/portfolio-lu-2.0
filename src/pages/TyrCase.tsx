import CaseHeader from 'components/CaseHeader';
import PostitGrid from 'components/PostitGrid';
import Typo from 'components/Typo';

const TyrCase = () => {
  const caseHeaderData = {
    title: 'My Role',
    role: `As the UX designer for the project I had the initial conversations with the client
  to understand their business vision and identify the issues they had noticed
  and needed to improve. Conducted the primary research to analyze the
  previous system and identify improvements. Based on this analysis, I
  developed a complete flow for the current system. Also conducted interviews
  to understand key pain points, which led to creating wireframes and ultimately
  designing the visual aspects of the screens.`,
    teamStructure: `2 UX / UI designers (including me)
  2 developers
  1 Project Manager`,
    researchMethods: 'User Interview, usability testing',
    platform: 'Website',
    timeFrame: `1 month to design (March, 2023)
  Remote work`,
    tools: 'Figma, FigJam and Zoom',
  };

  const items = [
    {
      icon: <img src="images/tyrCase/postItImages/postItImage1.svg" alt="Tyr case" />,
      paragraph:
        'Identify the complete flow of the system and identify where the connections happened with the different users',
    },
    {
      icon: <img src="images/tyrCase/postItImages/postItImage2.svg" alt="Tyr case" />,
      paragraph: `Improve the system's usability so that it is easily understandable for both existing and new users`,
    },

    {
      icon: <img src="images/tyrCase/postItImages/postItImage3.svg" alt="Tyr case" />,
      paragraph: 'Improve the design of the  forms to avoid information duplication and reduce errors',
    },

    {
      icon: <img src="images/tyrCase/postItImages/postItImage4.svg" alt="Tyr case" />,
      paragraph:
        'Achieved a 70% reduction in duplication errors. The design incorporated mandatory fields and blocked certain fields from being modified by specific user types',
    },
    {
      icon: <img src="images/tyrCase/postItImages/postItImage5.svg" alt="Tyr case" />,
      paragraph:
        'Cutting employee training time by 30%, the usability-focused redesign allowed experienced employees to concentrate on their tasks, improving overall company efficiency.',
    },
    {
      icon: <img src="images/tyrCase/postItImages/postItImage6.svg" alt="Tyr case" />,
      paragraph:
        'Accomplished a 25% reduction in load time by minimizing form fields and removing duplicates, which previously led to double entries and extended processing time',
    },
  ];

  return (
    <div className="max-w-[1075px]  w-full mx-auto">
      <img src="images/tyrCase/cover.svg" alt="Tyr case" className="rounded-[32px] w-full" />
      <CaseHeader
        title="Improving usability to help businesses save time and money"
        role={caseHeaderData.role}
        teamStructure={caseHeaderData.teamStructure}
        researchMethods={caseHeaderData.researchMethods}
        platform={caseHeaderData.platform}
        timeFrame={caseHeaderData.timeFrame}
        tools={caseHeaderData.tools}
      />
      <img src="images/tyrCase/2.svg" alt="Tyr case" className="mt-12 mb-16 w-full" />

      {/* Overview */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700' }}>
        Overview
      </p>
      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        TYR is a company that specializes in commodity trading. This means they focus on buying and selling
        raw materials, like oil, metals, and agricultural products.
      </p>
      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        Their current system was unable to meet the company&apos;s growth needs and was causing conflicts, so
        they recognized the need to improve the user experience.
      </p>

      <div className="flex flex-col mt-20">
        <p className="jakartaFont" style={{ fontSize: '21px', fontWeight: '700' }}>
          Objectives
        </p>
        <PostitGrid items={items} />
      </div>

      {/* Challenge */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '70px' }}>
        The challenge
      </p>
      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        TYR faced major issues with their system, including slow response times due to high data volume, a
        steep learning curve for new employees, and information duplication. Forms were too long and
        redundant, workflows were confusing, and sequential use by traders and administrators led to frequent
        errors, requiring the owners intervention.
      </p>

      <div className="flex flex-col mt-10 bg-[#F5F5FF] rounded-[20px] p-6 mx-auto w-full">
        <p className="jakartaFont" style={{ fontSize: '19px', fontWeight: '600', color: '#5E2FD3' }}>
          Hypothesis{' '}
        </p>
        <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
          The current system is not intuitively designed, leading users to perform tasks outside of the
          system, causing errors due to information duplication, and making it take too hard for new users to
          learn how to use the system
        </p>
      </div>

      {/* Research */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '70px' }}>
        Research
      </p>
      <p className="jakartaFont" style={{ fontSize: '18px', fontWeight: '600', marginTop: '20px' }}>
        Why we did this investigation?
      </p>
      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        To uncover the root causes of the system’s issues, I proposed and led a research effort that included
        user interviews and a quick heuristic evaluation.
      </p>
      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        Given the short timeline for the redesign—just one month—I designed a focused research plan to
        maximize the time available. We chose user interviews and a brief heuristic analysis to gather as many
        insights as possible and efficiently jumpstart the redesign process.
      </p>
      <img src="images/tyrCase/1.svg" alt="Tyr case" className="mt-[50px] w-full" />
      <img src="images/tyrCase/3.svg" alt="Tyr case" className="mt-[30px] w-full" />

      {/* Insights */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '70px' }}>
        Insights
      </p>
      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        The company’s current system had significant issues with unifying its workflows. If a trader wanted to
        initiate a purchase order, the process had to be done from memory due to the lack of a specific
        sequence or order. The same problem occurred with accessing different sections; there was no clear
        menu for navigating the system, making it difficult to find anything.
      </p>

      <div className="flex flex-col mt-10 bg-[#F5F5FF] rounded-[20px] p-6 mx-auto">
        <p className="jakartaFont" style={{ fontSize: '19px', fontWeight: '600', color: '#5E2FD3' }}>
          Two user types
        </p>
        <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
          Traders, who buy and sell commodities, and the admins, who manage the administrative part of those
          purchases and sales, such as invoicing, commission payments, and tasks.
        </p>
      </div>

      <div className="flex flex-col mt-6 bg-[#F5F5FF] rounded-[20px] p-6 mx-auto">
        <p className="jakartaFont" style={{ fontSize: '19px', fontWeight: '600', color: '#5E2FD3' }}>
          Main challenges
        </p>
        <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
          All the tools required to perform tasks didn’t distinguish between user types; everything was mixed
          together on the same screen. This made it difficult to find specific items and took too much time to
          complete tasks that needed to be done more than once a day, among many other issues that needed to
          be tackled.
        </p>
      </div>

      <img src="images/tyrCase/4.svg" alt="Tyr case" className="mt-[50px] w-full" />

      {/*Solutions focused */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '70px' }}>
        Solutions focused on those insights
      </p>
      <img src="images/tyrCase/5.svg" alt="Tyr case" className="mt-[30px] w-full" />
      <img src="images/tyrCase/6.svg" alt="Tyr case" className="mt-[110px] w-full" />

      {/* Reflections */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '60px' }}>
        Reflections{' '}
      </p>

      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        What I’d do differently next time.
      </p>

      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        Each project needs to have a story: the first version of this portfolio and each case study had long
        texts and pictures with no context, so I decided to
      </p>

      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
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

      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        Be insight- not process-driven. My first version of this case study was full of unnecessary text at
        this stage instead of tying everything into the bigger question- “so how does this fit into the bigger
        picture”? Hence, I cut down the copy by more than 60% and focused on the major points of my project. 
      </p>

      <p className="jakartaFont" style={{ fontSize: '17px', fontWeight: '400', marginTop: '20px' }}>
        {`You didn’t fail, you just found 100 ways that didn’t work. From noticing mistakes in my UI to
        uncovering more foundational UX problems in my app, I’m thankful to have constantly asked for feedback
        from my peers and my mentor.  Even small things should have logic. There should be a reason for
        selecting a detailed UI based on questions such as  "Why did you design pagination instead of choosing
        infinite vertical scrolling?" Or "How many lists will you show up to?". During my collaboration with
        developers, I was often asked, "What happens next when I click this UI?". This experience became an
        opportunity for me to develop an eye for intuitive and easy-to-use UI as a designer, apart from only
        focusing on aesthetic design.`}
      </p>

      <img src="images/tyrCase/7.png" alt="Tyr case" className="mt-[100px] w-full" />
    </div>
  );
};

export default TyrCase;
