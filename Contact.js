import React, { useEffect, useState } from 'react';
import Menu from '../home/Menu';
import Footer from '../home/Footer';
import '../site-css/menu.css';

function Contact() {
  /*const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://innotechwave.pythonanywhere.com/accounts/users/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Chargement...</div>;
  }
  /* Afficher les données récupérées }
      {data.map(item => (
        <div key={item.id}>{item.first_name} {item.last_name}</div>
      ))*/
  return (
    <div>
       <Menu />
    </div>
  );
}

export default Contact;
