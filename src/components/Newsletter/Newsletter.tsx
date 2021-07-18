import React, { useRef } from 'react'
import { useState } from 'react'

import styles from "./Newsletter.module.css"

const Newsletter = () => {
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)

  const [errorName, setErrortName] = useState<boolean>(false)
  const [errorEmail, setErrorEmail] = useState<boolean>(false)
  const [submit, setSubmit] = useState<boolean>(false)
  const [errorColorName, setErrorColorName] = useState<boolean>(false)
  const [errorColorEmail, setErrorColorEmail] = useState<boolean>(false)

  const validation = (e: any) => {
    e.preventDefault()

    setErrorColorName(false)
    setErrorColorEmail(false)

    const request = {
      name: name.current?.value,
      email: email.current?.value
    }

    if(
        (request.name !== "" && (request.name !== undefined && request.name.length > 8)) &&  
        (request.email !== "" || (request.email !== undefined && request.email.indexOf('@')!==-1) || 
        (request.email !== undefined && request.email.indexOf('.')!==-1))) {

          localStorage.setItem('name', request.name)
          localStorage.setItem('e-mail', (request.email !== undefined ? request.email : "") )

          if (name && name.current) {
            name.current.value = "";
          }

          if (email && email.current) {
            email.current.value = "";
          }
          
          setSubmit(true)
    }

    if(request.name === "" || (request.name !== undefined && request.name.length <= 8)) {
      setErrortName(true)
      setErrorColorName(true)

      if (name && name.current) {
        name.current.value = "";
      } 

    } else {
      setErrortName(false)
    }

    if(request.email === "" || (request.email !== undefined && request.email.indexOf('@')===-1) || 
      (request.email !== undefined && request.email.indexOf('.')===-1)) {
        setErrorEmail(true)
        setErrorColorEmail(true)

        if (email && email.current) {
          email.current.value = "";
        }

      } else {
        setErrorEmail(false)
      }   
  }

  const fullRegistration = () => {
    setSubmit(false)
  }

  return (
    <>
      {
        submit === false &&

        <div className={styles.news}>
          <h1 className={styles.titleNews}>Inscreva-se para nossas promoções de Black Friday!</h1>

          <form>
            <input type="text" placeholder="Digite seu nome" style={{textAlign: "center", border: errorColorName ? '1px solid #FF0000': 'initial'}} ref={name} />
            <input type="email" placeholder="Digite seu email" style={{textAlign: "center", border: errorColorEmail ? '1px solid #FF0000': 'initial'}} ref={email} />

            <button onClick={validation} className={styles.newsButton}>Eu quero!</button>
          </form>

          <div className={styles.error}>
            <p className={styles.errorName}>{errorName === true && "Preencha com seu nome completo"}</p>
            <p className={styles.errorEmail}>{errorEmail === true && "Preencha com um e-mail válido"}</p>
          </div>
        </div>
      }

      {
        submit === true &&

        <div className={styles.success}>
          <p className={styles.confirmation}>Seu e-mail foi cadastrado com sucesso!</p>
          <p className={styles.message}>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
        
          <button onClick={fullRegistration} style={{textAlign: "center"}}>Cadastrar novo e-mail</button>
        </div>
      }
    </>
  )
}

export default Newsletter
