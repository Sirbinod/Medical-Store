import React from "react";
import SectionTitle from "./sectionTitle";
import TextGrid from "./textGrid";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const About = () => {
  return (
    <>
      <SectionTitle />
      <div className='about-mission-area'>
        <div className='container'>
          <div className='row'>
            <TextGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
