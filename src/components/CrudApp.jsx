import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso",
    },
    {
      id: 2,
      name: "Shiryu",
      constellation: "Dragón",
    },
    {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne",
    },
    {
      id: 4,
      name: "Shun",
      constellation: "Andrómeda",
    },
    {
      id: 5,
      name: "Ikki",
      constellation: "Fénix",
    },
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
    const deleteData=(id)=>{
        let isDelete=window.confirm("¿Estas seguto de eliminar el registro?")

        if(isDelete){
            let newData=db.filter(el => el.id !== id)
            setDB(newData)
        }else{
            return;
        }
    }

    return(
        <div>
            <h2>CRUD App</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
            </article>
            
        </div>
    )
}

export default CrudApp;