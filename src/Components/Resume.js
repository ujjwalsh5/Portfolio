import React, { Component } from "react";
import react from "./skills/1.png";
import hcj from "./skills/2.png";
import git from "./skills/3.png";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      // var work = this.props.data.work.map(function(work){
      //   return <div key={work.company}><h3>{work.company}</h3>
      //       <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      //       <p>{work.description}</p>
      //   </div>
      // })
      // var skills = this.props.data.skills.map(function (skills) {
      //   var className = "bar-expand " + skills.name.toLowerCase();
      //   return (
      //     <li key={skills.name}>
      //       <span style={{ width: skills.level }} className={className}></span>
      //       <em>{skills.name}</em>
      //     </li>
      //   );
      // });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        {/* <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div> */}

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {/* <div className="bars">
              <ul className="skills">{skills}</ul>
            </div> */}
            <div className="skills_images">
              <img src={hcj} className="hcj" alt="" />
              <div>
                <img src={react} className="react" alt="" />
                <h4 color="black">React/React-Native</h4>
              </div>
              <img src={git} className="git" alt="" />
            </div>
            <div className="skilldata">
              <li>
                I Know Redux and can work with class based as well functional
                components in React.
              </li>
              <li>I can work with Firebase as Backend in React.</li>
              <li>
                I can work with any 3rd party library in React js as well as in
                React Native.
              </li>
              <li>I Also have a knowledge of C, C++, Python.</li>
              <li>
                Except my mains, I also About Bootstrap, JQuery, MaterialUI,
                Expo.
              </li>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
