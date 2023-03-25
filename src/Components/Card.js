function Card({ Name, BranchType, DeliveryStatus, District, State, Country, pincode, handelChange }) {

    return (

        <>
            <div className="flex flex-col mt-6 ml-20 gap-2">
                <h3 className='font-semibold'>Pincode: {pincode}</h3>
                <h3><span className='font-semibold'>Message:</span> Number of pincode(s) found: </h3>
                <input type="text" placeholder='Filter' onChange={handelChange} className='border-2 border-solid rounded border-black px-3 py-1 mt-2 w-11/12' />
            </div>

            <div className="border-2 border-solid rounded border-black w-64 px-3 py-6 mt-12 ml-20">
                <h2>Name: {Name} </h2>
                <h2>Branch Type: {BranchType} </h2>
                <h2>Delivery Status: {DeliveryStatus} </h2>
                <h2>District: {District} </h2>
                <h2>Division: {State} </h2>
                <h2>Country: {Country}</h2>
            </div>
        </>
    )
}

export default Card
