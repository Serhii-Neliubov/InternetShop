import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="125" r="125" />
    <rect x="0" y="269" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="313" rx="10" ry="10" width="277" height="88" />
    <rect x="151" y="413" rx="10" ry="10" width="125" height="36" />
    <rect x="0" y="420" rx="10" ry="10" width="125" height="24" />
  </ContentLoader>
);

export default Skeleton;
