import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>Ventures</h3>
            <br />
            <div className="text-block">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsum asperiores. Beatae neque consequuntur
                    provident voluptates ad ducimus quas pariatur tempora minima
                    explicabo modi, exercitationem voluptas debitis illum? Quos
                    accusantium reiciendis, molestiae esse numquam maiores cum
                    ipsam quo minus pariatur fugit vitae? Eos similique corrupti
                    inventore accusamus doloremque debitis voluptatibus.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    odit nulla sit exercitationem beatae repellat ipsum
                    voluptatum quisquam. Odio dignissimos cum eveniet cumque hic
                    possimus fuga necessitatibus alias nisi blanditiis,
                    consectetur adipisci unde voluptatum veniam iste beatae
                    culpa fugit impedit officiis tenetur! Soluta reiciendis quo
                    cupiditate ab hic eos neque. Ea iure voluptatum est
                    quibusdam, ratione repellat quos facilis tenetur?
                </p>
                <br />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eum assumenda impedit voluptatem. Corporis sed distinctio
                    provident sit, eligendi unde quasi.
                </p>
            </div>
            <h2>Exploring house</h2>
            <br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                voluptates recusandae consequatur officiis eos itaque,
                reprehenderit dolores corporis aspernatur saepe..
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                perferendis architecto optio quos culpa doloremque inventore
                cupiditate molestiae, ducimus quae?
            </p>
            <br />

            <MusicPlayer
                src={house}
                title="Timeless"
                subtitle="Jinshaanshan INFO LLP - 2023"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            {/* <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A screenshot of the project file of
                        Timeless. 64 tracks in total.
                    </sub>
                </p>
            </div> */}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                sint! Reiciendis modi molestiae nostrum nemo facere odit ipsum
                reprehenderit iure eum quod, quam qui praesentium officiis
                aliquid velit ducimus totam esse provident voluptatibus incidunt
                asperiores illo corrupti eaque. Beatae, voluptatem? Aspernatur
                possimus repellat et id veniam ullam alias maiores? Soluta.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                non, quod quam earum harum suscipit beatae ut sit distinctio.
                Harum perferendis eius doloribus quam cumque earum asperiores
                cum accusamus! Recusandae architecto delectus officia quos ad
                vel aliquam cumque nihil fugiat. Magni error impedit repellat
                incidunt sunt accusantium, ea perferendis earum?
            </p>
            <br />
            <h2>Mid-Tempo?</h2>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                ducimus accusantium recusandae necessitatibus reprehenderit,
                dolores eius iure non. Odio voluptatem iure exercitationem
                fugiat eligendi! Quia ex praesentium unde provident nisi
                eligendi, autem eaque distinctio similique dignissimos enim
                doloribus, quis recusandae aliquid cumque consequatur ducimus
                ipsum, non impedit. Suscipit, excepturi inventore.
            </p>
            <br />
            <MusicPlayer
                src={edge}
                title="Edge [W.I.P.]"
                subtitle="Jinshaashan Info LLP - 2023"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                earum ex similique soluta voluptatem doloremque sit eius! Quae
                ab reprehenderit laborum recusandae alias aliquam perspiciatis
                soluta, asperiores necessitatibus. Eum quo quibusdam, sapiente
                maiores tempora quisquam reiciendis suscipit alias molestiae
                ipsam autem numquam neque iste cupiditate voluptatibus excepturi
                eligendi rerum aliquam. Asperiores dolores aspernatur distinctio
                esse officiis quia temporibus quidem mollitia! 
            </p>
            <br />
            <h2>My love for Drum & Bass</h2>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis voluptatibus blanditiis, laborum dolore, consequatur
                necessitatibus ratione ad minima asperiores facere odit at
                distinctio dicta eveniet dolor ducimus cum doloribus similique
                impedit doloremque commodi nam mollitia rerum iure? Debitis, ad
                exercitationem.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                dignissimos consequatur aperiam laboriosam dolore, incidunt
                vitae fugiat eligendi, explicabo perferendis quasi, porro
                molestiae repudiandae doloribus. Eum temporibus magni
                voluptatibus corporis inventore alias! Dolores blanditiis
                quibusdam mollitia quod quasi maxime odio.
            </p>
            <br />
            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="Henry Heffernan - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                quae aperiam ut incidunt iusto fugiat corrupti nemo, reiciendis
                qui a eius quasi iure laborum veritatis adipisci asperiores.
                Iusto est, tenetur, fuga laudantium maiores facilis laborum
                aliquam laboriosam vitae officiis ad quisquam debitis vel quidem
                eos soluta quis quo. Dolorem, enim?
            </p>
            <br />
            <MusicPlayer
                src={dnbDrums}
                title="Break [Drums and Sub]"
                subtitle="Henry Heffernan - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Earum, repudiandae!
                    </sub>
                </p>
            </div>
            <br />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                nulla non dolore mollitia eius. Harum tempore, doloremque
                similique cumque neque animi atque libero laudantium! Excepturi
                cumque reprehenderit at dolorem placeat magnam debitis alias ex.
                Eius quaerat, asperiores illo nostrum quis illum, temporibus
                ullam culpa odit error aspernatur accusamus. Et, adipisci.
            </p>
            <br />
            <h2>The Future of my music</h2>
            <br />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                ullam quo, dicta pariatur sapiente possimus aspernatur labore
                corporis eligendi ducimus aut. Quaerat facilis nesciunt eum
                saepe voluptatem in veritatis repellendus, fugiat amet non
                laboriosam? Molestias dolore natus eveniet doloribus. Aspernatur
                architecto at, amet doloribus sed deserunt tempora fuga unde
                fugiat.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit molestiae necessitatibus doloribus quidem accusamus
                repudiandae consequuntur, earum dolor quas aut eligendi,
                perspiciatis voluptatibus omnis magnam incidunt! Vero ut earum
                fuga fugiat corporis ipsum laborum omnis dolorem maiores
                recusandae nisi nesciunt consequatur ab illum, molestias
                veritatis, impedit mollitia ullam et qui esse unde eligendi sit
                deserunt. Suscipit doloribus dicta id maxime.
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
