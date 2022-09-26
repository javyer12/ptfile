import React from 'react'
import { pro1 } from "../../material/avatar4.jpg";
const diploma = [
      {
            id: 1,
            url: "https://drive.google.com/file/d/1_ElLn3vIztXkP8AY_IaHQXPkyURawUb3/view?usp=sharing",
            name: "Javascript Practical Course"
      },
      {
            id: 2,
            url: "https://drive.google.com/file/d/15AEBwoj78_KfDZVMA2LZsi3thN6sK7va/view?usp=sharing",
            name: "Typescript Course: Advanced Types and Functions"
      },
      {
            id: 3,
            url: "",
            name: ""
      }
]
function Diploma() {
      return (
            <div className="container mt-5">

                  <div className="row ">
                        <div className=" col-5 card h-50 w-48 p-4 m-4 rounded-4 ">
                              <img src={pro1} width="300px" height="450px" className="card-img-top rounded-4 " alt="elizabeth gallery" />
                              <div className="card-body">
                                    <h5 className="card-title">Backend course with Node js: REST API with Express.js</h5>
                              </div>
                              <div className="card-footer">
                                    <small className="text-muted">Node js | Express.js</small>
                              </div>
                        </div>
                        <div className=" col-5 card h-50 w-48 p-4 m-4 rounded-4 ">
                              <img src={pro1} width="300px" height="450px" className="card-img-top rounded-4 " alt="elizabeth gallery" />
                              <div className="card-body">
                                    <h5 className="card-title">Backend course with Node js: REST API with Express.js</h5>
                              </div>
                              <div className="card-footer">
                                    <small className="text-muted">Node js | Express.js</small>
                              </div>
                        </div>
                  </div>

                  <div className="row">
                        <div className="col-6">hola</div>
                        <div className="col-6">hola</div>
                  </div>
            </div>
      )
}

export default Diploma;