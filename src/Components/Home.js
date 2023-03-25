import React from 'react'

function Home({ setCheck }) {

    const LookupFunction = () => {
        // let pin = document.getElementById('pincode').value
        setCheck(true);
    }

    return (
        <>
            <div className='flex flex-col mt-6 ml-20 gap-2'>
                <h1 className='font-semibold'>Enter Pincode</h1>
                <input type="text" placeholder='Pincode' id='pincode' className='border-2 border-solid rounded border-black px-3 py-1 w-11/12' />
            </div>
            <button onClick={LookupFunction} className='bg-black px-9 py-1 mt-4 ml-20 text-white rounded'>Lookup</button>
        </>
    )
}

export default Home
