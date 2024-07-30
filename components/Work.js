import "./Workcardstyle.css";
import Workcard from "./Workcard";
import WorkcardData from "./WorkcardData";

import React from 'react'

const Work = () => {
  return (
    <div className="Work-container">
        <h1 className="project-heading">project</h1>
        <div className="project-container">
            {WorkcardData.map((val, ind) => {
                return(
                    <Workcard
                    key={ind}
                    //imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                );
            })}            
        </div>
    </div>
  )
}

export default Work