import React from "react";

/// let tell the broswer how many page he wil load

export const getStaticPaths = async () => {
  //const res = await fetch("http://localhost:3000/api/sendData");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

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
const dataDetails = ({ data }) => {
  return (
    <div>
      <h1>{data.Incident} </h1>
      <p>{data.Account}</p>
      <p>{data.Name}</p>
      <p>{data.Adress}</p>
    </div>
  );
};
export default dataDetails;
