import React from 'react'
const dataTag = [
      {
            id: 1,
            name: "Reac Js",
            class: "m-2 badge text-bg-primary"
      },
      {
            id: 2,
            name: "JavaScript",
            class: "m-2 badge text-bg-secondary "
      },
      {
            id: 3,
            name: "C#",
            class: "m-2 badge text-bg-secondary "

      },
      {
            id: 5,
            name: "PostgreSQL",
            class: "m-2 badge text-bg-success "

      },
      {
            id: 6,
            name: "Python",
            class: "m-2 badge text-bg-danger"
      },
      {
            id: 7,
            name: "TypeScript",
            class: "m-2 badge text-bg-dark"
      },
      {
            id: 8,
            name: "English",
            class: "m-2 badge text-bg-info"
      },
      {
            id: 9,
            name: "Webpack",
            class: "m-2 badge text-bg-secondary"
      },
      {
            id: 10,
            name: "Node js",
            class: "m-2 badge text-bg-light"
      },
]
export function Tags() {
      return (
            <div className="container-fluid d-flex justify-content-center">
                  {dataTag.map((item) => (
                        <span key={item.id} className={item.class}>{item.name}</span>
                  ))}
            </div>
      )
}

export function Tag(props) {
      return (
            <div className="container-fluid d-flex justify-content-center">
                  <span className={props.class}>{props.name}</span>
                  {/* <span class="badge text-bg-secondary">Secondary</span>
                  <span class="badge text-bg-success">Success</span>
                  <span class="badge text-bg-danger">Danger</span>
                  <span class="badge text-bg-warning">Warning</span>
                  <span class="badge text-bg-info">Info</span>
                  <span class="badge text-bg-light">Light</span>
                  <span class="badge text-bg-dark">Dark</span> */}
            </div>
      )
}

