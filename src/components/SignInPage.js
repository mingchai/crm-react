import React, {Component} from 'react';
import background from "../images/chairs.jpg"

class SignInPage extends Component{
  constructor(props){
    super(props);
    this.state = {errors:[]};
  }
  render(){
    const {errors} = this.state;
    return(
      <div>
        {/* <img src={background} alt="chairs"/> */}
        <h1>Sign In Page</h1>
        <form>
          {errors.length > 0 ? (
            <div>
              {errors.map(e => e.message.join(", "))}
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