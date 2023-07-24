import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = (props) => {
  return (
    <section className="mt-11">
      <h2 className="text-4xl md: text-5xl font-bold mb-5 mt-5">Projects</h2>

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
          <h4 className="vertical-timeline-element-subtitle">An app</h4>
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
          date="May 2023 - present"
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#161616", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2023 - present"
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
