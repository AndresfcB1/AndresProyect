import { useState, useEffect } from "react";
import axios from "axios";
import '../css/main.css'
import '../css/formatoHome.css'
import '../plugins/fontawesome-free/css/all.min.css'
import'../dist/css/adminlte.min.css'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";

const Home = ({history}) => {
  const [error, setError] = useState("");
  const [homeData, setHomeData] = useState("");

  useEffect(() => {
    const fetchHomeDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/home", config);
        setHomeData(data.data);
        console.log(homeData)
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized yet");
      }
    };

    fetchHomeDate();
  }, [history]);

  
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>
      <Header/>
    <div className="home">
  

    <div class="container">
    <h1 class='tituloHome'>Corotto</h1>

<h2 > Document Management App</h2>

<h3> Creator</h3>

<br/>

    <table class="integrantes" >
        
          <tr>
            
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            
          </tr>
        
        <tbody>
          <tr>
           
            <td>Andrés Coronado</td>
            <td>andrescoronadob5@gmail.com</td>
           
          </tr>
          

          

        </tbody>
      
      </table>
     
    </div>
    <Footer></Footer>
  </div>
  
  </div>
  );
};

export default Home;