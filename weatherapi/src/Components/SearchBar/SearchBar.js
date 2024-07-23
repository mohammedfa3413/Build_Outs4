import React, { useState } from 'react'
import styles from "./SearchBar.module.css"

function SearchBar({onSearch}) {
    const [city, setcity] = useState("")

    const handelSearch = () =>{
        onSearch(city)
    }

    const onchange = (e) =>{
        setcity(e.target.value)
    }
  return (
    <center className={styles.searchbar} >
      <input type='text' onChange={onchange} placeholder='Enter the City..' value={city}  />
      <button onClick={handelSearch}>Search</button>
    </center>
  )
}

export default SearchBar
