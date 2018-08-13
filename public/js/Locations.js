class Locations extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      locationsListIsVisible: true,
      addLocationIsVisible: false,
      addLocationIsVisible: false,
      editLocationIsVisible: false
    }
    this.toggleState = this.toggleState.bind(this)
  }

  toggleState (state) {
  this.setState({[state]: !this.state[state]})
}

  render() {
    return (
      <div className='locations'>
        <h3> locations </h3>
        <button onClick={()=>this.toggleState('addLocationIsVisible')}>Add a Location</button>
        {this.state.addLocationIsVisible ? <LocationForm /> : ''}
        <Location />
      </div>
    )
  }
}
