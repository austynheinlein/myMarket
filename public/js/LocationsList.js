class LocationsList extends React.Component {
  render () {
    return (
      <div className='locationsList'>
          <table>
            <tbody>
              {this.props.locations.map( (location, index) => {
                return (
                  <tr>
                    <div className='bizinfo'>
                        <td>
                          <img src={location.image} alt={location.company_name}
                          onClick={()=> {this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}} />
                        </td>
                      <div className='address'>
                        <td>
                          <h3 onClick={()=> {this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}}>{location.company_name}</h3>
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
                )
              })}
          </tbody>
        </table>


          </div>
    )
  }
}
