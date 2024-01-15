import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import './Addpage.scss';
function Addpage() {

  const [data, setData] = useState([])

  function getAll() {
    fetch("http://localhost:4040/")
      .then((res) => res.json())
      .then((api) => setData(api))
  }
  useEffect(() => {
    getAll()
  }, [])



  async function addFormik(value) {
    await fetch('http://localhost:4040/', {
      method: 'POST',
      headers: {
        accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value),
    })
    getAll()
  }


  async function deleteFormik(id) {
    await fetch(`http://localhost:4040/${id}`, {
      method: 'DELETE',
    })
    await getAll()
  }


  return (
    <>
      <Formik
        initialValues={{ img: '', name: '', category: '' }}
        validationSchema={Yup.object({
          img: Yup.string().required('Required'),
          name: Yup.string()
            .required('Required'),
          category: Yup.string()
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting,resetForm }) => {
          addFormik(values)
          setSubmitting(false);
          resetForm()
        }}
      >
        <Form>
          <label htmlFor="img">Category</label>
          <Field name="img" type="text" />
          <ErrorMessage name="img" />
          <label htmlFor="name">Img</label> 
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="category">Name</label>
          <Field name="category" type="text" />
          <ErrorMessage name="category" />


          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td><img src={item.img} alt="" /></td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td onClick={() => deleteFormik(item._id)}><i class="fa-solid fa-trash"></i></td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default Addpage