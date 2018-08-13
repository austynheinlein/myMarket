class Locations extends React.Component {
  render() {
    return (
      <div className='locations'>
        <Location />
        <LocationList />
        <LocationForm />
      </div>
    )
  }
}


ReactDOM.render(
    <Locations />,
  document.querySelector('main')
)
