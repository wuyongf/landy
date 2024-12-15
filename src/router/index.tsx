import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
      {routes.map((routeItem) => {
          const Component = lazy(() => import(`../pages/${routeItem.component}`));
          return routeItem.path.map((p) => (
            <Route key={`${routeItem.component}-${p}`} path={p} element={<Component />} />
          ));
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
