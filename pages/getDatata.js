import React, { useState, useEffect } from 'react';
import DataView from '../components/DataView';
import axios from 'axios';

const getDatata = () => {
    const [values, setValues] = useState({
        Incident: "",
        Account: "",
        Serial_Number: "",
        Name: "",
        Description: "",
        Address: "",
        PhoneNumber: "",
        User_Name: "",
        Type: "",
    });
    function onChange(event) {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }
    const [data, setData] = useState({
        columns: [
            {
                label: 'Incident',
                field: 'Incident',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Account',
                field: 'Account',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Serial_Number',
                field: 'Serial_Number',
                sort: 'asc',
                width: 270,
            },
            {
                label: 'Name',
                field: 'Name',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Description',
                field: 'Description',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Address',
                field: 'Address',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'PhoneNumber',
                field: 'PhoneNumber',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'User Name',
                field: 'User_Name',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Type',
                field: 'Type',
                sort: 'asc',
                width: 200,
            },
        ],
        rows: [],
    });
    function getAllMember() {
        var config = {
            method: 'get',
            url: 'api/sendData',
            headers: {},
        };
        axios(config)
            .then((response) => {
                setData({
                    ...data,
                    rows: response.data.data,
                });
                console.log(rows)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        getAllMember();
    }, []);
    /* return (
         <div>
             {data.rows && data.rows.length > 0 ? (
                 <DataView data={data} />
             ) : (
                 <span>Loading data table...</span>
             )}
         </div>
     )*/
    console.log(data.rows)
    const rest = data.rows
    return (
        <>

            {rest.map(function (Account, Incident) {
                return (<li key={Incident}>{Account} </li>)
            }

            )});
        </>
    )
}

export default getDatata
