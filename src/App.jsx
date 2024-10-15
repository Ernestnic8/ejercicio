// import CrudApi from "./components/CrudApi.JSx"
import ContactForm from "./components/ContactForm"
import CrudApp from "./components/CrudApp"
import Modals from "./components/Modals"
//import SelectsAnidados from "./components/SelectsAnidados"
//import SongSearch from "./components/SongSearch"


function App() {

  return (
    <>
      <div>
        <h2>CRUD</h2>
        <Modals/>
        <hr/>
         <ContactForm/>
        {/*<hr/>
        <SelectsAnidados/> */}
        {/*
        <hr/>
        <SongSearch/>
        <hr/>
         <CrudApi/> */}
        <hr/>
        <CrudApp/>
      </div>
    </>
  )
}

export default App
