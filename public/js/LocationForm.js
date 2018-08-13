class LocationForm extends React.Component {
  render () {
    return (
      <div className='form'>
        <form>
          <label className='label' for='company_name'> Name </label>
          <input className='input' type='text' id='name'/>
          <br/>
          <label className='label' for='address'> Address </label>
          <input className='input' type='text' id='address'/>
          <br/>
          <label className='label' for='phone'> Phone </label>
          <input className='input' type='text' id='phone'/>
          <br/>
          <label className='label' for='image'> Image </label>
          <input className='input' type='text' id='image'/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
          <button className='cancel'> Cancel </button>
      </div>
    )
  }
}
