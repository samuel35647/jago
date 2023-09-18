import React from "react";
import style2 from './Printivo2.module.css'

const Printivo2 =()=>{
    return(
        <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">All products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Become a Reseller</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Merch Store</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Merch Store</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Sign in</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Create Account</a>
              </li>
              <img src="/images/tivo dustbin.svg" alt=""  />
            </ul>
          </div>
        </div>
      </nav> 
    )
}


export default Printivo2