import React, {useState} from "react";
import Styles from "./create-admin.module.scss";

const CreateAdmin = () =>{
    const [input, setInput] = useState({
        name: "",
        idNumber: "",
        password: ""
    })
    const onInput = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    
    const onSubmit = (e) =>{
        e.preventDefault()
        
        fetch("https://pit-api.herokuapp.com/admin/createAdmin",{
            mode: "cors",
            method: "POST",
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
            <form action="" className="">
                <label htmlFor="idNumber" className="">ID Number</label>
                <input onChange={onInput} value={input.idNumber} type="text" name="idNumber" className=""/>
                
                <label htmlFor="name" className="">Name</label>
                <input onChange={onInput} value={input.name} type="text" name="name" className=""/>
                <label htmlFor="password" className="">Passowrd</label>
                <input onChange={onInput} value={input.password} type="text" name="password" className=""/>
                
                <button onClick={onSubmit} className="">submit</button>
            </form>
            
            
        </div>
    )
}

export default CreateAdmin;