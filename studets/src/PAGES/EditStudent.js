import React, { useEffect, useState } from "react";

import Header from "../COMPONENT/Header";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const EditStudetn = () => {
    const [willEditStudent, setwillEditStudent] = useState(null)
    const { studentId } = useParams()
    const navigate = useNavigate()
    const [studentNo, setStudentNo] = useState("")
    const [name, setName] = useState("")
    const [surName, setSurname] = useState("")
    const [className, setClassName] = useState("")
    const [schoollName, setSchoollName] = useState("")


    useEffect(() => {
        axios.get(`http://localhost:3004/students/${studentId}`)
            .then(res => {
                console.log(res.data);
                setwillEditStudent(res.data)
                setStudentNo(res.data.studentNo)
                setName(res.data.name)
                setSurname(res.data.surName)
                setClassName(res.data.className)
                setSchoollName(res.data.schoollName)
            })
            .catch(err => {
                console.log(err);
                alert("Güncelleme Başarısız Oldu")
                navigate("/")

            })


    }, [])

    const HandleEdit = (event) => {
        event.preventDefault();
        if (studentNo === "" ||
            name === "" ||
            surName === "" ||
            className === "" ||
            schoollName === ""
        ) {
            alert("Bütün Bölümleri Doldurunuz")
            return
        }
        const updatedStudent={
            id:willEditStudent.id,
            name:name,
            surName:surName,
            studentNo:studentNo,
            className:className,
            schoollName:schoollName
 
        }
        axios.put(`http://localhost:3004/students/${willEditStudent.id}`,updatedStudent)
        .then(res=>{
            navigate("/")
        })
        .catch(err=>{
            console.log(err)
            alert("Güncelleme Başarısız Oldu")
        })

    }

    if (willEditStudent === null) {
        return null
    }

    return (
        <>
            <Header />
            <div className="container my-5">
                <form onSubmit={HandleEdit}>
                    <div className="mb-3">
                        <label htmlfor="studentNo" className="form-label">Ögrenci Numarası:</label>
                        <input type="number" className="form-control" id="studentNo" placeholder="Örnek:123"
                            value={studentNo}
                            onChange={(event) => setStudentNo(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="name" className="form-label">Ad:</label>
                        <input type="text" className="form-control" id="name" placeholder="Örnek: Bahri"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="surName" className="form-label">Soyad:</label>
                        <input type="text" className="form-control" id="surName" placeholder="Örnek:Dörtgöz"
                            value={surName}
                            onChange={(event) => setSurname(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="className" className="form-label">Sınıfı:</label>
                        <input type="text" className="form-control" id="className" placeholder="Örnek:10-A"
                            value={className}
                            onChange={(event) => setClassName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="schoollName" className="form-label">Okulu</label>
                        <input type="text" className="form-control" id="schoollName" placeholder="Örnek:Adana İHL"
                            value={schoollName}
                            onChange={(event) => setSchoollName(event.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <button type="submit" className="btn btn-primary w-50">GÜNCELLE</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default EditStudetn