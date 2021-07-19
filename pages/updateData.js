import React, { useEffect, useState } from "react";
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
import { Send, Delete, UpdateOutlined } from "@material-ui/icons";
import styles from "../styles/Home.module.css";

const updateData = () => {
  const [good, setGood] = useState(true);
  const [notify, setNotify] = useState(false);
  const [dispIn, setDispIn] = useState(false);
  const [account, setAccount] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

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
  return (
    <div className={styles.container}>
      {!good ? <Loader /> : " "}
      <form noValidate>
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
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
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
              name="PhoneNumber"
              label="Phone Number "
              variant="outlined"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="Description"
              name="Description"
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
              label="User Name"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="Type">Status </InputLabel>
              <Select
                labelId="status"
                required={true}
                label="status"
                value={status}
                defaultValue="open"
                onChange={handleStatus}
              >
                <MenuItem value="Open"></MenuItem>
                <MenuItem value={"Open"}>Open</MenuItem>
                <MenuItem value={"Picked"}>Picked</MenuItem>
                <MenuItem value={"Close"}>Close</MenuItem>
                <MenuItem value={"Escalate"}>Escalate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default updateData;
