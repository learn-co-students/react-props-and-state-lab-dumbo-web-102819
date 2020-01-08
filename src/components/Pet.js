import React from 'react'

class Pet extends React.Component {
  render() {
    const { id, type, gender, name, age, weight, isAdopted } = this.props.pet
    // id: "2c902312-dfa3-446f-8b4b-5e115170d807"
    // type: "cat"
    // gender: "male"
    // age: 3
    // weight: 1
    // name: "Teddy"
    // isAdopted: false
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { gender === "female" ? '♀' : '♂' }
            { name }
          </a>
          <div className="meta">
          <span className="date">{ type }</span>
          </div>
          <div className="description">
            <p>Age: { age } </p>
            <p>Weight: { weight }</p>
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted ? <button className="ui disabled button">Already adopted</button> :
            <button onClick={() => this.props.onAdoptPet(id)} className="ui primary button">Adopt pet</button> 
          }
        </div>
      </div>
    )
  }
}

export default Pet
