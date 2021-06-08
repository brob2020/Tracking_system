import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  Icon,
  Typography,
} from "@material-ui/core";
import Loader from "../components/Loader";
import axios from "axios";
import { toast } from "react-toastify";

import useForm from "../use js/useForm";
import validate from "../use js/validate";

import { Send, Delete } from "@material-ui/icons";
import styles from "../styles/Home.module.css";

const Insert = () => {
  const [good, setGood] = useState(true);
  const [account, setAccount] = useState("");
  const [type, setType] = useState("");
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  const [id, setId] = useState(26020101)
  const [incident, setIncident] = useState("TRCK" + String(id))

  const IncreID = () => {
    setId(id + 1)
    console.log(String(id).length)
    setIncident("TRCK" + String(id));
  }
  const handleAccount = (event) => {
    setAccount(event.target.value);
    console.log(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
    console.log(event.target.value);
  };

  const HandleSubmit = () => {
    console.log("clique ");
  };
  // send data to database
  async function submit(e) {
    e.preventDefault();
    IncreID();
    values.Account = account;
    values.Type = type;
    values.Incident = incident;
    console.log(values.Account);
    console.log(values.Type);
    console.log("test");
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

        toast.success("fellicition");
        console.log(JSON.stringify(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
  /*useEffect(() => {
    var config = {
      method: 'post',
      url: 'api/sendData',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  });*/

  return (
    <div className={styles.container}>
      <div>
        {" "}
        <h2> Data entry</h2>
        <TextField
          name="Incident #"
          variant="outlined"
          disabled={true}
          value={incident}
          fullWidth={true}
        />
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
                name="Account "
                required={true}
                labelId="Account"
                label="Account"
                value={account}
                onChange={handleAccount}
                required={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Xpps / Xps"}>Xpps/Xps</MenuItem>
                <MenuItem value={"LNW"}>LNW</MenuItem>
                <MenuItem value={"XOG"}>XOG</MenuItem>
                <MenuItem value={"EPS"}>EPS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="Type">Type </InputLabel>
              <Select
                labelId="Type"
                required={true}
                label="Type"
                value={type}
                onChange={handleType}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Break/fix"}>Break/fix</MenuItem>
                <MenuItem value={"Supplies"}>Supplies</MenuItem>
              </Select>
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
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              onChange={handleChange}
              label="Address"
              name="Address"
              variant="outlined"
              fullWidth={true}
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
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              name="User_Name"
              onChange={handleChange}
              label="User Name"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              className={styles.button}
              endIcon={<Send />}
              onClick={() => {
                setGood(false);
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Delete />}
            >
              ClearForm
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Insert;
