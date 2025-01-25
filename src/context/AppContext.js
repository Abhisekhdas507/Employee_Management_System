import { createContext, useState } from "react";
import { useEffect } from "react";

// Step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [employeeData, setEmployeeData] = useState([]);
    const [adminData, setAdminData] = useState([]);
    const [currentAdmin, setCurrentAdmin] = useState([]);
    const [currentEmployee, setCurrentEmployee] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);
    const [totalTask, setTotalTask] = useState(0);
    const [assignTaskNo, setAssignTaskNo] = useState(0);
    const [completedTask, setCompletedTask] = useState(0);
    const [failedTask, setFailedTask] = useState(0);
    const [loggedInUser, setLoggedInUser] = useState([]);
    const [assignTask, setAssignTask] = useState([]);
    const [assignTaskLists, setAssignTaskLists] = useState([]);


    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem('employees')) ||[];
        const admin = JSON.parse(localStorage.getItem('admin')) || [];
        const lUser = JSON.parse(localStorage.getItem('loggedInUser')) || [];
        const aTask = JSON.parse(localStorage.getItem('assignTask')) || [];
        setEmployeeData(employees);
        console.log(admin);
        setAdminData(admin);
        setLoggedInUser(lUser);
        console.log(lUser);
        setAssignTask(aTask);
    }, [])

    const value = {
        employeeData,
        setEmployeeData,
        adminData,
        setAdminData,
        currentAdmin,
        setCurrentAdmin,
        currentEmployee,
        setCurrentEmployee,
        isLoggedIn, 
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        totalTask,
        setTotalTask,
        assignTaskNo,
        setAssignTaskNo,
        completedTask,
        setCompletedTask,
        failedTask,
        setFailedTask,
        loggedInUser,
        setLoggedInUser,
        assignTask, 
        setAssignTask,
        assignTaskLists,
        setAssignTaskLists
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}