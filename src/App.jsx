import CrudApi from "./components/CrudApi.JSx"
import CrudApp from "./components/CrudApp"
import SongSearch from "./components/SongSearch"


function App() {

  return (
    <>
      <div>
        <h2>CRUD</h2>
        <SongSearch/>
        <hr/>
        {/* <CrudApi/> */}
        <hr/>
        <CrudApp/>
      </div>
    </>
  )
}

export default App
