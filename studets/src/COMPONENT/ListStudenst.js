import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const ListStudents = (props) => {
    const { students, setStudents } = props;
    const handleDelete = (student) => {
        console.log(handleDelete)
        axios.delete(`http://localhost:3004/students/${student.id}`)
            .then(res => {
                const filteredStudents = students.filter(item => item.id !== student.id)
                setStudents(filteredStudents)

            })
            .catch(err => {
                console.log(err)
                alert("Silme işlemi Başarısız")

            })
    }

    return (
        <div className="container my-2">

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sıra No:</th>
                        <th scope="col">Öğr. No:</th>
                        <th scope="col">isim:</th>
                        <th scope="col">Soyİsim:</th>
                        <th scope="col">Sınıfı:</th>
                        <th scope="col">Okulu:</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.length === 0 ? (
                            <p> Henüz Kayıtlı Bir Öğrenci Yok</p>
                        ) : (
                            <>
                                {students.map((student, indesk) => (
                                    <tr key={student.id}>
                                        <th scope="row">{indesk+1}</th>
                                        <td>{student.studentNo}</td>
                                        <td>{student.name}</td>
                                        <td>{student.surName}</td>
                                        <td>{student.className}</td>
                                        <td>{student.schoollName}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button onClick={() => handleDelete(student)}
                                                    type="button" className="btn btn-sm btn-outline-danger">Sil</button>
                                                <Link to={`/edit-student/${student.id}`} type="button" className="btn btn-sm btn-outline-primary">Düzenle</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListStudents