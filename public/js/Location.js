class Location extends React.Component {
  render() {
    return (
      <div className='show'>
        <table>
          <tbody>
            <tr>
              <td>
              <img src='#'/>
              </td>

              <td>
                Name: Raleys
              </td>

              <td>
                Address: 4321 BS Street, Sactown CA 95873
              </td>

              <td>
                Phone: 452-452-2521
              </td>
            </tr>
          </tbody>
        </table>
        <LocationForm />
      </div>
    )
  }
}
