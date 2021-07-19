import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
  /* const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );*/
  const [status, setStatus] = useState(`${caseDetails.Status}`);
  const [xsm, setXsm] = useState(`${caseDetails.XSM_Incident}`);

  const Modify = () => {
    setEdit(true);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);

    caseDetails.Status = event.target.value;
  };
  const handleChange = (e) => {
    setXsm(e.target.value);
    console.log(`Final value is  ${caseDetails.XSM_Incident}`);
  };

  function submit(e) {
    caseDetails.XSM_Incident = xsm;
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
        if (response.status == 200) {
          toast.success("Update succeed ");
          //console.log(JSON.stringify(response.data));
        }
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
          disabled
          value={caseDetails.Incident}
          fullWidth
          disabled
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
                    fullWidth
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    name="Account"
                    label="Account  "
                    variant="outlined"
                    value={caseDetails.Account}
                    fullWidth
                    disabled
                  />
                </Grid>

                <TextField
                  name="Type "
                  label="Call Type"
                  variant="outlined"
                  value={caseDetails.Type}
                  fullWidth
                  disabled
                />

                <Grid item xs={6}>
                  <TextField
                    name="Name"
                    label="Name "
                    variant="outlined"
                    value={caseDetails.Name}
                    fullWidt
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    name="Phone Number"
                    label="Phone Number "
                    variant="outlined"
                    value={caseDetails.PhoneNumber}
                    disabled
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

                      //onChange={handleStatus}
                      //disabled={dispIn}
                    >
                      <MenuItem value="test " disabled></MenuItem>

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
                    placeholder="Ètrieyd"
                    onChange={handleChange}
                    value={xsm} //{caseDetails.XSM_Incident}
                    fullWidth
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
                    value={caseDetails.Description}
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
