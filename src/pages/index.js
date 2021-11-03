import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation.tsx";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Posts />
    </Layout>
  );
};

export default Home;
