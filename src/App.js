import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      fname: '',
      lname: '',
      email: '',
      address: '',
      occupation: '',
      phone: '',
      state4: '',
      lga: '',
      ward: ''
    }
  }

  changeFname = (event) => {
    this.setState({
      fname: event.target.value
    })
  }

  changeLname = (event) => {
    this.setState({
      lname: event.target.value
    })
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  changeAddress = (event) => {
    this.setState({
      address: event.target.value
    })
  }

  changeOccupation = (event) => {
    this.setState({
      occupation: event.target.value
    })
  }

  changePhone = (event) => {
    this.setState({
      phone: event.target.value
    })
  }

  changeState4 = (event) => {
    this.setState({
      state4: event.target.value
    })
  }

  changeLGA = (event) => {
    this.setState({
      lga: event.target.value
    })
  }

  changeWard = (event) => {
    this.setState({
      ward: event.target.value
    })
  }

  render() {
    return (
      <div className="voters-form">
        <nav className="navbar navbar-light" style={{ border: "none", marginBottom: "40px",backgroundColor: "#0795ED"}}>
              <a className="navbar-brand nav-text" href="#">VOTER'S REGISTERATION FORM</a>
        </nav>

        {/* ******start form here***** */}
      <div className="form-div" style={{ width: "10rem;", padding: "2% 7% 2% 7%", backgroundColor: "#EEF5FC" }}>

        <form >
        <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputFname4">First Name</label>
              <input type="text"
              placeholder="First Name" 
              onChange={this.changeFname} 
              value={this.state.fname} 
              className="form-control" 
              id="inputFname4" />
            </div>

            <div className="form-group col-md-6">
              <label for="inputLname4">Last Name</label>
              <input type="text" 
              placeholder="Last Name" 
              className="form-control"
              onChange={this.changeLname} 
              value={this.state.lname}
              id="inputLname4" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email"
              placeholder="Email" 
              onChange={this.changeEmail} 
              value={this.state.email} 
              className="form-control" 
              id="inputEmail4" />
            </div>

            <div className="form-group col-md-6">
              <label for="inputAddress4">Address</label>
              <input type="text"
              placeholder="Address"  
              className="form-control"
              onChange={this.changeAddress} 
              value={this.state.address}
              id="inputAddress4" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputOccupation4">Occupation</label>
              <input type="text"
              placeholder="Occupation" 
              onChange={this.changeOccupation} 
              value={this.state.occupation} 
              className="form-control" 
              id="inputOccupation4" />
            </div>

            <div className="form-group col-md-6">
              <label for="inputPassword4">Phone Number</label>
              <input type="text"
              placeholder="Phone Number"  
              className="form-control"
              onChange={this.changePhone} 
              value={this.state.phone}
              id="inputPhone4" />
            </div>
          </div>

          <div className="form-group">
          <h5>Select your Gender</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">Male</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">Female</label>
            </div>
          </div>
    
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputState4">State of Origin</label>
              onChange={this.changeState4} 
              value={this.state.state4}
              <select id="inputState4" 
              className="form-control">
                <option selected>Choose state</option>
                <option value="Abuja FCT">Abuja FCT</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option
                ><option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label for="inputLGA">LGA</label>
              <input type="text" 
              className="form-control" 
              id="inputLGA" 
              onChange={this.changeLGA} 
              value={this.state.lga}
              placeholder="LGA" />
            </div>

            <div className="form-group col-md-4">
              <label for="inputWard">Ward</label>
              <input type="text" 
              className="form-control" 
              id="inputWard"
              onChange={this.changeWard} 
              value={this.state.ward} 
              placeholder="Ward" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                I agree that all information supplied above are correct.
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>

      <footer>
        <div className="card-footer text-center text-muted" style={{border:"none", backgroundColor:"#fff"}}>  Coded With Love By  
        <a href="" style={{paddingLeft:"5px"}}>Lynda Uzosike</a>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
