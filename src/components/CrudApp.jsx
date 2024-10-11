import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";


const initialDb=[
    {
        id:1,
        name:"Seiya",
        constelacion:"Pegaso"
    },
    {
        id:2,
        name:"Shiryu",
        constelacion:"Dragon"
    },
    {
        id:3,
        name:"Hyoga",
        constelacion:"Cisne"
    },
    {
        id:4,
        name:"Shun",
        constelacion:"Andromeda"
    },
    {
        id:5,
        name:"Ikki",
        constelacion:"Fenix"
    }
];

const CrudApp = ()=>{
    const [db,setDB]=useState(initialDb);
    
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData=(data)=>{
        data.id=Date.now()
        setDB([...db, data])
    }
    const updateData=(data)=>{
        let newData = db.map((el)=>el.id === data.id ? data : el)
        setDB(newData)
    }
    const deleteData=(id)=>{}

    return(
        <div>
            <h2>CRUD App</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    )
}

export default CrudApp;