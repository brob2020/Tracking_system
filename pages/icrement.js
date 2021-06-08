import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

const icrement = ({ datas }) => {
  const [searchTerm, setSearchTerm] = useState('');

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
                if (searchTerm == '') {
                  console.log(data.Incident == undefined);
                  return data;
                } else if (
                  data.Incident.toLowerCase().includes(
                    searchTerm.toLocaleLowerCase(),
                  )
                ) {
                  return data;
                }
              })
              .map((data) => (
                <li className="card">
                  <h3>Incident #</h3>
                  {data.Incident}
                  <h3> Requested By</h3> {data.Name}
                  {data.Account}
                  {data.Serial_Number}
                  {data.Description}
                </li>
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
  const res = await fetch('http://localhost:3000/api/sendData');
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
