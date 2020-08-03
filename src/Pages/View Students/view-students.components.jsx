import React, {useState} from "react";
import Styles from "./view-students.module.scss";

import Dashboard from "../../Components/dashboard/dashboard.components"
import ViewStudentModal from "../../Components/View-Students-Modal/view-students-modal";

const ViewStudentsPage = () => {
  const [studentNames, setStudentNames] = useState([])
  const [selectedStudent, setSelectedStudent] = useState()
  const [modalState, setModalaState] = useState(false)
  const [yearLevel, setYearLevel] = useState({
      yearLevel: ""
  })
  
  //ASSIGNS STUDENT DATA TO MODAL WHEN USER CLICKS ON NAME OF STUDENT
  const selectStudent = (el) =>{
    setModalaState(true)
    setSelectedStudent(el)
  }
  
  //CHANGES VALUES FOR SELECT
  const onSelect = (e) =>{
      setYearLevel({
         yearLevel: e.target.value
      })
  }
  
  const onMassFind = (e) =>{
      e.preventDefault()
      
      fetch("https://pit-api.herokuapp.com/admin/viewStudents",{
          mode: "cors",
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(yearLevel)
          
      })
      .then(response => response.json())
      .then(data =>{
        data.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        // const arrangedData = data.sort()
        setStudentNames(data)
      })
  }
  return (
    <div className={Styles.screen}>
        {modalState ? <ViewStudentModal studentData={selectedStudent} modalToggle={setModalaState} /> : null}
      <div className={Styles.inner}>
        <Dashboard />
        <div className={Styles.rightContainer}>
            <div className={Styles.selectYearLevelContainer}>
                <label htmlFor="yearLevel" className={Styles.label}>Year Level</label>
                <select onChange={onSelect} value={yearLevel.yearLevel} name="yearlevel" className={Styles.select}>
                    <option value=""></option>
                    <option value="Grade11">Grade 11</option>
                    <option value="Grade12">Grade 12</option>
                </select>
                
                <button onClick={onMassFind} className="">Search All</button>
            </div>
            
            <div className={Styles.studentListContainer}>
                <h1 className={Styles.h1}>Students List</h1>
                <div className={Styles.studentTable}>
                    <h2 className={Styles.h2}>Name</h2>
                    <h2 className={Styles.h2}>Email</h2>
                    <h2 className={Styles.h2}>Gender</h2>
                </div>
                {studentNames.map( (el,index) => {
                    return(
                        <div onClick={() => selectStudent(el)} key={index} className={Styles.studentTable}>
                            <h3 className={Styles.h3}>{el.name}</h3>
                            <h3 className={Styles.h3}>{el.email}</h3>
                            <h3 className={Styles.h3}>{el.gender}</h3>
                        </div>
                         
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentsPage;
