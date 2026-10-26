// import { createContext, useState } from "react";
// import stafflist from "./stafflist";

// export const StaffContext = createContext({staff:[]}); 

// export function StaffProvider({children})
// {
//     const [staff, setStaff] = useState(stafflist); 
//     const value = {staff}
//     return (
//         <StaffContext.Provider value = {value}>
//         {children}
//         </StaffContext.Provider>
//     ); 

// }
// export default StaffContext

import { createContext, useState, useEffect } from "react";
import stafflist from "./stafflist";
import { addcollectionanddocuments } from "./utils/firebase";

export const StaffContext = createContext({
    staff: []
});

export function StaffProvider({ children }) {
    const [staff, setStaff] = useState(stafflist);

    // useEffect(() => {
    //     addcollectionanddocuments("staff", stafflist);
    // }, [staff]);

    const value = { staff };

    return (
        <StaffContext.Provider value={value}>
            {children}
        </StaffContext.Provider>
    );
}