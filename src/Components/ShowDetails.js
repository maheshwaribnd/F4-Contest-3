import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { CircularProgress } from "@mui/material"
import Card from './Card'

function ShowDetails() {

    // const { pincode } = useParams()
    const [details, setDetails] = useState([])          // first time get Details
    const [search, setsearch] = useState("")            // this is for search
    const [filtered, setFiltered] = useState([])        // this is for filtered deatils
    const [isLoading, setIsLoading] = useState(false);
    // const [pincode, setPincode] = useState()    // This is just extra for now
    // const [input, setInput] = useState("");

    let pincode = "442401"

    let handelChange = (e) => {
        setsearch(e.target.value)
        let filteredDetails = details.filter((details) => {
            if (details.name.toLowerCase().includes(search.toLowerCase())) {
                return details;
            }
        })
        setFiltered(filteredDetails);
    }

    useEffect(() => {

        setIsLoading(true)

        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
            .then((res) => {
                console.log(res);
                return res.json()
            })
            .then((data) => {
                setDetails(data)
                console.log(data)
            })
            .catch((err) => console.log(err)
            )
        setIsLoading(false)

    }, [])
    console.log(details)

    return (
        <div>
            {isLoading ? <CircularProgress /> :
                <div>
                    {details.map((item, idx) => (

                        <div key={idx}>
                            <Card
                                Name={item.Name}
                                BranchType={item.BranchType}
                                DeliveryStatus={item.DeliveryStatus}
                                District={item.District}
                                State={item.State}
                                Country={item.Country}
                                data={item}
                                pincode={pincode}
                                handelChange={handelChange}
                            />
                        </div>
                    ))}
                </div>
            }

        </div >
    )
}

export default ShowDetails
