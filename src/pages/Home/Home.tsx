import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';

import axios from 'axios'
import styles from './home.module.css'
import Banner from '../../components/Banner/Banner';
import Newsletter from '../../components/Newsletter/Newsletter'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  interface Produto{
    id: number      
    title: string    
    price: number 
    description: string  
    category: string 
    image: string
  }

  const [produtos, setProdutos] = React.useState<Produto[]>([])

  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(resposta => setProdutos(resposta.data))
  }, [])

  return (
    <div className={styles.home}>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Header />
      <Banner />
      <Newsletter />

      <div className={styles.productList}>
        {produtos.map((item: Produto) => (
          <Link to={`produto/${item.id}`} key={item.id}>
          <div key={item.id} className={styles.product}>
            {/* <p>{item.category}</p> */}
            {/* <h3>{item.title}</h3> */}
            <img src={item.image} alt={item.title} /> <br />
            {/* <small>R$ {item.price}</small> */}
            {/* <p>{item.description}</p><br/> */} <br />
            {/* <Link to={`produto/${item.id}`}>Comprar</Link> */}
            
          </div> 
          </Link> 
        ))}
      </div>
      
      <Footer />
      
    </div>
  );
}

export default Home;