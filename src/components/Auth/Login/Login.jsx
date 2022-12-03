import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import styles from './Login.module.scss';
import valid from './../validationForm';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Login({saveUserData}) { 
  let navigate = useNavigate();
  const [validationError, setValidationError] = useState();
  const [handle, setHandle] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const handelValidationError = (e) => validationError?.filter((err) => err.context.label === e)[0];
  let validation = valid.validationlogin(user)


   
  const getForm = (e) => {
    let currUser = { ...user };
    currUser[e.target.name] = e.target.value;
    setUser(currUser);
  }

  const signin = async (e) => {
    setIsLoading(true)
    e.preventDefault();

    if (validation.error) {
      setInterval(() => { setIsLoading(false) }, 4000);
      setValidationError(validation.error.details);
      setHandle(true);
      // setDisabled(false);
    } else {
      setIsLoading(true)

      let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signin`, user);

      if (data.message == 'success') {
        localStorage.setItem("token", data.token); 
        setInterval(() => { setIsLoading(false) }, 4000); 
        toast.success(data.message);
        navigate('/home'); 
        saveUserData();
      } else {
        setInterval(() => { setIsLoading(false) }, 3000);
        toast.error(data.message);

      } 
      setHandle(false);
    }
  }

  return (
    <div className={styles.body}>

      <Form className={`${styles.form} mx-auto  mt-5 `} onSubmit={(e) => signin(e)}>
        <h1 className={`${styles.Login__header} text-light`} >Login Form</h1>

        <Form.Group className="mb-3 text-muted" controlId="email" >
          <Form.Label  >email</Form.Label><br />
          <input
            onKeyUp={(e) => getForm(e)}
            className={handle ?
              handelValidationError("email") ? `${styles.email} ${styles.errorInput}` : `${styles.email} ${styles.textColorSucess}` : `${styles.email}`
            }
            name="email" type="email" placeholder="Enter Your First Name" />
          <Form.Text className={`${styles.textColorError}`}>
            <p>{handelValidationError("email")?.message}</p>
          </Form.Text>
        </Form.Group>



        <Form.Group className="mb-3 text-muted" controlId="password" >
          <Form.Label  >password</Form.Label><br />
          <input
            onKeyUp={(e) => getForm(e)}
            className={handle ?
              handelValidationError("password") ? `${styles.password} ${styles.errorInput}` : `${styles.password} ${styles.textColorSucess}` : `${styles.password}`
            }
            name="password" type="password" placeholder="Enter Your First Name" />
          <Form.Text className={`${styles.textColorError}`}>
            <p>{handelValidationError("password")?.message}</p>
          </Form.Text>
        </Form.Group>
        <Button className={styles.submit__btn} variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading....' : '  Sign Up'}
        </Button>
      </Form>
      <div className={`${styles.overlay__bg}`}></div>
    </div>
  )
}

export default Login
// disabled