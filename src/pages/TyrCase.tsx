import PostitGrid from 'components/aboutMe/PostitGrid';
import Typo from 'components/Typo';

const TyrCase = () => {
  const items = [
    {
      header: <img src="images/postItImages/postItImage1.svg" alt="Tyr case" />,
      paragraph:
        'Identify the complete flow of the system and identify where the connections happened with the different users',
    },
    {
      header: <img src="images/postItImages/postItImage2.svg" alt="Tyr case" />,
      paragraph: `Improve the system's usability so that it is easily understandable for both existing and new users`,
    },

    {
      header: <img src="images/postItImages/postItImage3.svg" alt="Tyr case" />,
      paragraph: 'Improve the design of the  forms to avoid information duplication and reduce errors',
    },

    {
      header: <img src="images/postItImages/postItImage4.svg" alt="Tyr case" />,
      paragraph:
        'Achieved a 70% reduction in duplication errors. The design incorporated mandatory fields and blocked certain fields from being modified by specific user types',
    },
    {
      header: <img src="images/postItImages/postItImage5.svg" alt="Tyr case" />,
      paragraph:
        'Reduction in employee training time: by focusing on usability, the redesign allowed experienced employees to concentrate on their tasks, improving overall company efficiency.',
    },
    {
      header: <img src="images/postItImages/postItImage6.svg" alt="Tyr case" />,
      paragraph:
        'We could make a 25% reduction in load time  by reducing the number of form fields and eliminating duplicates, which previously caused double entries and extended processing time.',
    },
  ];

  return (
    <div>
      <img src="images/tyrCase/cover.svg" alt="Tyr case" />
      <img src="images/tyrCase/0.svg" alt="Tyr case" style={{ margin: '50px 0 70px 0' }} />
      <img src="images/tyrCase/2.svg" alt="Tyr case" style={{ margin: '50px 0 70px 0' }} />

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

      <div className="flex flex-col mt-10 bg-[#F5F5FF] rounded-[20px] p-6 mx-auto">
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
        To understand the reasons behind the issues this system had, I conducted a research which included
        user interviews and a fast heuristic evaluation. The time we could dedicate to do the redesign process
        was quite short, just one month. Therefore, we decided to conduct a focused research effort to
        maximize the time available. This is why we chose these two methodologies to extract as many insights
        as possible so we could get started on the work.
      </p>
      <img src="images/tyrCase/1.svg" alt="Tyr case" style={{ marginTop: '50px' }} />
      <img src="images/tyrCase/3.svg" alt="Tyr case" style={{ marginTop: '30px' }} />

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

      <img src="images/tyrCase/4.svg" alt="Tyr case" style={{ marginTop: '50px' }} />

      {/*Solutions focused */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '70px' }}>
        Solutions focused on those insights
      </p>
      <img src="images/tyrCase/5.svg" alt="Tyr case" style={{ marginTop: '30px' }} />
      <img src="images/tyrCase/6.svg" alt="Tyr case" style={{ marginTop: '110px' }} />

      {/* Reflections */}
      <p className="jakartaFont" style={{ fontSize: '40px', fontWeight: '700', marginTop: '60px' }}>
        Reflections{' '}
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
      <img src="images/tyrCase/7.png" alt="Tyr case" style={{ marginTop: '100px' }} />
    </div>
  );
};

export default TyrCase;
