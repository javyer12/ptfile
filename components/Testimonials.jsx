import AVTR1 from "../material/avatar1.jpg";
import AVTR2 from "../material/avatar2.jpg";
import AVTR3 from "../material/avatar3.jpg";
import AVTR4 from "../material/avatar4.jpg";
import "../style/Testimonial.css";

const data = [
  {
    id: 1,
    name: "Pedro Juarez",
    img: AVTR1,
  },
  {
    id: 2,
    name: "Pedro Juarez",
    img: AVTR2,
  },
  {
    id: 3,
    name: "Pedro Juarez",
    img: AVTR3,
  },
  {
    id: 4,
    name: "Pedro Juarez",
    img: AVTR4,
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Cliets</h5>
      <h2> Testimonials</h2>
      <div className=" container testimonials__container">
        {data.map((item) => (
          <article key={item.id} className="testimonial testing" >
            <div className="client__avatar">
              <img src={item.img} alt="client avatar" />
            </div>
            <h5 className="client__name"> {item.name}</h5>
            <small className="client__review">
              lorem lorem ipsum dolor sit amet, consectetur adip
            </small>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
