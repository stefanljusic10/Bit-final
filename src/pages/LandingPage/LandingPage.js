import React, { useContext } from "react";
import DataContext from "../../utils.js/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";
import "./landingPage.scss";

const LandingPage = () => {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <>
      <div className="candidate-card-container">
        {data.map((e) => {
          return <CandidateCard candidate={e} />;
        })}
      </div>
    </>
  );
};

export default LandingPage;