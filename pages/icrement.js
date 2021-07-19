import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  Checkbox,
  Icon,
  Typography,
} from "@material-ui/core";

const icrement = ({ datas }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtValue, setFiltValue] = useState("Incident");

  const Filter = (event) => {
    setFiltValue(event.target.value);

    //caseDetails.Status = event.target.value;
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id={`Search by ${filtValue}`}
            name="Search "
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            label={`Search by ${filtValue}`}
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth={true}>
            <InputLabel id="Searh Value ">Searh Value </InputLabel>
            <Select
              labelId="Searh Value "
              required={true}
              label="Searh Value "
              onChange={Filter}
              value={filtValue}
            >
              <MenuItem value=""></MenuItem>

              <MenuItem value={"Incident"}>Incident</MenuItem>
              <MenuItem value={"Serial_Number"}>Serial_Number</MenuItem>
              <MenuItem value={"Status"}>Status</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <div className="card">
        <div>
          <ul className="grid">
            <div>
              {datas.data
                .filter((data) => {
                  if (searchTerm == "") {
                    return data;
                  } else if (
                    filtValue == "Incident" &&
                    data.Incident.toString()
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return data;
                  } else if (
                    filtValue == "Serial_Number" &&
                    data.Serial_Number.toString()
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return data;
                  } else if (
                    filtValue == "Name" &&
                    data.Name.toString()
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return data;
                  } else if (
                    filtValue == "Status" &&
                    data.Status.toString()
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
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
    </>
  );
};
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/sendData");
  const datas = await res.json();
  //console.log(datas.data[1]);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      datas,
    },
  };
}

export default icrement;
