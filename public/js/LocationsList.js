class LocationsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(event){
    this.setState({
      search: event.target.value
    })
  }

  render () {
    let filteredLocations = this.props.locations.filter(
      (location)=> {
        return location.address.indexOf(this.state.search) !== -1 || location.company_name.indexOf(this.state.search) !== -1;
      }
    );
    return (
      <div className='locationsList'>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
          <table>
            <tbody>
              {filteredLocations.map( (location, index) => {
                return (
                <div className='listitem'>
                  <tr>
                    <div className='bizinfo'>
                        <td className='imgsize'>
                          <img className='bizimg' src={location.image} alt={location.company_name}
                          onClick={()=> {this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}} />
                        </td>

                      <div className='address'>
                        <td>
                          <h3 className='name' onClick={()=> {this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}}>{location.company_name}</h3>
                        </td>

                        <td>
                          <h3>
                            {location.address}
                          </h3>
                        </td>
                      </div>
                    </div>

                    <div className='buttons'>
                      <td>
                      <button className='edit' onClick={() =>{this.props.getLocation(location); this.props.toggleState('locationIsVisible', 'locationsListIsVisible', 'editLocationIsVisible')}}>Edit</button>
                      </td>
                      <td>
                        <button className='delete' onClick={() => this.props.deleteLocation(location, index)}> Delete </button>
                      </td>
                    </div>
                  </tr>
                </div>
                )
              })}
          </tbody>
        </table>

      </div>
    )
  }
}
