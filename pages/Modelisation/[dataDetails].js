import React from 'react';

/// let tell the broswer how many page he wil load

/*
export const getStaticPaths = async () => {
  //const res = await fetch("http://localhost:3000/api/sendData");
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  /*
  const paths = data.map((ninja) => {
    //console.log(data.Incident.toLowerCase());
    return {
      params: { id: ninja.id.toString() },
    };
  });
  //console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3000/api/sendData/${id}`);
  const data = await res.json();
  return {
    props: { data: data },
  };
};
*/

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/data/${context.params.dataDetails.trim()}`,
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
