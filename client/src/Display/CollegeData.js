import axios from "axios";
import React, { useEffect, useState } from "react";
import InterData from "./InterData";
import { useNavigate } from "react-router-dom";





function CollegeData() {


    const [data, setData] = useState([]);

    const [search, setSearch] = useState('')
    const [Intern, setIntern] = useState([]);

    const [n,setN]=useState('')


  const navigate=useNavigate()



  
    useEffect(() => {
        axios
            .get("https://intership-lcfc.onrender.com/allcollege")
            .then((result) => {
                console.log(result.data.data);
                setData(result.data.data);
                
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    },[search]);




    const HandleFilter = () => {

        const x = data.filter((item) => {
            return item.name == search
        })

        setData(x)
    }



  
    const handleIntern= async(college)=>{
       
       localStorage.setItem("college",college)

       navigate('/inter')
 
    }


    const handleApply=(college)=>{

        localStorage.setItem("c",college)

       navigate('/apply')

    }








    return (
        <div className="fluid-container bg-secondary">
       

            <div style={{ textAlign: "center" }} className="bg-danger">

                <input type="search" className="m-1" onChange={(e) => setSearch(e.target.value)}></input>
                
                <button className="btn btn-info m-1" onClick={HandleFilter}> search College</button>

            </div>

            

            <div className="fluid-container" style={{ display: "flex", flexWrap: "wrap" }}>




                {
                    data.length == 0 ? 
                    <div className="round">
                         <div class="loader"></div>
                    </div> 
                    :
                        data.map((item) => {
                            return (

                                <div id="mm" class="card mb-3  m-2" style={{ maxWidth: "360px", display: "flex", flexWrap: "wrap" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4 ">
                                        <img id="im" style={{height:"150px",objectFit:"fill", width:"130px", marginRight:"0px" }}
                                                src={item.logoLink}
                                                alt="..."
                                            />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title " style={{color:"red",textAlign:"center"}}>{item.name}</h5>
                                                <p class="card-text" style={{color:"yellow"}}>
                                                    {item.fullName.toUpperCase()}
                                                </p>
                                                <p class="card-text">
                                                    <small  style={{color:"white"}} class="text">{`Collge create at ${item.createdAt}`}</small>
                                                </p>


                                                <div className="d-flex flex-column">
                                                    <button onClick={()=>handleApply(item.name)} className="btn btn-danger  m-1">Apply for Intern</button>

                                                    <button onClick={()=>handleIntern(item.name)} className="btn btn-primary  m-1">Applied students</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                }

            </div>


        </div>


    );
}

export default CollegeData;
