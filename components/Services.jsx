import {BiCheck} from 'react-icons/bi';
import "../style/Service.css";

const Services = () => {
    return (
        <section id="services">
        <h5>What i offer </h5>
        <h2>Services</h2>

        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>UI/UX</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                  

                </ul>
            </article>
            {/* end of ui/ux  */}
            <article className="service">
                <div className="service__head">
                    <h3>Web Developmet</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>

                </ul>
            </article>
            {/* end of web development  */}
            <article className="service">
                <div className="service__head">
                    <h3>Content Creation</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                    <li>
                        <BiCheck className="service__list-icon"/>
                        <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                    </li>
                </ul>
            </article>
            {/* end of content creation  */}
        </div>
        </section>
    )
}

export default Services;