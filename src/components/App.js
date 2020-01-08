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

  handleOnChange = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    });
  }

  handleClick = () => {
    let filter = this.state.filters.type;
    
    if(filter === "all") {
      fetch('/api/pets')
      .then(res => res.json())
      .then(data => this.setState({ pets: data }));
    } else {
      fetch(`/api/pets?type=${filter}`)
      .then(res => res.json())
      .then(data => this.setState({ pets: data }));
    }
  }

  handleAdopt = (id) => {
    let update = this.state.pets.map((pet) => {
      if(pet.id === id) pet.isAdopted = true
      return pet
    });

    this.setState({
      pets: update
    })
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
              <Filters
                onChangeType={this.handleOnChange}
                onFindPetsClick={this.handleClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.handleAdopt}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
