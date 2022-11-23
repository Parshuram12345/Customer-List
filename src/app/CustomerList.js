import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { data } from "../util"


function CustomerList() {
  const navigate = useNavigate()
  const [customerLIst, setCustomerList] = useState([]);
  const [customerLIstClone, setCustomerListClone] = useState([]);
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const { BaseUrl } = data;


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

  const handleState = (value) => {
    if (value === "0") {
      setCity(value)
      setCountry("")
    }
    if (value === "1") {
      setCountry(value)
      setCity("")
    }
  }
  const handleChange = (value) => {
    console.log(value, country)
    console.log(value, city)
    if (city === "0") {
      const filterData = customerLIstClone.filter(({ city }, index) =>
        city.toLowerCase().includes(value.toLowerCase()))
      console.log(filterData)
      setCustomerList(filterData)
    }
    else if (country === "1") {
      const filterData = customerLIstClone.filter(({ country }, index) =>
        country.toLowerCase().includes(value.toLowerCase()))
      console.log(filterData)
      setCustomerList(filterData)
    }
  }

  useEffect(() => {
    getTheCustomerData()
      .then((res) => {
        setCustomerList(res.data)
        setCustomerListClone(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <label>filte by City or Country</label>
      <select onChange={(e) => handleState(e.target.value)}>
        <option>select Location</option>
        <option value="0">City</option>
        <option value="1">Country</option>
      </select>
      <input type="text" onChange={(e) => handleChange(e.target.value)} placeholder="search City or Country" />
      <table>
        <thead>
          <th>Image</th>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>City</th>
          <th>Country</th>
        </thead>
        <tbody>
          {
            customerLIst.map(({ id, name, phone, email, city, country, women }, index) => {
              return (
                <tr key={id} onClick={() => navigate(`${BaseUrl}/Customer/${id}`)}>
                  <td>
                    <img src={`https://randomuser.me/api/portraits/${women}/${id}.jpg`} alt={`avatar_img${index}`} />
                  </td>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{city}</td>
                  <td>{country}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default CustomerList