import { useForm } from "../hooks/useForm"
import Loader from "./Loader";
import Message from "./Message";

const initialForm={
    name:"",
    email:"",
    subject: "",
    comments: "",
}

const validationsForm =(form)=>{
    const errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = "El campo `Nombre` es requerido"
    } else if(!regexName.test(form.name.trim())){
        errors.name = "El campo `Nombre` sólo acepta letras y espacios en blanco"
    }

    if(!form.email.trim()){
        errors.email = "El campo Email es requerido"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo `Email` sólo acepta letras y espacios en blanco"
    }

    if(!form.subject.trim()){
        errors.subject = "El campo Asuntos es requerido"
    }

    if(!form.comments.trim()){
        errors.comments = "El campo comentario es requerido"
    }else if(!regexComments.test(form.name.trim())){
        errors.comments = "El campo `comentario` no debe de exceder los 255 caracteres"
    }



    return errors
}

let styles={
    fontWeigth : "bold",
    color:"#dc3545"
}

const ContactForm = () => {
    const {
        form, errors, loading, response, handleChanche, hanldeBlur, handleSubmit
    }=useForm(initialForm, validationsForm)
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Escribe tu nombre" onBlur={hanldeBlur} onChange={handleChanche} value={form.name} required/>
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input type="email" name="email" placeholder="Escribe tu email" onBlur={hanldeBlur} onChange={handleChanche} value={form.email} required/>
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input type="text" name="subject" placeholder="Asunto a tratar" onBlur={hanldeBlur} onChange={handleChanche} value={form.subject} required/>
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea name="comments" placeholder="Escribe tus comentarios" cols="50" rows="5" onBlur={hanldeBlur} onChange={handleChanche} value={form.comments} required></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar"/>
      </form>
      {loading && <Loader/>}
      {response && (<Message msg="Los datos se han enviado" bgColor="#198754"/>)}
    </div>
  )
}

export default ContactForm
