import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (newType) => {
    let newState = {
      ...this.state
    }
    newState.filters.type = newType
    this.setState(newState)
  }

  findPetsClick = () => {
    if (this.state.filters.type == 'all'){
      fetch(`/api/pets`).then(r => r.json())
      .then((pets) => {
        this.setState({
          pets: pets
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(r => r.json())
      .then((pets) => {
        this.setState({
          pets: pets
        })
      })
    }
  }

  adoptPet = (id) => {
    let newState = {
      ...this.state
    }
    newState.pets.find((pet) => {
      return pet.id == id
    }).isAdopted = true
    this.setState(newState)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
