import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { data } from '../util';

function CustomerAbout() {
    const [customerdetails, setCustomerDetails] = useState({})
    const { BaseUrl } = data;
    const { id } = useParams()
    console.log(id,typeof id)
    //---get customer details----///
    async function getTheCustomerData() {
        return await axios.get(`${BaseUrl}/Customer`)
            .then((res) => {
                if (res.status === 200)
                    return res
            })
            .catch((err) => {
                console.log(err)
            })
    }
    ///----///
    useEffect(() => {
        getTheCustomerData()
            .then((res) => {
                setCustomerDetails(res?.data?.find((elem) => elem.id===id))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div>
             <h3>Full Name</h3>
             <div>{customerdetails?.name}</div>
             <h3>Phone Number</h3>
             <div>{customerdetails?.phone}</div>
             <h3>email</h3>
             <div>{customerdetails?.email}</div>
             <h3>City</h3>
             <div>{customerdetails?.city}</div>
             <h3>Country</h3>
             <div>{customerdetails?.country}</div>
        </div>
    )
}

export default CustomerAbout