class Location extends React.Component {
  render() {
    return (
      <div className='show'>
        <table>
          <tbody>
            <tr>
              <td>
              <img src='https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0015/3728/brand.gif?itok=oS9wBVLV'/>
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
