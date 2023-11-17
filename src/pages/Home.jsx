import tw from 'tailwind-styled-components';
import HeroSection from '../components/HeroSection';

const skills = [
  'React JS',
  'Next JS',
  'Redux',
  'React Native',
  'Node JS',
  'Express JS',
  'MongoDB',
  'Javascript',
  'Typescript',
  'Tailwind CSS',
  'REST API',
  'Git',
  'Problem Solving',
];

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <VrLine>
        {/* Profile Info */}
        <SectionWrapper>
          <IconWrapper>
            <img
              className="h-6 w-6 rounded-full"
              src="/user.png"
              alt="inscription"
            />
          </IconWrapper>

          <ContentWrapper>
            <HeadingPrimary>Profile</HeadingPrimary>
            <p className="text-sm">
              Highly skilled in React, MongoDB, Express.js and Node.js web
              development. Proficient in database design, server-side
              development, and Committed to writing clean, efficient, and
              maintainable code as a passionate developer.
            </p>
          </ContentWrapper>
        </SectionWrapper>

        {/* Work Experience */}
        <SectionWrapper>
          <IconWrapper>
            {/* <i className="fa-solid fa-briefcase fa-lg text-white"></i> */}
            <img
              className="h-6 w-6"
              src="https://img.icons8.com/fluency-systems-filled/96/ffffff/business.png"
              alt="business"
            />
          </IconWrapper>

          <ContentWrapper>
            <HeadingPrimary>Work Experience</HeadingPrimary>
            <Wrapper>
              <Bullet />
              <HeadingSecondary>Sahu Technologies </HeadingSecondary>
            </Wrapper>
            <SubHeading>Web Developer - [2 months]</SubHeading>
            <ul className="list-disc relative left-4 text-sm">
              <li>Internship focused on bug fixing and app enhancement.</li>
              <li>
                Utilized React.js and Tailwind CSS to address issues and improve
                the user interface.
              </li>
            </ul>
          </ContentWrapper>
        </SectionWrapper>

        {/* Projects */}
        <SectionWrapper>
          <IconWrapper>
            <img
              className="h-6 w-6"
              src="https://img.icons8.com/ios/100/ffffff/goal--v1.png"
              alt="goal--v1"
            />
          </IconWrapper>
          <ContentWrapper>
            <HeadingPrimary>Projects</HeadingPrimary>

            <Wrapper>
              <Bullet />
              <HeadingSecondary>Coding-Journal</HeadingSecondary>
            </Wrapper>
            <ul className="list-disc relative left-4 text-sm">
              <li>
                Elevate your coding journey with our Coding Journal webapp.
                Seamlessly track progress.
              </li>
              <li>
                <b>Skill</b>: Next.js, React.js, Redux, Tailwind CSS, MongoDB,
                JSON Web Token(JWT),API,SSR.
              </li>
              <li>
                <a
                  href="https://coding-journal-manjicoder.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700"
                >
                  https://coding-journal-manjicoder.vercel.app
                </a>
              </li>
            </ul>

            <Wrapper>
              <Bullet />
              <HeadingSecondary>Uber-Clone</HeadingSecondary>
            </Wrapper>
            <ul className="list-disc relative left-4 text-sm">
              <li>
                Developed an Uber-Clone project, mastering Map integration in
                React. Acquired valuable skills in handling location-based
                features and enhancing user experience.
              </li>
              <li>
                <b>Skill</b>: Nextjs, Reactjs, Tailwind CSS, Firebase, MapBox,
                Style Component
              </li>
              <li>
                <a
                  href="https://uber-next-app-manjicoder.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700"
                >
                  https://uber-next-app-manjicoder.vercel.app
                </a>
              </li>
            </ul>
            <Wrapper>
              <Bullet />
              <HeadingSecondary>NewsMonkey</HeadingSecondary>
            </Wrapper>
            <ul className="list-disc relative left-4 text-sm">
              <li>
                Stay informed with NewsMonkey app, accessing breaking news and
                trending stories at your fingertips. Explore a wide range of
                topics, from politics to entertainment, with our user-friendly
                and intuitive app design.
              </li>
              <li>
                <b>Skill</b>: React Native, React Navigation, Async-Storage,
                REST-API, NativeWind CSS.
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/u/2/folders/1f_HwRlUWVla2GSIZsMymP0WTWmkx2_VC"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700"
                >
                  NewsMonkey.app - (Google Drive)
                </a>
              </li>
            </ul>
          </ContentWrapper>
        </SectionWrapper>

        {/* Education */}
        <SectionWrapper>
          <IconWrapper>
            <img
              className="h-5 w-5"
              src="https://img.icons8.com/ios-glyphs/90/ffffff/graduation-cap--v1.png"
              alt="graduation-cap--v1"
            />
          </IconWrapper>
          <ContentWrapper>
            <HeadingPrimary>Education</HeadingPrimary>

            <Wrapper>
              <Bullet />
              <HeadingSecondary>
                HSC - Science <b>(2018 - 2020)</b>
              </HeadingSecondary>
            </Wrapper>
            <p className="text-base">
              University of Mumbai Marks - <b>60%</b>
            </p>

            <Wrapper>
              <Bullet />
              <HeadingSecondary>
                B.E, EXTC <b>[2020 - 2024]</b>
              </HeadingSecondary>
            </Wrapper>
            <p className="text-base">University of Mumbai Marks - Appearing</p>
          </ContentWrapper>
        </SectionWrapper>

        {/* Skill */}
        <SectionWrapper>
          <IconWrapper>
            <img
              className="h-6 w-6"
              src="https://img.icons8.com/ios-filled/50/ffffff/flash-on.png"
              alt="flash-on"
            />
          </IconWrapper>
          <ContentWrapper>
            <HeadingPrimary>Skills</HeadingPrimary>
            {skills.map((skill) => (
              <Wrapper key={skill}>
                <Bullet />
                <SubHeading>{skill}</SubHeading>
              </Wrapper>
            ))}

            {/* <div className="h-2 bg-[linear-gradient(to_right,black_70%,whitesmoke_10%)] border max-w-xs rounded-md"></div> */}
          </ContentWrapper>
        </SectionWrapper>

        {/* Language */}
        <SectionWrapper>
          <IconWrapper>
            <img
              className="h-6 w-6"
              src="https://img.icons8.com/external-glyph-zulfa-mahendra/96/ffffff/external-language-online-study-glyph-zulfa-mahendra.png"
              alt="google-translate"
            />
          </IconWrapper>
          <ContentWrapper>
            <HeadingPrimary>Languages</HeadingPrimary>

            <Wrapper>
              <Bullet />
              <SubHeading>English</SubHeading>
            </Wrapper>
            <Wrapper>
              <Bullet />
              <SubHeading>Hindi</SubHeading>
            </Wrapper>
          </ContentWrapper>
        </SectionWrapper>

        {/* Achievements */}
        <SectionWrapper>
          <IconWrapper>
            <img
              className="h-5 w-5"
              src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-achievement-basic-ui-elements-2.5-sbts2018-solid-sbts2018.png"
              alt="user-male-circle"
            />
          </IconWrapper>
          <ContentWrapper>
            <HeadingPrimary>Achievements</HeadingPrimary>

            <Wrapper>
              <Bullet />
              <SubHeading>
                <a
                  href="https://auth.geeksforgeeks.org/user/nareshdhondu"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  GeeksForGeeks -
                  <img
                    src="https://media.geeksforgeeks.org/auth-dashboard-uploads/badge%402x.png"
                    alt=""
                    className="h-6"
                  />
                  <b>
                    14<sup>th</sup> Rank
                  </b>
                </a>
              </SubHeading>
            </Wrapper>
            <Wrapper>
              <Bullet />
              <SubHeading>
                <a
                  href="https://auth.geeksforgeeks.org/user/nareshdhondu"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  CSS Battle -
                  <img
                    src="https://media.geeksforgeeks.org/auth-dashboard-uploads/badge%402x.png"
                    alt=""
                    className="h-6"
                  />
                  <b>
                    386<sup>th</sup> Rank
                  </b>
                </a>
              </SubHeading>
            </Wrapper>
          </ContentWrapper>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper>
          <IconWrapper>
            <i className="fa-solid text-white fa-phone-volume" />
          </IconWrapper>
          <ContentWrapper>
            <HeadingPrimary>Contact</HeadingPrimary>

            <Wrapper>
              <Bullet />
              <SubHeading>
                Email
                <a
                  href="mailto:nareshdhondu.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm font-semibold italic"
                >
                  nareshdhondu.dev@gmail.com
                </a>
              </SubHeading>
            </Wrapper>

            <Wrapper>
              <Bullet />
              <SubHeading>
                Address
                <a
                  href="mailto:nareshdhondu.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm font-semibold"
                >
                  Ambarnath - (W)
                </a>
              </SubHeading>
            </Wrapper>

            <Wrapper>
              <Bullet />
              <SubHeading>
                Phone
                <a
                  href="tel:+917517329166"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm font-semibold"
                >
                  7517329166
                </a>
              </SubHeading>
            </Wrapper>

            <Wrapper>
              <Bullet />
              <SubHeading>
                GitHub
                <a
                  href="https://github.com/ManjiCoder"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm font-semibold"
                >
                  https://github.com/ManjiCoder
                </a>
              </SubHeading>
            </Wrapper>

            <Wrapper>
              <Bullet />
              <SubHeading>
                LinkedIn
                <a
                  href="https://www.linkedin.com/in/naresh-dhondu-33213a263"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-xs font-semibold"
                >
                  https://www.linkedin.com/in/naresh-dhondu-33213a263
                </a>
              </SubHeading>
            </Wrapper>
          </ContentWrapper>
        </SectionWrapper>
      </VrLine>
    </Container>
  );
}

const Container = tw.main`px-4 pb-4 print:p-0 min-h-screen`;
const VrLine = tw.div`min-h-screen pb-3 flex flex-col gap-5 w-0.5 ml-10 rounded-sm bg-slate-500 z-10`;
const SectionWrapper = tw.section`flex relative top-3 -left-3 w-[80vw]`;
const IconWrapper = tw.div`h-8 w-8 relative z-10  ring-2 ring-white right-[3px] shadow-sm  bg-black grid place-items-center rounded-full`;
const ContentWrapper = tw.div`w-11/12 px-2 flex flex-col gap-1`;
const Bullet = tw.span`h-3 w-3 bg-black rounded-full z-10 ml-[3px] ring-2 ring-white`;
const HeadingPrimary = tw.h1`text-2xl font-medium`;
const HeadingSecondary = tw.h2`text-lg font-semibold`;
const SubHeading = tw.h3`font-medium`;
const Wrapper = tw.div`flex -ml-9 items-center space-x-5`;
