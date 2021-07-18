import React from 'react';
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import styles from './produto.module.css'
import Header from '../../components/Header/Header';

const Produto = () => {

  interface Produto{
    id: number      
    title: string    
    price: number 
    description: string  
    category: string 
    image: string
  }

  const [item, setItem] = React.useState<Produto>()
  const params = useParams<any>()

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
     .then(resposta => setItem(resposta.data))
  }, [params.id])

  return (
    <div className={styles.home}>
      <Helmet>
        <title>Produtos</title>
      </Helmet>

      <Header />

      <div className={styles.productList}>
        <div className={styles.product}>
          <span>{item?.category}</span>
          <h3>{item?.title}</h3>
          <img src={item?.image} alt={item?.title}/>
          <small className={styles.price}>R$ {item?.price}</small>
          <small>{item?.description}</small>
        </div>
      </div>
    </div>
  );
}

export default Produto;