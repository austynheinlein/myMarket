class Locations extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      locationsListIsVisible: true,
      addLocationIsVisible: false,
      locationIsVisible: false,
      editLocationIsVisible: false,
      locations: [],
      location: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  handleUpdateSubmit(location){
    fetch('/locations/' + location.id, {
      body: JSON.stringify(location),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedLocation => {
      return updatedLocation.json()
    })
    .then(jsonedLocation => {
      this.getLocations()
      this.toggleState('locationsListIsVisible', 'locationIsVisible')
    })
    .catch(error => console.log(error))
  }

  deleteLocation(location, index){
    fetch('locations/' + location.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        locations: [
          ...this.state.locations.slice(0, index),
          ...this.state.locations.slice(index + 1)
        ]
      })
    })
  }

  handleCreate(location){
    // console.log([location, ...this.state.locations]);
    this.setState({
      locations: [location, ...this.state.locations]
    });
  }

  handleCreateSubmit(location){
    // console.log(location);
    fetch('/locations', {
      body: JSON.stringify(location),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdLocation => {
      return createdLocation.json()
    })
    .then(jsonedLocation => {
      this.handleCreate(jsonedLocation)
      this.toggleState('addLocationIsVisible', 'locationsListIsVisible')
    })
    .catch(error => console.log(error))
  }

  getLocation(location){
    this.setState({
      location: location
    })
  }

  componentDidMount(){
    this.getLocations()
  }

  getLocations(){
    fetch('/locations')
    .then(response => response.json())
    .then(data => {
      this.setState({
        locations: data
      })
    }).catch(error=> console.log(error))
  }

  toggleState (state1, state2, state3) {
  this.setState({
    [state1]: !this.state[state1],
    [state2]: !this.state[state2],
    [state3]: !this.state[state3]
  })
}

  render() {
    return (
      <div className='locations'>
        <h3 className='local'> Locations </h3>
        <div className='addlocalbtn'>
          <button className='addbtn' onClick={()=>this.toggleState('addLocationIsVisible', 'locationsListIsVisible')}>Add a Location</button>
        </div>
        {this.state.locationsListIsVisible ?
          <LocationsList
            toggleState={this.toggleState}
            locations={this.state.locations}
            getLocation={this.getLocation}
            deleteLocation={this.deleteLocation}
          />
          : ''
        }
        {this.state.addLocationIsVisible ?
          <LocationForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
            editLocationIsVisible={this.state.editLocationIsVisible}
          />
          : ''
        }

        {this.state.locationIsVisible ?
          <Location
            toggleState={this.toggleState}
            location={this.state.location}
            handleSubmit={this.handleUpdateSubmit}
            editLocationIsVisible={this.state.editLocationIsVisible}
          />
          : ''
        }
      </div>
    )
  }
}
