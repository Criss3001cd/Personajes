import React from "react";

const Header = () =>(
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="http://localhost:3000">Clases</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="file:///C:/proyectos/JS/react/primer_proyecto/public/personaje.html">Personajes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="http://localhost:3000">Disabled</a>
      </li>
    </ul>
  </div>
  {/* <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div> */}
</div>
);

export default Header;