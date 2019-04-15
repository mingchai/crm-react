import React, {Component} from 'react';
import { Session } from '../requests';
// import background from "../images/chairs.jpg"

class SignInPage extends Component{
  constructor(props){
    super(props);
    this.state = {errors:[]};
    this.createSession = this.createSession.bind(this);
  }

  createSession(event){
    event.preventDefault();
    const {currentTarget} = event;
    const formData = new FormData(currentTarget);

    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    }).then(data => {
      const {onSignIn = () =>{}} = this.props;

      if(data.status === 404){
        this.setState({errors:[{message:"Incorrect email or password"}]});
      } else {
        this.props.history.push("/");
        onSignIn(); 
      }
    });
  }

  render(){
    const {errors} = this.state;
    return(
      <div>
        {/* <img src={background} alt="chairs"/> */}
        <h1>Sign In Page</h1>
        <form onSubmit = {this.createSession}>
          {errors.length > 0 ? (
            <div>
              {errors.map(e => e.message)}
            </div>
            ) : null}

            <div>
              <label name="email" id="email">Email: </label>
              <input type="text" name="email"/>
            </div>

            <div>
              <label name="password" id="password">Password: </label>
              <input type="password" name="password"/>
            </div>

            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignInPage;