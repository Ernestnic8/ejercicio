import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";




const CrudApp = ()=>{
    const [db,setDB]=useState([]);
    
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