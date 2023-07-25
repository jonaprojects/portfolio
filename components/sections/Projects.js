import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Section from "../UI/Section";

const Projects = (props) => {
  return (
    <section className="">
      <h2 className="text-4xl md:text-5xl font-bold mb-5 mt-5 pt-7 md:pt-11">
        Projects
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161616", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            The Programmer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            A mobile application
          </h4>
          <p className="font-normal">
            An application designed to provide free courses and knowledge
            questions about Computer Science. The app is still a work in
            progress and it is developed in React Native & Expo
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161616", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="June 2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            easyFinance
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            An open source mobile app
          </h4>
          <p className="font-normal" style={{ fontWeight: "normal" }}>
            A free and open source app dedicated to providing basic financial
            terms in Hebrew for anyone. The goal of the project is to help people find
            accessible and concise information that will assist them with making
            better financial decisions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161616", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="October 2021 - June 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            KiwiCalc
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            An open source python library
          </h4>
          <p className="font-normal" style={{ fontWeight: "normal" }}>
            An open source library in python for handling with mathematics:
            equations and systems of equations, vectors, matrices, algebra, data
            visualizations, math worksheets, and more.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Projects;
