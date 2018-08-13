class Locations extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      locationsListIsVisible: true,
      addLocationIsVisible: false,
      locationIsVisible: false,
      editLocationIsVisible: false,
      locations: []
    }
    this.toggleState = this.toggleState.bind(this)
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

  toggleState (state1, state2) {
  this.setState({
    [state1]: !this.state[state1],
    [state2]: !this.state[state2]
  })
}

  render() {
    return (
      <div className='locations'>
        <h3> locations </h3>
        <button onClick={()=>this.toggleState('addLocationIsVisible', 'locationsListIsVisible')}>Add a Location</button>
        {this.state.locationsListIsVisible ?
          <LocationsList toggleState={this.toggleState} locations={this.state.locations}/>
          : ''
        }
        {this.state.addLocationIsVisible ?
          <LocationForm toggleState={this.toggleState}/>
          : ''
        }
        {this.state.locationIsVisible ?
          <Location toggleState={this.toggleState}/>
          : ''
        }
      </div>
    )
  }
}
