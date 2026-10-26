// import Card from "./Card";
// import './Cardlist.css'
// import stafflist from "./stafflist";
// import { useContext } from "react";
// import { StaffContext } from "./StaffContext";


// function Cardlist(props) {

//    const { staff } = useContext(StaffContext);
//    const filteredstaff = stafflist.filter((staff) => {
//       return (staff.name.toLowerCase().startsWith(props.searchTerm.toLowerCase()))
//    });
//    return (
//       <div className="row">
//          {filteredstaff.map((staff) => (
//             <Card
//                key={staff.key}
//                image={staff.image}
//                name={staff.name}
//                position={staff.position}
//             />
//          ))}
//       </div>
//    )

// }

// export default Cardlist;


import Card from "./Card";
import './Cardlist.css';
import stafflist from "./stafflist";
import { useContext } from "react";
import { StaffContext } from "./StaffContext";

function Cardlist(props) {

   const { staff } = useContext(StaffContext);

   const filteredstaff = stafflist.filter((staff) => {
      return (
         (staff.name || "").toLowerCase().startsWith(
            (props.searchTerm || "").toLowerCase()
         )
      );
   });

   return (
      <div className="row">
         {filteredstaff.map((staff) => (
            <Card
               key={staff.key}
               image={staff.image}
               name={staff.name}
               position={staff.position}
            />
         ))}
      </div>
   );
}

export default Cardlist;
