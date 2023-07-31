import React, { useEffect, useState } from 'react'

const IPAddress = () => {
  const [ipAddress, setIPAddress] = useState('')
  const [country, setCountry] = useState('')
  const [latitude,  setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [ipAddress4,  setIPAddress4] = useState('')

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIPAddress(data.ip))
      .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    fetch('https://geolocation-db.com/json/')
      .then(response => response.json())
      .then(data => {
        setIPAddress4(data.IPv4)
        setCountry(data.country_name)
        setLatitude(data.latitude)
        setLongitude(data.longitude)
      })
      .catch(error => console.log(error))
  }, [])


  return (
    <div>
      <h1>Your IP Address is: {ipAddress}</h1>
      <h1>Your country is: {country}</h1>
      <h1>Your country is: {ipAddress4}</h1>
      <h1>Your country is: {longitude}</h1>
      <h1>Your country is: {latitude}</h1>
    </div>
  )
}
export default IPAddress;