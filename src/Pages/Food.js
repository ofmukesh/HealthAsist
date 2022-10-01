import React from "react";

const Food = () => {
  return (
    <div className="food-background">
   <section id="home">
    <div class="container-fluid px-0 top-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <h1>Good food choices are good investments.</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section class="container">
             <hr class="horizontal"/>   
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Food Suggested</h5>
                            <p class="card-text food-desc">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Avoid Food</h5>
                            <p class="card-text food-desc">With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div> 
    </section>
    </div>
  )
}

export default Food;