import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  constructor(props) {
    super(props)
  }
  mapAllPets = () => {
    return (
      this.props.pets.map(indivpet => <Pet pet={indivpet} onAdoptPet={this.props.onAdoptPet} />)
    )
  }

  render() {
    // console.log(this.props.pets)
    return (
      <div className="ui cards">
        {this.mapAllPets()}
      </div>
      )
  }
}

export default PetBrowser
