import React from "react";

/// let tell the broswer how many page he wil load

/*export const getStaticPaths = async () => {
  // const res = await fetch("http://localhost:3000/api/data");
  const res = await fetch("https://jsonplaceholder.tyicode.com/users");
  const datas = await res.json();

  return {
    paths: { params: { id: "TRCK26020102" } },
    fallback: false,
  };
};*/
/*
export const getStaticProps = async (context) => {
  const Incident = context.params.id;
  const res = await fetch(`http://localhost:3000/api/sendData/${Incident}`);
  const data = await res.json();
  return {
    props: { data: data },
  };
};*/
const dataDetails = () => {
  return (
    <div>
      <h1>data </h1>
    </div>
  );
};
export default dataDetails;
