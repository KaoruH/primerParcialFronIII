import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import styles from './App.module.css';

function App() {

  // USE STATE

  const [formValues, setFormValues] = useState({
    userName: "",
    userEmail: "",
    bowName: "",
    bowSize: "",
    bowColor: "",
  });
  const [dataSent, setDataSent] = useState(null);
  const [errorAlert, setErrorAlert] = useState("");

  // ON CHANGE

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  // VALIDATIONS

  const validUserName = (userName) => {
    const withOutSpace = userName.trim();

    return (withOutSpace.length >= 3);
  }

  const validEmail = (userEmail) => {
    const withOutSpace = userEmail.trim();

    return (userEmail.length >= 6)

  }

  const completeInput = ({ userName, userEmail, bowName, bowSize, bowColor }) => {
    return (userName && userEmail && bowName && bowSize && bowColor);
  }

  // FORM RESET

  const formReset = () => {

    setFormValues({
      ...formValues,
      userName: "",
      userEmail: "",
      bowName: "",
      bowSize: "",
      bowColor: ""
    })

  }

  // HANDLE SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validUserName(formValues.userName);
    const isEmailValid = validEmail(formValues.userEmail);
    const isInputComplete = completeInput(formValues);

    if (isNameValid && isEmailValid && isInputComplete) {
      setErrorAlert("");
      setDataSent(formValues);

    } else {
      setErrorAlert("Por favor chequea que la información sea correcta")
      formReset();
      return;
    }

    formReset();

  }

  // "THE" RETURN

  return (
    <div className="App">

      <h1 style={{ fontSize: '34px' }}>Formulário</h1>
      <form onSubmit={handleSubmit} className={styles.formulario}>

        <label for="userName">Nombre:</label>
        <input type="text" placeholder='Nombre' id='userName' name='userName' value={formValues.userName} onChange={handleChange} className={styles.input} />

        <label for="userEmail">Email:</label>
        <input type="text" placeholder='Email' id='userEmail' name='userEmail' value={formValues.userEmail} onChange={handleChange} className={styles.input} />

        <label for="bowName">Moño:</label>
        <select placeholder='Seleccione el moño' id='bowName' name='bowName' value={formValues.bowName} onChange={handleChange} className={styles.select}>
          <option value="" disabled default>Seleccione el moño</option>
          <option value="Lily">Lily</option>
          <option value="Flora">Flora</option>
          <option value="Nina">Nina</option>
          <option value="Luna">Luna</option>
        </select>

        <label for="bowSize">Tamaño:</label>
        <select placeholder='Seleccione el tamaño' id='bowSize' name='bowSize' value={formValues.bowSize} onChange={handleChange} className={styles.select}>
          <option value="" disabled default>Seleccione el tamaño</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>

        <label for="bowColor">Color:</label>
        <select placeholder='Seleccione el color' id='bowColor' name='bowColor' value={formValues.bowColor} onChange={handleChange} className={styles.select}>
          <option value="" disabled default>Seleccione el color</option>
          <option value="Rosa">Rosa</option>
          <option value="Rojo">Rojo</option>
          <option value="Celeste">Celeste</option>
          <option value="Amarillo">Amarillo</option>
          <option value="Negro">Negro</option>
        </select>

        <input type="submit" value="Enviar" className={styles.button} />

      </form>
      <div className={styles.error}>{errorAlert}</div>

      {dataSent && <Card formValues={dataSent} />}

    </div>
  )
}

export default App
