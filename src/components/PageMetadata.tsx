import React from "react";
import { Helmet } from "react-helmet";

interface PageMetadataProps {
  title: string;
}

const PageMetadata: React.FC<PageMetadataProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageMetadata;
