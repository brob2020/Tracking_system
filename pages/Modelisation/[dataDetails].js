import React from "react";

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/data/${context.params.dataDetails.trim()}`
  );
  const data = await res.json();
  return {
    props: {
      caseDetails: data.data,
    },
  };
}

const dataDetails = ({ caseDetails }) => {
  return (
    <div>
      {caseDetails && (
        <>
          <h1>{caseDetails.Account}</h1>
          <p>{caseDetails.Description}</p>
          <p>{caseDetails.PhoneNumber}</p>
          <p>{caseDetails.Serial_Number}</p>
        </>
      )}
    </div>
  );
};

export default dataDetails;
