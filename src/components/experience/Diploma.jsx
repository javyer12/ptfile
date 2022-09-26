import React from 'react'
import pro10 from "../../material/diploma/pro10.jpeg";
import pro1 from "../../material/diploma/pro1.jpeg";
import pro2 from "../../material/diploma/pro3.jpeg";
const diploma = [
      {
            id: 1,
            url: "../../material/diploma/pro1.jpeg",
            name: "Javascript Practical Course"
      },
      {
            id: 2,
            url: "https://drive.google.com/file/d/15AEBwoj78_KfDZVMA2LZsi3thN6sK7va/view?usp=sharing",
            name: "Typescript Course: Advanced Types and Functions"
      },
      {
            id: 3,
            url: { pro1 },
            name: ""
      }
]
function Diploma() {
      return (
            <div className="container mt-5 ">

                  <div className="row  justify-content-md-center">
                        <div className=" col-5 card h-50 w-49 p-4 m-3 rounded-4 bg-light ">
                              <img src={pro10} width="250px" height="400px" className="card-img-top rounded-4 " alt="elizabeth gallery" />
                              <div className="card-body">
                                    <h5 className="card-title">Backend course with Node js: REST API with Express.js</h5>
                              </div>
                              <div className="card-footer">
                                    <small className="text-muted">Node js | Express.js</small>
                              </div>
                        </div>
                        <div className=" col-5 card h-50 w-49 p-4  m-3 rounded-4 ">
                              <img src={pro2} width="200px" height="400px" className="card-img-top rounded-4 " alt="elizabeth gallery" />
                              <div className="card-body">
                                    <h5 className="card-title">Advanced English Conversation Course</h5>
                              </div>
                              <div className="card-footer">
                                    <small className="text-muted">English Course</small>
                              </div>
                        </div>
                  </div>

                  {diploma.map((item) => (
                        <div className="row  justify-content-md-center">
                              <div className=" col-5 card h-50 w-49 p-4 m-3 rounded-4 ">
                                    <img src={item.url} width="250px" height="400px" className="card-img-top rounded-4 " alt={item.description} />
                                    <div className="card-body">
                                          <h5 className="card-title">{item.name}</h5>
                                    </div>
                                    <div className="card-footer">
                                          <small className="text-muted">{item.id}. Node js | Express.js</small>
                                    </div>
                              </div>
                        </div>
                  ))}

            </div>
      )
}

export default Diploma;