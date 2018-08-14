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

  componentDidMount(){
    if(this.props.location){
      this.setState({
        company_name: this.props.location.company_name,
        address: this.props.location.address,
        image: this.props.location.image,
        phone: this.props.location.phone,
        county: this.props.location.county,
        id: this.props.location.id
      })
    }
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
        <form className='pure-form pure-form-aligned' onSubmit={this.handleSubmit}>

            <div className='pure-control-group'>
                <label className='label' for='company_name'> Name </label>
                <input className='input' type='text' id='company_name'
                  onChange={this.handleChange}
                  value={this.state.company_name}
                />
            </div>

          <br/>

            <div className='pure-control-group'>
                <label className='label' for='address'> Address </label>
                <input className='input' type='text' id='address'
                  onChange={this.handleChange}
                  value={this.state.address}
                />
            </div>

          <br/>

            <div className='pure-control-group'>
                <label className='label' for='phone'> Phone </label>
                <input className='input' type='text' id='phone'
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
            </div>

          <br/>

            <div className='pure-control-group'>
                <label className='label' for='image'> Image </label>
                <input className='input' type='text' id='image'
                  onChange={this.handleChange}
                  value={this.state.image}
                />
            </div>

          <br/>

            <div className='pure-controls'>
              <input type="submit" value="Submit" />
            </div>

        </form>
            <div className='cancelbtn'>
              {this.props.editLocationIsVisible ?
              <button className='cancel' onClick={()=> this.props.toggleState('locationsListIsVisible', 'locationIsVisible', 'editLocationIsVisible')}> Cancel </button>
                :
              <button className='cancel' onClick={()=> this.props.toggleState('locationsListIsVisible', 'addLocationIsVisible')}> Cancel </button>
              }
            </div>

      </div>
    )
  }
}
