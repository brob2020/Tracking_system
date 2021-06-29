import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import Link from "next/link";

const icrement = ({ datas }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const SearchById = () => {
    console.log(id);
  };

  return (
    <div className="card">
      <TextField
        id="Search by Tracking"
        name="Search "
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        label="Search by Tracking"
        variant="outlined"
      />
      <div>
        <ul className="grid">
          <div>
            {datas.data
              .filter((data) => {
                if (searchTerm == "") {
                  return data;
                } else if (
                  data.Incident.toLowerCase().includes(
                    searchTerm.toLocaleLowerCase()
                  )
                ) {
                  return data;
                }
              })
              .map((data) => (
                <Link href={"/Modelisation/ " + data._id} key={data._id}>
                  <a>
                    <li className="card">
                      <h3>Incident #</h3>
                      {data.Incident}
                      <h3> Requested By : {data.Name} </h3>
                      <h3>Account :</h3> {data.Account}
                      <h3>Serial Number :</h3> {data.Serial_Number}
                      <h3>Description :</h3> {data.Description}
                      <h4> Status : </h4> {data.Status}
                    </li>
                  </a>
                </Link>
              ))}
          </div>
        </ul>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/sendData");
  const datas = await res.json();
  console.log(datas.data[1]);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      datas,
    },
  };
}

export default icrement;
