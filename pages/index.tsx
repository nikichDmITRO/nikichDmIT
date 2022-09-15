import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export const socials = [
  {
    id: 1,
    icon: "youtube",
    path: "https://www.youtube.com/channel/UCYmtNPKigJbDR5Lm5b1bctQ/featured",
  },
  {
    id: 2,
    icon: "instagram",
    path: "https://www.instagram.com/nikichdmit/",
  },
  {
    id: 3,
    icon: "linkedin",
    path: "https://www.linkedin.com/in/%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B0-%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-830246244/",
  },
  {
    id: 4,
    icon: "vk",
    path: "https://vk.com/id399082971",
  },
  {
    id: 5,
    icon: "github",
    path: "https://github.com/nikichDmITRO",
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.contactflex}>
          <img src="/1.jpg" alt="" />
          <div className={styles.flDiv}>
            <h2>Никита Дмитраченко [nikichDmIT]</h2>
            <h3>JavaScript Developer</h3>
            <h4>HTML, CSS, JavaScript, React, Redux, Git, NEXT, MERN</h4>
          </div>
          <img className={styles.logo} src="dquzqtpc.png" alt="" />
        </div>

        <p>
          Хорошие знания в <span>HTML,CSS</span>(грид, фдекс,адаптива). [Верстал
          макеты , лендинги]. Базовое понимание и знание основных концепций
          <span> JavaScript</span>(объекты , класы, основные приципы ООП,
          прототипы, промисы).[ Читал документацию, проходил видеотуториалы,
          подключал скрипты в html]. <span> React, Redux</span>.[Проходил курс
          айтикамасутра(100 выпусков) на ютубе, читал документацию, разрабатывал
          приложение в стартаппе]. <span> Git, GitHub</span>. [Использую в
          разработке систему контроля версий Git, постоянно делаю коммитты в
          GitHub]. Понимание основных концепций стэка <span> МЕRN</span>(
          монгодб, експресс, реакт, нодjs). Понимаю и знаю базу http запросов,
          построение как эндпоинтов на бэкенде, так и запросов на сервер с
          фронта. Работал с <span>NEXT</span>. Постоянно обучаюсь и пишу свои
          проекты. АНГЛИЙСКИЙ УРОВЕНЬ А1, самостоятельно изучаю язык. Очень
          увлечен разработкой. Умею решать проблемы самостоятельно. Могу
          действовать как самостоятельная единица разработки. Нравятся концепции
          и идеи личного развития, а через разработку и погружение в айти
          отрасль хочется самореализовываться. Очень много идей и мыслей на этот
          счет. Спасибо за потраченное время для ознакомления с моей личностью.
        </p>

        <ul>
          {socials &&
            socials.map(({ id, icon, path }: any) => (
              <li key={id}>
                <a href={path} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
