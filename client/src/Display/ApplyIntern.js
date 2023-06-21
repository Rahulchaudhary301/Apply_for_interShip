import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ApplyIntern() {


    const [name, setname] = useState('')

    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    const col = localStorage.getItem('c')

    const navigate = useNavigate()

    const handleApi = (e) => {

        e.preventDefault()
        axios.post('https://intership-lcfc.onrender.com/functionup/interns', {
            name: name,
            email: email,
            mobile: mobile,
            collegeName: col


        })
            .then((result) => {
                console.log(result)
                setname('')
                setEmail('')
                setMobile('')
                alert('Create Successfully')
                navigate('/college')


            })
            .catch((err) => {
                console.log(err)
                alert(err.response.data.message)
            })

    }


    return (


        <div >
             
            <h1 style={{ color: 'red',textAlign:"center" }}>Apply for InternShip</h1>

            <hr></hr>

            <form className='container mt-5'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"> Name</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mobile</label>
                    <input type="number" onChange={(e) => setMobile(e.target.value)} class="form-control" id="exampleInputPassword1" />
                </div>

                <button onClick={handleApi} type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>


    )
}


export default ApplyIntern
