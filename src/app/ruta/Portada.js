import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav, Row, Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navsin from "./navsin";



import styled from "styled-components";



const Styles = styled.div`
/*===== BLOG STYLE ONE =====*/
.blog-style-one {
  margin-top: 50px;
}
.blog-style-one .blog-image {
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  position: relative;
}
.blog-style-one .blog-image .category {
  background-color: var(--primary);
  color: var(--white);
  font-size: 13px;
  padding: 7px 20px;
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 30px;
}
.blog-style-one .blog-image img {
  width: 100%;
  -webkit-transition: all 0.2s ease-out 0s;
  -moz-transition: all 0.2s ease-out 0s;
  -ms-transition: all 0.2s ease-out 0s;
  -o-transition: all 0.2s ease-out 0s;
  transition: all 0.2s ease-out 0s;
}
.blog-style-one .blog-image:hover img {
  -webkit-transform: rotate(1deg) scale(1.1);
  -moz-transform: rotate(1deg) scale(1.1);
  -ms-transform: rotate(1deg) scale(1.1);
  -o-transform: rotate(1deg) scale(1.1);
  transform: rotate(1deg) scale(1.1);
}
.blog-style-one .blog-content {
  padding: 30px;
  border: 1px solid var(--light-1);
  border-radius: 0 0 8px 8px;
  border-top: none;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog-style-one .blog-content {
    padding: 25px;
  }
}
@media (max-width: 767px) {
  .blog-style-one .blog-content {
    padding: 20px;
  }
}
.blog-style-one .blog-content .blog-title {
  display: block;
  margin-bottom: 10px;
}
.blog-style-one .blog-content .blog-title a {
  font-weight: 600;
  color: var(--black);
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  line-height: 30px;
}
@media (max-width: 767px) {
  .blog-style-one .blog-content .blog-title a {
    line-height: 24px;
  }
}
.blog-style-one .blog-content .blog-title a:hover {
  color: var(--primary);
}
.blog-style-one .blog-content span {
  font-size: 14px;
  line-height: 20px;
  color: var(--dark-3);
  margin-top: 8px;
  margin-right: 12px;
  display: inline-block;
}
.blog-style-one .blog-content .text {
  color: var(--dark-3);
  margin-top: 16px;
}
.blog-style-one .blog-content .more {
  text-transform: uppercase;
  font-weight: 600;
  color: var(--primary);
  margin-top: 30px;
  display: inline-block;
}
.blog-style-one .blog-content .more:hover {
  color: var(--primary-dark);
}

/*# sourceMappingURL=blog-01.css.map */

`


// const divStyle = {
//     background-color: '#611A8A';
//   };

function Portada (){
    const navigation = useNavigate();

    return(
        <div>
           <Navsin/>

          
          <br/>
            <br/>
            
<div class="profile">
   <div class="">
      <div class="">
         <div class="container">
            <div class="profile-content">
               <div class="profile-card">
                  <div class="profile-card-wrapper">

                     <div class="card-content text-center rounded-buttons">
                     <Row>
        <Col></Col>
        <Col xs={6}> <h3 class="card-title">HM SALON</h3>
        <br/>
                        <p class="text">
                           Somos un salón de belleza de excelencia, ubicados en la 
                           comuna de Santiago. Nos especializamos en cortes de cabello
                           y barba, además de tratamientos de cabello tales como teñidos
                           y alisados.
                        </p></Col>
        <Col></Col>
      </Row>
                       
                        <a
                           href=""
                           class="btn primary-btn rounded-full"
                           data-toggle="modal"
                           data-target="#contact-modal"
                           >
                        Ven a visitarnos!
                        </a>
                     
                     <center>
                     <div class="card-profile">
                        <center><img
                           src="https://i.ibb.co/QnDkNdb/blog-4-original-1.jpg"
                        //    alt="Profile"
                        width="900" height="500"  /></center>
                     </div>
                     </center>
                     </div>

                     <br/>
                        <br/>
                     <div class="card-social text-center">
                        <ul>
                           <h3 class="card-title">Algunos De Nuestros Servicios</h3>
                        </ul>
                     </div> 
                  
                  </div>
                  
               </div>
               
            </div>
         </div>
      </div>
   </div>
</div>





<Styles>
      
<section class="blog-area pb-5">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-4 col-md-8 col-sm-10">
            
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  <a href="javascript:void(0)"
                     ><img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/sXIAc0A14CYhT5MI4o9E3R0BMRQ=/1024x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/SJP6QGZPDNTDMCWJWMASXWA2UA.jpg" alt="Blog"
                     width="100%" height="100%" onClick={() => navigation("/asignarhora")}/></a>
                  {/* <a href="javascript:void(0)" class="category">Cortes de Pelo</a> */}
               </div>
               <div class="blog-content">
               <h3 class="card-title">Cortes de pelo</h3>
                  <h5 class="blog-title">
                     <a href="javascript:void(0)" onClick={() => navigation("/asignarhora")}>
                     Consulta horas con nuestros especialistas!
                     </a>
                  </h5>
                  <p class="text">
                     Hacemos el trabajo a tu gusto para que te veas
                     como siempre quisiste
                  </p>
               </div>
            </div>
            
         </div>
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  <a href="javascript:void(0)"
                     ><img src="https://i.insider.com/5ea3430538bf2312db1c7463?width=1000&format=jpeg&auto=webp" alt="Blog"
                     width="100%" height="100%"onClick={() => navigation("/asignarhora")}/></a>
                  {/* <a href="javascript:void(0)" class="category">Teñidos</a> */}
               </div>
               <div class="blog-content">
               <h3 class="card-title">Teñidos</h3>
                  <h5 class="blog-title">
                     <a href="javascript:void(0)" onClick={() => navigation("/asignarhora")}>
                     Agenda horas para tu color ideal!
                     </a>
                  </h5>
                  <p class="text">
                     Tiñe tu cabello como siempre quisiste! Dejamos tu cabello
                     del color que tu quieras con el mayor cuidado
                  </p>
               </div>
            </div>
          
         </div>
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  <a href="javascript:void(0)"
                     ><img src="https://img.freepik.com/foto-gratis/hombre-salon-peluqueria-haciendo-corte-pelo-barba_1303-20948.jpg?w=1380&t=st=1670402935~exp=1670403535~hmac=7dca356d04f25ea15ad94e9a63acf7bb38d63dce7858120835013756c5568f81" alt="Blog"
                     width="100%" height="100%"onClick={() => navigation("/asignarhora")}/></a>
                  {/* <a href="javascript:void(0)" class="category">Cortes de Barba</a> */}
               </div>
               <div class="blog-content">
               <h3 class="card-title">Cortes de Barba</h3>
                  <h5 class="blog-title">
                     <a href="javascript:void(0)" onClick={() => navigation("/asignarhora")}>
                     Reserva hora para tu volumen ideal!
                     </a>
                  </h5>
                  <p class="text">
                     Nuestros peluqueros son expertos en cortes pequeños, grandes
                     además de acentación de volumen
                  </p>
               </div>
            </div>
           
         </div>

      </div>
      
   </div>
   
    </section>

    </Styles>

        </div>
    )

}

export default Portada;