import { SEO } from "@/components";
import { AboutContainer } from "@/modules/About";
import { FC } from "react";

const Container: FC = () => {
  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about our dedicated team of healthcare professionals and our mission to provide quality care."
        keywords="Healthcare Team, Care Mission, Professional Nurses, Care Philosophy"
        ogDescription="Dedicated healthcare professionals committed to quality care."
      />
      <AboutContainer />
    </div>
  );
};

export default Container;
