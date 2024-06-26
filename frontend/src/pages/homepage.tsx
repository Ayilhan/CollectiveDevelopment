import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Competitions from "../components/competitions";
import Header from "../components/header";
import styles from "./homepage.module.css";

const HomePage: FunctionComponent = () => {
    const navigate = useNavigate();

    const buttonWriteClick = useCallback(() => {
      navigate("/write");
    }, [navigate]);
  
    const buttonArtClick = useCallback(() => {
      navigate("/art");
    }, [navigate]);
  
    const buttonCosplayClick = useCallback(() => {
      navigate("/cosplay");
    }, [navigate]);
    
    return(
        <div className={styles.div}>
            <Header />
            <div className={styles.lineParent}>
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
                <div className={styles.lineChild} />
            </div>
            <div className={styles.div2024}>
                <p className={styles.p}>2024<br/>2024<br/>2024<br/>2024<br/>2024</p>
            </div>
            <img className={styles.ellipse1} alt="" src="/ellipse1.svg" />
            <img className={styles.ellipse2} alt="" src="/ellipse2.svg" />
            <img className={styles.image} alt="" src="/main_image.png" />
            <div className={styles.title}>
                {/* <b className={styles.b1}>ФЕСТИВАЛЬ</b> */}
                <img  className={styles.festImage} alt="" src="/fest.png" />
                <b className={styles.b}>
                    <p className={styles.p}>ПОПУЛЯРНОЙ</p>
                    <p className={styles.p}>КУЛЬТУРЫ</p>
                </b>
            </div>
            <div className={styles.description}>
                <div className={styles.line} />
                <div className={styles.descriptionText}>
                    <p className={styles.p}>Ты увидишь невероятное объединение<br />
                    выставок, соревнований, презентаций, мастер-классов, <br />
                    а так же наш традиционный конкурс косплея!</p>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.infoAlign}>
                    <img className={styles.infoIcon} alt="" src="/icon_mappin.svg" />
                    <div className={styles.infoText}>
                        <p className={styles.p}>13 августа <br /> Вторник</p>
                    </div>
                    </div>
                    <div className={styles.infoAlign}>
                    <img className={styles.infoIcon} alt="" src="/icon_clock.svg" />
                    <div className={styles.infoText}>
                        <p className={styles.p}>С 12:00 <br /> до 20:00</p>
                    </div>
                    </div>
                    <div className={styles.infoAlign}>
                    <img className={styles.infoIcon} alt="" src="/icon_calendar.svg" />
                    <div className={styles.infoText}>
                        <p className={styles.p}>Стадион <br /> ‘Юность’</p>
                    </div>
                </div>
            </div>
            <div className={styles.socialMedia}>
                <img
                className={styles.socialMediaIcon} alt=""
                src="/icon_social_media_inst.svg"
                />
                <img
                className={styles.socialMediaIcon} alt=""
                src="/icon_social_media_telegram.svg"
                />
                <img
                className={styles.socialMediaIcon} alt=""
                src="/icon_social_media_vk.svg"
                />
            </div>

            <b className={styles.festival}>FESTIVAL</b>
            <b className={styles.geek}>GEEK</b>
            <div className={styles.competitionsTitle}>КОНКУРСЫ ФЕСТИВАЛЯ</div>
            <div className={styles.competitionsBlock}>
                <Competitions
                    cover="/cover_cosplay.jpg"
                    title="КОНКУРСЫ ДЛЯ КОСПЛЕЕРОВ"
                    desc="Участвуй в одном из трех категорий и вдохнови других своим креативом!"
                    button="unset"
                    buttonClick={buttonCosplayClick}
                />
                <Competitions
                    cover="/cover_write.jpg"
                    title="КОНКУРС РАССКАЗОВ"
                    desc="Открой новые горизонты в жанре научной фантастики с нами"
                    button="unset"
                    buttonClick={buttonWriteClick}
                />
                <Competitions
                    cover="/cover_art.jpg"
                    title="КОНКУРС РИСУНОКОВ"
                    desc="Творческий конкурс для традиционных и диджитал художников"
                    button="unset"
                    buttonClick={buttonArtClick}
                />
            </div>
            {/* <Footer logo={"45y4y"} PhoneNumber={"97890059"} email={"4ty4y"} externalLink={"4yt4"} /> */}
        </div>
    );
};

export default HomePage;