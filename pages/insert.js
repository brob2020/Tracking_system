import React, { useEffect, useState } from "react";
import Router from "next/router";
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
  FormHelperText,
  Icon,
  Typography,
} from "@material-ui/core";
import Loader from "../components/Loader";
import axios from "axios";
import { toast } from "react-toastify";

import useForm from "../use js/useForm";
import validate from "../use js/validate";

import { Send, Delete, UpdateOutlined } from "@material-ui/icons";
import styles from "../styles/Home.module.css";

const Insert = (lastId) => {
  const [good, setGood] = useState(true);
  const [notify, setNotify] = useState(false);
  const [dispIn, setDispIn] = useState(false);
  const [account, setAccount] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  //const id = String(lastId).split("TRCK");
  //console.log(String(lastId).split("TRCK"));
  const [id, setId] = useState("");

  const ClearForm = (e) => {
    console.log("clear");
    Router.reload(window.location.pathname);
  };
  const handleAccount = (event) => {
    setAccount(event.target.value);
    values.Account = event.target.value;
  };
  const handleType = (event) => {
    setType(event.target.value);
    values.Type = event.target.value;
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
    values.Status = event.target.value;
  };
  const HandleNotify = () => {
    setNotify(!notify);
    console.log(notify);
  };

  const HandleSubmit = () => {
    console.log("clique ");
  };
  // send data to database
  async function submit(e) {
    e.preventDefault();
    //IncreID();
    //UpdateOutlined();
    values.Account = account;
    values.Type = type;
    setId(142587 + 1);
    values.Status = status;
    values.Notification = notify;
    var config = {
      method: "post",
      url: "api/sendData",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);

      if (response.status == 200) {
        setGood(true);
        setDispIn(true);

        toast.success("fellicition");
        console.log(JSON.stringify(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  /*function UpdateOutlined() {
    var config = {
      method: "get",
      url: "api/sendData",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    axios(config)
      .then(function (response) {
        const datas = response.data;
        const lastId = datas.data[datas.data.length - 1].Incident;
        console.log(lastId);
        values.Incident = lastId + 1;
        const [incident, setIncident] = useState(lastId + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  }*/

  return (
    <div className={styles.container}>
      <div>
        {" "}
        <h2> Data entry</h2>
        {dispIn ? (
          <TextField
            name="Incident #"
            variant="outlined"
            disabled={true}
            value={`TRK ${id}`}
            fullWidth={true}
          />
        ) : (
          " "
        )}
      </div>
      {!good ? <Loader /> : " "}
      <form onSubmit={submit} noValidate>
        <Grid container spacing={3} className={styles.grid}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="Account " required={true}>
                Account
              </InputLabel>
              <Select
                error={errors.Account && true}
                name="Account "
                required={true}
                labelId="Account"
                label="Account"
                value={account}
                onChange={handleAccount}
                required={true}
                disabled={dispIn}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Xpps / Xps"}>Xpps/Xps</MenuItem>
                <MenuItem value={"LNW"}>LNW</MenuItem>
                <MenuItem value={"XOG"}>XOG</MenuItem>
                <MenuItem value={"EPS"}>EPS</MenuItem>
              </Select>
              {errors.Account ? (
                <FormHelperText error={true}>{errors.Account}</FormHelperText>
              ) : (
                " "
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="Type">Type </InputLabel>

              <Select
                error={errors.Type && true}
                labelId="Type"
                required={true}
                label="Type"
                value={type}
                onChange={handleType}
                disabled={dispIn}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Break/fix"}>Break/fix</MenuItem>
                <MenuItem value={"Supplies"}>Supplies</MenuItem>
              </Select>
              {errors.Type ? (
                <FormHelperText error={true}>{errors.Type}</FormHelperText>
              ) : (
                " "
              )}
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="Serial_Number"
              required={true}
              helperText={errors.Serial_Number}
              error={errors.Serial_Number && true}
              onChange={handleChange}
              label="Serial Number "
              variant="outlined"
              fullWidth={true}
              disabled={dispIn}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Name"
              name="Name"
              required={true}
              onChange={handleChange}
              helperText={errors.Name}
              error={errors.Name && true}
              variant="outlined"
              fullWidth={true}
              disabled={dispIn}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              onChange={handleChange}
              label="Address"
              name="Address"
              variant="outlined"
              fullWidth={true}
              disabled={dispIn}
            />
          </Grid>
          <Grid item xs={3}>
            {" "}
          </Grid>

          <Grid item xs={4}>
            <TextField
              onChange={handleChange}
              name="PhoneNumber"
              label="Phone Number "
              variant="outlined"
              fullWidth={true}
              required={true}
              helperText={errors.PhoneNumber}
              error={errors.PhoneNumber && true}
              disabled={dispIn}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="Description"
              name="Description"
              onChange={handleChange}
              helperText={errors.Description}
              error={errors.Description && true}
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              fullWidth={true}
              disabled={dispIn}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              name="User_Name"
              onChange={handleChange}
              label="User Name"
              variant="outlined"
              fullWidth={true}
              disabled={dispIn}
              helperText={errors.User_Name}
              error={errors.User_Name && true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="Type">Status </InputLabel>
              <Select
                error={errors.Status && true}
                labelId="status"
                required={true}
                label="status"
                value={status}
                defaultValue="open"
                onChange={handleStatus}
                disabled={dispIn}
              >
                <MenuItem value="Open"></MenuItem>
                <MenuItem value={"Open"}>Open</MenuItem>
                <MenuItem value={"Picked"}>Picked</MenuItem>
                <MenuItem value={"Close"}>Close</MenuItem>
                <MenuItem value={"Escalate"}>Escalate</MenuItem>
              </Select>
              {errors.Status ? (
                <FormHelperText error={true}>{errors.Status}</FormHelperText>
              ) : (
                " "
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              className={styles.button}
              endIcon={<Send />}
              /* onClick={() => {
                setGood(false);
              }}*/
              disabled={dispIn}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Checkbox
              color="primary"
              onChange={HandleNotify}
              disabled={dispIn}
            />
            {notify
              ? "you will recive Notification for this"
              : " Notify me of any update"}
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Delete />}
              onClick={ClearForm}
              type="reset"
            >
              New Entry
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Insert;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/sendData");
  const datas = await res.json();
  const lastId = datas.data[datas.data.length - 1].Incident;
  console.log(lastId);

  //By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      lastId,
    },
  };
}
