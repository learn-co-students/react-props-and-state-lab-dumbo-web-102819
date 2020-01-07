import React from 'react'

class Pet extends React.Component {

  handleAdopt = (evt) => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender == 'male' ? '♂' : '♀'}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>{pet.age}</p>
            <p>{pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.handleAdopt} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
