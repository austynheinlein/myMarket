class Location extends React.Component {
  render() {
    return (
      <div className='show'>
        <button onClick={()=>this.props.toggleState('locationsListIsVisible', 'locationIsVisible')}>See Full Location List</button>
        <div className='individual'>
              <img src='https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0015/3728/brand.gif?itok=oS9wBVLV'/>
              <p> Name: Raleys </p>

              <p> Address: 4321 BS Street, Sactown CA 95873</p>

              <p> Phone: 452-452-2521</p>
          </div>
      </div>
    )
  }
}
