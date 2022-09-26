import React from 'react';
import AVTR1 from "../material/darleny.jpeg";
import AVTR2 from "../material/avatar2.jpg";
import AVTR3 from "../material/avatar3.jpg";
// import AVTR4 from "../material/avatar4.jpg";
import "../style/Testimonial.css";

const data = [
  {
    id: 1,
    name: "Darleny Cruz",
    img: AVTR1,
    description: ' "I’ve tried using different softwares. The computer is not my strong side. There is excellent support behind Physoft and people to walk you through it. If you have any questions, they’ll go over that and explain to you how to do that. "'
  },
  {
    id: 2,
    name: "Roberto Carlos",
    img: AVTR2,
    description: '  "It’s really helped us grow. I can keep all of the customer’s information in there so if I need to look up something in the future or call them for a follow up, I have all of that there, so it’s really helped us organize the whole business."'
  },
  {
    id: 3,
    name: "Pedro Juarez",
    img: AVTR3,
    description: ' "There’s no way we could have hired this many people and gotten so much business had we not had all of those back office systems figured out. It’s been easier growing our company with a system that is so easy and scalable."'
  },
  // {
  //   id: 4,
  //   name: "Pedro Juarez",
  //   img: AVTR4,
  //   description: '   lorem lorem ipsum dolor sit amet, consectetur adip'
  // },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2> Testimonials</h2>
      <div className=" container testimonials__container   ">
        {data.map((item) => (
          <article key={item.id} className="testimonial testing " >
            <div className="client__avatar ">
              <img src={item.img} alt="client avatar" />
            </div>
            <h5 className="client__name"> {item.name}</h5>
            <small className="client__review ">
              {item.description}
            </small>
            <a href="#contact" className="btn">Get in touch</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
