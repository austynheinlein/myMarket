class LocationsList extends React.Component {
  render () {
    return (
      <div className='locationsList'>
              <table>
                <tbody>
                  {this.props.locations.map( (location, index) => {
                    return (
                      <tr>
                        <td>
                          <img src={location.image} alt={location.company_name}
                          onClick={()=> {this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}} />
                        </td>

                        <td>
                          <h3 onClick={()=> {this.props.getLocation(location); this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}}>{location.company_name}</h3>
                        </td>

                        <td>
                          <h3>{location.address}</h3>
                        </td>

                        <td>
                          <button>Edit</button>
                        </td>

                        <td>
                          <button onClick={() => this.props.deleteLocation(location, index)}> Delete </button>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
    )
  }
}
