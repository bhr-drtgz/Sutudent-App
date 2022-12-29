import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

 
import Header from "../COMPONENT/Header";
import ListStudents from "../COMPONENT/ListStudenst";

const Home = () => {
    const [students, setStudents] = useState(null)
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3004/students")
            .then((response) => {
                setStudents(response.data)

            })
            .catch((eror) => {

            })
    }, [])
    if (students === null) {
        return null
    }
    return (
        <div>
            <Header />
             <div className="container mt-5 d-flex justify-content-end">
                <button onClick={()=>navigate("/AddStudent")} className="btn btn-primary">YENİ ÖĞERENCİ EKLE</button>
             </div>
            <ListStudents students={students} setStudents={setStudents} />
        </div>
    )
}

export default Home;
