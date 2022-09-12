import React from 'react';
import { BiCheck } from 'react-icons/bi';
import "../style/Service.css";
import { GiFlowers } from "react-icons/gi"
import { BsArrowsFullscreen } from "react-icons/bs"
import { MdOutlineLocalMovies } from "react-icons/md"
const Services = () => {
    return (
        <section id="services">
            {/* <h5>What i offer </h5> */}
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>< MdOutlineLocalMovies /> PHYSOFT MOVIES</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>

                    </ul>
                </article>
                {/* end of ui/ux  */}
                <article className="service">
                    <div className="service__head">
                        <h3><GiFlowers /> GRAFTSOFT</h3>
                    </div>
                    <ul className="service__list">

                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>

                    </ul>
                </article>
                {/* end of web development  */}
                <article className="service">
                    <div className="service__head">
                        <h3><BsArrowsFullscreen /> PHYSOFT Creator</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>VISNES VISNAS VISCOS VESCAS VUSCAS VASCOS VESCOS VISCOS VAS</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
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