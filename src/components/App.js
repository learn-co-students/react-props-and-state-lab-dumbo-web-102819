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
 

  handleOnChangeType=(value) => {
    this.setState({
     filters: {...this.state.filters,
     type: value}
    

    })
  }

  fetchPets=() => {
       let allPets='/api/pets'
       if (this.state.filters.type==='all') {
         fetch(allPets).then(r => r.json()).then(petArr => {this.setState({
           ...this.state, pets: petArr
         })})
       } else {
          fetch(allPets+`?type=${this.state.filters.type}`).then(r => r.json()).then(petArr => {this.setState({
            ...this.state, pets: petArr
          })})} }

  adoptPet=(id) => {
    let foundPet = this.state.pets.find(pet => pet.id === id)
        foundPet.isAdopted = !foundPet.isAdopted
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
              <Filters onChangeType={this.handleOnChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App
