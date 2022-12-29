import React, { useState } from "react";
import Header from "../COMPONENT/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddStudent = () => {
    const navigate=useNavigate()
     const [studentNo, setStudentNo] = useState("")
    const [name, setName] = useState("")
    const [surName, setSurname] = useState("")
    const [className, setClassName] = useState("")
    const [schoollName, setSchoollName] = useState("")

    const HandleSave = (event) => {
        event.preventDefault();
        if (studentNo === "" ||
            name === "" ||
            surName === "" ||
            className === "" ||
            schoollName === ""
        ){
            alert("Bütün Bölümleri Doldurunuz")
            return
        }
        const newStudent={
            id:String(new Date().getTime()),
            name:name,
            surName:surName,
            className:className,
            studentNo:studentNo,
            schoollName:schoollName
        }
        axios.post("http://localhost:3004/students",newStudent)
        .then(res=>{
          navigate("/")
        })
        .catch(err=>{
            console.log(err);
            alert("Kayıt İşlemi Başarısız")

        })
    };

    return (
        <>
            <Header />
            <div className="container my-5">
                <form onSubmit={HandleSave}>
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
                        <input type="text" className="form-control" id="surName" placeholder="Örnek:Dörtğöz"
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
                        <button type="submit" className="btn btn-primary w-50">KAYDET</button>
                    </div>
                </form>
            </div>
        </>

    )


}

export default AddStudent 