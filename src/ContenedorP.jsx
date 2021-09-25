import React from "react";
import Personaje from "./Personaje";

const personajes=  
[

     {
        "nombre" : "Vanessa Van Helsing",
        "edad" : 40,
        "genero": "F",
        "descripcion" : "Ella es la última esperanza de la humanidad para liderar una ofensiva para recuperar lo que se ha perdido en un mundo posterior al Levantamiento, ya que su composición de sangre única le da la capacidad de convertir a los vampiros en humanos.",
        "img":"https://static.wikia.nocookie.net/vanhelsing-syfy/images/b/bc/VH-S4-Vanessa-Van-Helsing.png"
    },
    {
        "nombre" : "Alex Miller",
        "edad" : 45,
        "genero": "M",
        "descripcion" : "Es un infante de marina de carrera con una devoción y una lealtad inquebrantables tanto al deber como a sus pupilos, a pesar de años de aislamiento e interminables ataques de vampiros.",
        "img": "https://static.wikia.nocookie.net/vanhelsing-syfy/images/b/bb/VH-Promo-5x12-The-Voices-01-Axel.jpg"
    },
    {
        "nombre" : "Scarlett Van Helsing",
        "edad" : 40,
        "genero": "F",
        "descripcion" : "Scarlett se preparó para el Levantamiento a una edad temprana. Una asesina de vampiros increíblemente letal, no se anda con rodeos y no muestra piedad por sus enemigos. Scarlett puede manejar casi cualquier cosa.",
        "img":"https://static.wikia.nocookie.net/vanhelsing-syfy/images/3/3d/Skarlett_Harker.jpg"
    },
    {
        "nombre" : "Julius",
        "edad" : 111,
        "genero": "M",
        "descripcion" : "Julius es uno de los mejores vampiros de Seattle: hambriento de poder, agresivo y siempre sediento de sangre.",
        "img":"https://www.syfy.com/sites/syfy/files/cast_vanhelsing_julius.jpg"
    },  
    {
        "nombre" : "Ivory",
        "edad" : 421,
        "genero": "F",
        "descripcion" : "Ella era la líder de La Hermandad; un grupo de vampiros sedientas de sangre hasta que Violet la transformó de nuevo en humana.",
        "img":"https://static.wikia.nocookie.net/vanhelsing-syfy/images/0/06/VH-S4-Ivory-Human.jpg"
    },  
    {
        "nombre" : "Violet Van Helsing",
        "edad" : 20,
        "genero": "F",
        "descripcion" : "Julius fue asignado a entrenar con ella, cuando ella hizo que un vampiro volviera a ser humano y se curó instantáneamente, él teorizó que era una Van Helsing.",
        "img":"https://static.wikia.nocookie.net/vanhelsing-syfy/images/5/5b/Violet_Van_Helsing.jpg"
    },  
    {
        "nombre" : "Jack Van Helsing",
        "edad" : "20",
        "genero": "F",
        "descripcion" : "Ella es el producto de Hansen & Blak-Tek para crear un heredero y un repuesto, ya que en ese momento los dos Van Helsings vivos conocidos eran MIA.",
        "img":"https://es.web.img2.acsta.net/pictures/19/11/14/09/52/1806412.jpg"
    },  
    {
        "nombre" : "Sarah Carol",
        "edad" : 38,
        "genero": "F",
        "descripcion" : "Ella es médica forense y científica. Trabajó junto a Axel Miller hasta que se convirtió en vampiro, pero finalmente se curó y volvió a su estado humano después de que Vanessa Van Helsing la mordiera.",
        "img":"https://es.web.img3.acsta.net/pictures/17/11/03/14/59/4176130.jpg"
    },  
    {
        "nombre" : "William",
        "edad" : 621,
        "genero": "M",
        "descripcion" : "Fue el aprendiz de Jacob Van Helsing y quien lo convirtió en vampiro. Fue el padre de Violet y Jack al usar el ADN de Vanessa Van Helsing y dos de sus soldados.",
        "img":"https://static.wikia.nocookie.net/vanhelsing-syfy/images/0/0d/VH-S4-Hansen.jpg"
    },  
    {
        "nombre" : "Drácula",
        "edad" : "∞",
        "genero": "(M)(F)",
        "descripcion" : "El Oscuro es la madre de todos. Fue despojada de su forma física por los primeros cazadores de vampiros. Su cuerpo anfitrión más reciente fue el de la condesa Olivia von Dracula. Más tarde fue atrapada en el Reino Oscuro por Abraham Van Helsing.",
        "img":"https://static.wikia.nocookie.net/vanhelsing-syfy/images/5/56/VH-S4-Dracula.jpg"
    },  
]

const Contenedor =() =>(
    <>
        {
            personajes.map (conten=><Personaje nombre={conten.nombre} edad={conten.edad} genero={conten.genero} descripcion={conten.descripcion} img={conten.img}/>)
        }

    </>

);

export default Contenedor;