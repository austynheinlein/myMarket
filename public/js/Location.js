class Location extends React.Component {
  render() {
    return (
      <div className='show'>
        <button onClick={()=>this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}>See Full Location List</button>
        <div className='individual'>
              <img src={this.props.location.image} alt={this.props.location.company_name}/>
              <p> Name: {this.props.location.company_name} </p>

              <p> Address: {this.props.location.address}</p>

              <p> Phone: {this.props.location.phone}</p>
        </div>
        {this.props.editLocationIsVisible ?
          <LocationForm location={this.props.location} handleSubmit={this.props.handleSubmit} editLocationIsVisible={this.props.editLocationIsVisible} toggleState={this.props.toggleState}/>
          : ''
        }

      </div>
    )
  }
}
