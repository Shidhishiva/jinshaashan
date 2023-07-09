import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Art & Design</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo sed incidunt molestiae eveniet, quisquam vel?
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta quisquam provident inventore accusamus quasi,
                    aspernatur eveniet dolorum reiciendis similique nostrum.
                </p>
            </div>
            <div className="text-block">
                <h2>Pixel Art and Animation</h2>
                <br />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores, temporibus dolore nihil ducimus ea id nulla at amet
                    omnis enim rerum! Odio aspernatur accusamus eaque rerum
                    explicabo, maxime eos voluptate.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Eight Frame Run cycle animated by
                            myself, original sprite by kevink
                        </sub>
                    </p>
                </div> */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, ullam, magnam accusantium earum omnis reprehenderit
                    hic at tempora similique, soluta quidem voluptates vel
                    aspernatur fugiat quia eum tempore. Libero esse magnam
                    commodi cumque dolorem ad optio dolorum tenetur ea quia!
                </p>
                <br />
                {/* <h3>Video Links:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=pDtUX3ZVHJ0"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Walk Cycle Time-lapse
                                and Tutorial
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=xXEDKQ3wSfM"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art "Bag Up" Animation
                                Time-lapse
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=leZzb-Y0SKQ"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Bipedal Creature Run
                                Cycle Time-lapse
                            </p>
                        </a>
                    </li>
                </ul> */}
                <br />
                {/* <div className="captioned-image">
                    <img src={gsts} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> More pixel art: Enemy Lineup from a
                            game I worked on called Guntattchment Saga
                        </sub>
                    </p>
                </div> */}
                <br />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vel repudiandae veritatis libero eum at ipsam doloremque
                    quam porro ex qui suscipit dolorem fugit debitis, ut est!
                    Neque quaerat rem laudantium eaque, quae consectetur
                    perspiciatis totam! Pariatur facere eos quo dicta magni
                    recusandae, libero officia ipsum quibusdam eum, possimus
                    vitae. Adipisci.
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
