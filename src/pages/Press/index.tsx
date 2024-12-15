import { lazy } from "react";

import ContentBlock_20241104 from "../../content/press/ContentBlock_20241104.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={ContentBlock_20241104.title}
        content={ContentBlock_20241104.text}
        icon="product-launch.svg"
        id="mission"
      />
    </Container>
  );
};

export default Home;
