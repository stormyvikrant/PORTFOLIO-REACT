import React from "react"
import "./Skills.css"
import data from "./SkillsAPI"
import Card from "./card"

const Skills = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4> Skill</h4>
            <h1>Best-Skills</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Skills