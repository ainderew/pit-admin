import React from "react";
import Styles from "./view-students-modal.module.scss";

//IMAGE
import close from "../../Assets/close.svg"
const ViewStudentsModal = ({studentData, modalToggle}) =>{
    const {name, email, phoneNumber, yearLevel, gender, messengerName, guardianName, idNumber, internetConnection, guardianPhoneNumber} = studentData
    
    
    return(
        <div className={Styles.modal}>
            <img onClick={()=>modalToggle(false)} src={close} alt="" className={Styles.close}/>
            <div className="">
                
            </div>
            
            <div className={Styles.right}>
                <div className={Styles.row}>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Name: <span className={Styles.span}>{name}</span></h1>
                    </div>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Year Level: <span className={Styles.span}>{yearLevel}</span></h1>
                    </div>
                </div>
                
                <div className={Styles.row}>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>ID Number: <span className={Styles.span}>{idNumber}</span></h1>
                    </div>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Gender: <span className={Styles.span}>{gender}</span></h1>
                    </div>
                </div>
                
                <div className={Styles.row}>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Email: <span className={Styles.span}>{email}</span></h1>
                    </div>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Phone Number: <span className={Styles.span}>{phoneNumber}</span></h1>
                    </div>
                </div>
                
                <div className={Styles.row}>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Messenger Name: <span className={Styles.span}>{messengerName}</span></h1>
                    </div>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Internet Connection: <span className={Styles.span}>{internetConnection}</span></h1>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Guardian Name: <span className={Styles.span}>{guardianName}</span></h1>
                    </div>
                    <div className={Styles.infoContainer}>
                            <h1 className={Styles.h1}>Guardian Phone Number: <span className={Styles.span}>{guardianPhoneNumber}</span></h1>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default ViewStudentsModal