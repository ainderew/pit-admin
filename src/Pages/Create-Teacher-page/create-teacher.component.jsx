import React, {useState} from "react";
import Styles from "./create-teacher.module.scss";

import Dashboard from "../../Components/dashboard/dashboard.components";
const CreateTeacher = () =>{
    const [input, setInput] = useState({
        idNumber: "",
        password: "",
        name: ""
    })
    
    const onInput = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = (e) =>{
        e.preventDefault();
        
        fetch("https://pit-api.herokuapp.com/admin/createTeacher",{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    return(
        <div className={Styles.screen}>
            
        <div className={Styles.screen}>
            <div className={Styles.inner}>
                <Dashboard />
                <div className={Styles.rightContainer}>
                    <form  className={Styles.form}>
                        <div className={Styles.row}>
                            <label htmlFor="idNumber" className={Styles.label}>UserId</label>
                            <input onChange={onInput} value={input.idNumber} type="text" name="idNumber" className={Styles.input}/>
                        </div>
                        <div className={Styles.row}>
                            <label htmlFor="password" className={Styles.label}>Password</label>
                            <input onChange={onInput} value={input.password} type="text" name="password" className={Styles.input}/>
                        </div>
                        <div className={Styles.row}>
                            <label htmlFor="name" className={Styles.label}>Name</label>
                            <input onChange={onInput} value={input.name} type="text" name="name" className={Styles.input}/>
                        </div>
                        
                        <button onClick={onSubmit} className={Styles.submitBtn}>Create</button>
                    </form>
                </div>
            </div>
         </div>
        </div>
    )
}

export default CreateTeacher;