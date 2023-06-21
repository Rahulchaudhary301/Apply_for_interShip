import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function CreateCollege() {

  const [name,setname]=useState('')

  const [fullNmae,setFullName]=useState('')
  const [Logolink,setLogoLink]=useState('')



const navigate=useNavigate()

const handleApi=(e)=>{
    e.preventDefault()
    axios.post('https://intership-lcfc.onrender.com/functionup/colleges',{
    name:name,
    fullName:fullNmae,
    logoLink:Logolink,

})
.then((result)=>{
    console.log(result)
setname('')
setFullName('')
setLogoLink('')
alert('Create Successfully')
navigate('/college')
})


.catch((err)=>{
    console.log(err)
    alert(err.response.data.message)
})


}





    return (
        <div id='bb'>
            <h1 style={{ color: 'red', textAlign: "center" }}>Create College Name</h1>
         
            <hr></hr>

            <form className='container mt-5'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">College Name</label>
                    <input type="text" onChange={(e)=>setname(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Full College Name</label>
                    <input type="text=" onChange={(e)=>setFullName(e.target.value)} class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Logo Link</label>
                    <input type="text=" onChange={(e)=>setLogoLink(e.target.value)} class="form-control" id="exampleInputPassword1" />
                </div>
                
                <button onClick={handleApi} type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default CreateCollege
