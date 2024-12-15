const routes = [
  {
    path: [`${process.env.PUBLIC_URL}/`, `${process.env.PUBLIC_URL}/home`],
    component: "Home",
  },
  {
    path: [`${process.env.PUBLIC_URL}/product/inspection-robot`],
    component: "Product - Inspection Robot",
  },
  {
    path: [`${process.env.PUBLIC_URL}/product/dual-robot`],
    component: "Product - Dual Robot",
  },
  {
    path: [`${process.env.PUBLIC_URL}/press`],
    component: "Press",
  },
  {
    path: [`${process.env.PUBLIC_URL}/publication-and-patent`],
    component: "Publication & Patent",
  },
];

export default routes;
