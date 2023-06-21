import axios from 'axios';
import React, { useEffect, useState } from 'react'





function InterData({ data }) {

    const [Intern, setIntern] = useState([])

    const [Data, setData] = useState([])

    const c = localStorage.getItem("college")


    useEffect(() => {
        axios.post("https://intership-lcfc.onrender.com/functionup/collegeDetails", {
            collegeName: c
        })
            .then((result) => {
                console.log(result.data.data.interns);
                setIntern(result.data.data);
                setData(result.data.data.interns)



            })
            .catch((err) => {
                console.log(err.response.data);
            });
    },[])


    const {  fullName, logoLink} = Intern


    console.log(Data.length)

    return (


        <div className="fluid-container bg-light ">
            <div className='row bg-info' style={{maxHeight:'130px'}} >
                <div className='col-3'>
                    <img style={{ width: "100px", marginLeft: "50px" }} src={logoLink} class="img-fluid rounded-start" alt="..." />
                </div>
                <div className='col-9'>
                    <h1 className='glow' id='std' >{fullName}</h1>
                </div>

            </div>

            <div  className="container" style={{ display: "flex", flexWrap: "wrap" }}>

            {
                Data.length===0 ? 

                  <h1 id='vv'>No AnyOne Applied for Intern</h1>
                 :
                Data.map((a) => {
                            return (
                                <div id='cc' class="card mb-3  m-2" style={{ maxWidth: "380px", display: "flex", flexWrap: "wrap" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4 ">
                                            <img style={{widt:"100px",objectFit:"fill"}}
                                                src={logoLink}
                                                class="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>

                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h3 class="card-title">{a.name}</h3>
                                                <p class="card-text">
                                                    {a.email}
                                                </p>
                                                <p class="card-text">
                                                    <small style={{ color: "white" }}>{a.mobile}</small>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )
                        })
            }

               

            </div>


        </div>


    )
}

export default InterData
