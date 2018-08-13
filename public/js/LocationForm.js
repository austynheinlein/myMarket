class LocationForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      company_name: '',
      address: '',
      image: '',
      phone: '',
      county: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }


  render () {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='company_name'> Name </label>
          <input className='input' type='text' id='company_name'
            onChange={this.handleChange}
            value={this.state.company_name}
          />
          <br/>
          <label className='label' for='address'> Address </label>
          <input className='input' type='text' id='address'
            onChange={this.handleChange}
            value={this.state.address}
          />
          <br/>
          <label className='label' for='phone'> Phone </label>
          <input className='input' type='text' id='phone'
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <br/>
          <label className='label' for='image'> Image </label>
          <input className='input' type='text' id='image'
            onChange={this.handleChange}
            value={this.state.image}
          />
          <br/>
          <input type="submit" value="Submit" />
        </form>
          <button className='cancel' onClick={()=> this.props.toggleState('locationsListIsVisible', 'addLocationIsVisible')}> Cancel </button>
      </div>
    )
  }
}
