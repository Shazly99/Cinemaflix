import React, { useEffect, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import axios from "axios";
import styles from './Register.module.scss';
import valid from './../validationForm.js';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Register() {
 

  let navigate = useNavigate();
  const [validationError, setValidationError] = useState();
  const [handle, setHandle] = useState(false);
  const [isLoading, setIsLoading] = useState(false)



  
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: '  '
  })
  const handelValidationError = (e) => validationError?.filter((err) => err.context.label === e)[0];
  let validation = valid.validationForm(user);

  const getForm = (e) => {
    let currUser = { ...user };
    currUser[e.target.name] = e.target.value;
    setUser(currUser);
  }

  const register = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    if (validation.error) {
      setInterval(() => { setIsLoading(false) }, 3000);
      setValidationError(validation.error.details);
      setHandle(true);
    } else {
      setIsLoading(true)
      let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signup`, user);
      if (data.message == 'success') {
        setInterval(() => { setIsLoading(false) }, 4000);
        toast.success(data.message);
        navigate('/login');
      } else {
        toast.error(data.message);
        setInterval(() => { setIsLoading(false) }, 4000);

      }
      setHandle(false);
    }
  }

  return (
    <div className={styles.body}>

      <Form className={`${styles.form} mx-auto  mt-5 `} onSubmit={(e) => register(e)}>
        <h1 className={`${styles.register__header}`} >Registration Form</h1>

        <Form.Group className="mb-3" controlId="first_name" >
          <Form.Label  >First Name</Form.Label><br />
          <input
            onKeyUp={(e) => getForm(e)}
            className={handle ?
              handelValidationError("first_name") ? `${styles.first_name} ${styles.errorInput}` : `${styles.first_name} ${styles.textColorSucess}` : `${styles.first_name}`
            }
            name="first_name" type="text" placeholder="Enter Your First Name" />
          <Form.Text className={`${styles.textColorError}`}>
            <p>{handelValidationError("first_name")?.message}</p>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="last_name" >
          <Form.Label  >Last Name</Form.Label><br />
          <input
            onKeyUp={(e) => getForm(e)}
            className={handle ?
              handelValidationError("last_name") ? `${styles.last_name} ${styles.errorInput}` : `${styles.last_name} ${styles.textColorSucess}` : `${styles.last_name}`
            }
            name="last_name" type="text" placeholder="Enter Your First Name" />
          <Form.Text className={`${styles.textColorError}`}>
            <p>{handelValidationError("last_name")?.message}</p>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="age" >
          <Form.Label  >age</Form.Label><br />
          <input
            onKeyUp={(e) => getForm(e)}
            className={handle ?
              handelValidationError("age") ? `${styles.age} ${styles.errorInput}` : `${styles.age} ${styles.textColorSucess}` : `${styles.age}`
            }
            name="age" type="text" placeholder="Enter Your First Name" />
          <Form.Text className={`${styles.textColorError}`}>
            <p>{handelValidationError("age")?.message}</p>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email" >
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

        <Form.Group className="mb-3" controlId="password" >
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

export default Register
// disabled