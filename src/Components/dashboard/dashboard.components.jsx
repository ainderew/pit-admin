import React from "react";
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {nameHandler} from "../../utilities"
import Styles from "./dashboard.module.scss";

import studentImg from "../../Assets/default_user.png"

const Dashboard = () =>{
    const userData = useSelector(state => state.userData)
    const {name, email, guardianName, phoneNumber} = userData
    
    
    nameHandler(name)
    return(
        <div className={Styles.dashboard}>
            <div className={Styles.inner}>
                <div className={Styles.row1}>
                    <img src={studentImg} alt="" className={Styles.studentImg}/>
                    <h1 className={Styles.name}>{nameHandler(name)}</h1>
                </div>
                <div className={Styles.row2}>
                    <ul className={Styles.ul}>
                        <Link to = "/prospectus">
                            <li className={Styles.li}>Prospectus</li>
                        </Link>
                        <Link to = "/createClass">
                            <li className={Styles.li}>Create Class</li>
                        </Link >
                        <Link to = "/viewStudents">
                            <li className={Styles.li}>View Students</li>
                        </Link>
                        <Link to = "/LoggedEnrollment">
                            <li className={Styles.li}>Enrollment</li>
                        </Link>
                    </ul>
                </div>
                <div className={Styles.row3}>
                    <ul className={Styles.ul2}>
                        <li className={Styles.li2}>
                            <div className={Styles.contactContainer}>
                                <h1 className={Styles.email}>Email</h1>
                                <p className={Styles.infoP}>{email}</p>
                            </div>
                        </li>
                        <li className={Styles.li2}>
                            <div className={Styles.contactContainer}>
                                <h1 className={Styles.email}>Phone Number</h1>
                                <p className={Styles.infoP}>{phoneNumber}</p>
                            </div>
                        </li>
                        <li className={Styles.li2}>
                            <div className={Styles.contactContainer2}>
                                <h1 className={Styles.email}>Guardian</h1>
                                <p className={Styles.infoP}>{guardianName}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;