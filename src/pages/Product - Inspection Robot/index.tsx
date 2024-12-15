import { lazy } from "react";
import MiddleBlockContent from "../../content/product/inspection_robot/MiddleBlockContent.json";
import AboutContent from "../../content/product/inspection_robot/AboutContent.json";
import ControlMonitorContent from "../../content/product/inspection_robot/ControlMonitorContent.json";
import DigitalTwinContent from "../../content/product/inspection_robot/DigitalTwinContent.json";
import AIInspectionContent from "../../content/product/inspection_robot/AIInspectionContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        // bgVideo={MiddleBlockContent.bgVideo}
        bgImage={MiddleBlockContent.bgImage}
        scrollto="about"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        // video="01 - bim model overview-1.mp4"
        // icon="proj-w0405-scene1.svg"
        // pngicon="proj-w0405-scene1.png"
        video="1_allinone.mp4"
        id="about"
      />
      <ContentBlock
        direction="left"
        title={ControlMonitorContent.title}
        content={ControlMonitorContent.text}
        section={ControlMonitorContent.section}
        video="2_control&mission.mp4"
        id="mission"
      />
      <ContentBlock
        direction="right"
        title={DigitalTwinContent.title}
        content={DigitalTwinContent.text}
        video="3_digital_twin.mp4"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={AIInspectionContent.title}
        content={AIInspectionContent.text}
        section={AIInspectionContent.section}
        video="4_ai_inspection.mp4"
        id="mission"
      />
      {/* <ContentBlock
        direction="right"
        title={ProductContent.title}
        content={ProductContent.text}
        video="01 - bim model overview-1.mp4"
        id="product"
      /> */}
    </Container>
  );
};

export default Home;
