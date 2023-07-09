import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>To Jinshaashan INFO LLP</h3>
            <br />
            <div className="text-block">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Unde, necessitatibus amet numquam fuga non asperiores. Ab
                    quas minima quibusdam obcaecati?
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Optio assumenda, molestias labore quasi ducimus laboriosam
                    esse voluptatibus, nulla consectetur ea cum iure totam quae
                    distinctio excepturi perspiciatis obcaecati omnis quas?{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:sidshiva001@gmail.com">
                        sidshiva001@gmail.com
                    </a>
                </p>
            </div>
            {/* <ResumeDownload /> */}
            <div className="text-block">
                <h3>About Jinshaashan</h3>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae, nihil sunt vel maiores ipsum et vitae esse
                    beatae ducimus nisi eaque perferendis rem, a doloremque
                    laboriosam quidem quisquam quibusdam iusto ea. At corporis,
                    ratione, quibusdam mollitia harum odio eius odit provident
                    impedit dolores quasi saepe delectus vitae ea excepturi
                    perspiciatis consequuntur aliquam. Possimus repellat iusto
                    autem ipsam non nesciunt incidunt!
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div> */}

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda iusto unde delectus laboriosam distinctio eius.
                    Nemo, eligendi animi sequi, vero possimus minima quos
                    voluptatem exercitationem nihil velit maiores cum sapiente
                    quisquam recusandae reprehenderit molestiae sed soluta
                    placeat fugiat? Animi, voluptas.
                    {/* <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/scott-bass-189a7919b/"
                    >
                        Scott Bass
                    </a> */}
                    {/* . We worked on many projects together, including chat bots,
                    multiple game projects, apps, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page. */}
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio unde exercitationem, explicabo cumque blanditiis
                    commodi nostrum tempore quisquam. Impedit, quisquam
                    repellendus explicabo sed beatae odio atque consectetur
                    quibusdam sapiente fuga voluptas dolore velit ab, fugiat
                    quaerat reiciendis illum! Obcaecati necessitatibus excepturi
                    modi ex et eveniet tenetur repudiandae sed. Nesciunt, ipsam.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        {/* <h3>My Hobbies</h3> */}
                        <br />
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, nostrum quia placeat incidunt
                            suscipit molestiae!{' '}
                            <Link to="/projects/music">Music Production</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art</Link>. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Repudiandae ratione ullam, libero maxime eius
                            voluptas enim tempora rerum. Maxime, assumenda.
                        </p> */}
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Reprehenderit eveniet autem nam laudantium
                            officiis cum quas? Quaerat magni dolore non fugiat
                            deserunt. Veritatis sit aspernatur quas nulla iure
                            repellat beatae.
                        </p>
                    </div>
                    {/* <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div> */}
                </div>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum cum, minus labore vero architecto expedita. Quod
                    pariatur illum animi, temporibus, dolor beatae odit sunt ut
                    assumenda voluptatum aspernatur? Consequatur, velit.{' '}
                    <a rel="noreferrer" target="_blank" href="">
                        @jinshaashaninfo
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:sidshiva001@gmail.com">
                        sidshiva001@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
