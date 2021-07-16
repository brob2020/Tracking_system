import React, { useEffect, useState } from "react";
import axios from "axios";
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
import useForm from "../../use js/useForm";
import validate from "../../use js/validate";
import styles from "../../styles/Home.module.css";
import { Send, Delete, UpdateOutlined } from "@material-ui/icons";

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
  console.log(data);
  return {
    props: {
      caseDetails: data.data,
    },
  };
}

const dataDetails = ({ caseDetails }) => {
  const { edit, setEdit } = useState(true);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  const [status, setStatus] = useState("");

  const Modify = () => {
    setEdit(true);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
    console.log(status);
    console.log(caseDetails.Status);
    caseDetails.Status = event.target.value;
  };

  function submit(e) {
    e.preventDefault();
    var config = {
      method: "PUT",
      url: `/api/data/${caseDetails._id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: caseDetails,
    };

    axios(config)
      .then(function (response) {
        const datas = response.data;
        console.log(datas);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div>
        {" "}
        <h2> Data entry</h2>
        <TextField
          name="Incident #"
          variant="outlined"
          disabled={true}
          value={caseDetails.Incident}
          fullWidth={true}
          disabled={true}
        />
      </div>
      <div className={styles.container}>
        {caseDetails && (
          <>
            <form noValidate on onSubmit={submit}>
              <Grid container spacing={3} className={styles.grid}>
                <Grid item xs={6}>
                  <TextField
                    name="Serial_Number"
                    label="Serial Number "
                    variant="outlined"
                    value={caseDetails.Serial_Number}
                    fullWidth={true}
                    disabled={true}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    name="Account"
                    label="Account  "
                    variant="outlined"
                    value={caseDetails.Account}
                    fullWidth={true}
                    disabled={true}
                  />
                </Grid>

                <TextField
                  name="Type "
                  label="Call Type"
                  variant="outlined"
                  value={caseDetails.Type}
                  fullWidth={true}
                  disabled={true}
                />

                <Grid item xs={6}>
                  <TextField
                    name="Name"
                    label="Serial Number "
                    variant="outlined"
                    value={caseDetails.Name}
                    fullWidth={true}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="Serial_Number"
                    label="Serial Number "
                    variant="outlined"
                    value={caseDetails.Serial_Number}
                    fullWidth={true}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="Phone Number"
                    label="Phone Number "
                    variant="outlined"
                    value={caseDetails.PhoneNumber}
                    fullWidth={true}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="Serial_Number"
                    label="Serial Number "
                    variant="outlined"
                    value={caseDetails.Serial_Number}
                    fullWidth={true}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="outlined" fullWidth={true}>
                    <InputLabel id="Status">Status</InputLabel>
                    <Select
                      //labelId="status"
                      required={true}
                      label="status"
                      onChange={handleStatus}
                      value={status}
                      displayEmpty
                      placeholder="noneP"

                      //onChange={handleStatus}
                      //disabled={dispIn}
                    >
                      <MenuItem value="" disabled>
                        {" "}
                        {caseDetails.Status}
                      </MenuItem>

                      <MenuItem value={"Picked"}>Picked</MenuItem>
                      <MenuItem value={"Close"}>Close</MenuItem>
                      <MenuItem value={"Escalate"}>Escalate</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="XSM_Incident"
                    label="XSM_Incident Number "
                    variant="outlined"
                    value={caseDetails.XSM_Incident}
                    fullWidth={edit}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Description"
                    name="Description"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth={true}
                    value={caseDetails.Description}
                    disabled={edit}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Description"
                    name="Description"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth={true}
                    value={new comment()}
                    disabled={edit}
                  />
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  size="large"
                  className={styles.button}
                  endIcon={<UpdateOutlined />}
                  onClick={submit}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default dataDetails;
