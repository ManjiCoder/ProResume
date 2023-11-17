import tw from 'tailwind-styled-components';
import { Role } from '../styles/commonStyles';

function HeroSection() {
  return (
    <Hero>
      <div className="flex items-center">
        <ProfileImg
          src="https://lh3.googleusercontent.com/a/ACg8ocKi6I9DcT-yGUOL3YQ_AzoljCj9HKPYwtMQXaGPri71eg=s83-c-mo"
          alt="profile-photo"
          loading="lazy"
        />
        <ProfileDesc>
          <Name>Naresh Dhondu</Name>
          <Role>Aspiring React Developer</Role>
        </ProfileDesc>
      </div>
      <section className="print:hidden grid gap-2 grid-cols-2">
        <IconWrapper target="_blank" href="tel:+917517329166">
          <i className="fa-solid fa-phone-volume fa-fade" />
        </IconWrapper>
        <IconWrapper target="_blank" href="mailto:nareshdhondu.dev@gmail.com">
          <i className="fa-solid fa-envelope  fa-lg"></i>
        </IconWrapper>
        <IconWrapper target="_blank" href="https://github.com/ManjiCoder">
          <i className="fa-brands fa-github  fa-lg"></i>
        </IconWrapper>
        <IconWrapper
          target="_blank"
          href="https://www.linkedin.com/in/naresh-dhondu-33213a263"
        >
          <i className="fa-brands fa-linkedin  fa-lg"></i>
        </IconWrapper>
      </section>
    </Hero>
  );
}

export default HeroSection;
const Hero = tw.header`pt-2 flex sticky print:static justify-between top-0 z-50 items-center`;
const ProfileImg = tw.img`rounded-full shadow-md border border-blue-800 mb-1.5`;
const ProfileDesc = tw.div`m-3`;
const IconWrapper = tw.a`h-7 grid place-items-center rounded-full shadow-md p-1`;
const Name = tw.h1`text-3xl font-semibold`;
