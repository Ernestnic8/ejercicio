import { useEffect, useState } from "react"
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db,setDB] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] =useState(null)
  const [loading, setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true);
    api.get(url).then(res=>{
      //console.log(res)
      if(!res.err){
        setDB(res);
        setError(null);
      } else{
        setDB(null);
        setError(res)
      }
      setLoading(false);
    })
  }, [])

  let api = helpHttp();
  let url = "http://localhost:5000/santos"

  const createData=(data)=>{
    data.id=Date.now().toString();

    let options={body:data, hearders:{"content-type": "application/json"}}

    api.post(url,options).then(res=>{
      console.log(res);
      if(!res.err){
        setDB([...db, res])
      }else{
        setError(res);
      }
    })
}

const updateData = (data) => {
  let endpoint = `${url}/${data.id}`;
  //console.log(endpoint);

  let options = {
    body: data,
    headers: { "content-type": "application/json" },
  };

  api.put(endpoint, options).then((res) => {
    //console.log(res);
    if (!res.err) {
      let newData = db.map((el) => (el.id === data.id ? data : el));
      setDB(newData);
    } else {
      setError(res);
    }
  });
};

const deleteData=(id)=>{
  let isDelete = window.confirm(
    `¿Estás seguro de eliminar el registro con el id '${id}'?`
  );

  if (isDelete) {
    let endpoint = `${url}/${id}`;
    let options = {
      headers: { "content-type": "application/json" },
    };

    api.del(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.filter((el) => el.id !== id);
        setDB(newData);
      } else {
        setError(res);
      }
    });
  } else {
    return;
  }
};

  return (
    <div>
      <h2>Crud con Api</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                {loading && <Loader/>}
                {error && <Message msg={error.status + ":" + error.statusText} bgColor="#dc3545"/>}
                {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>}                
            </article>
    </div>
  )
}

export default CrudApi;
