import React from 'react';
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux'

const SignedOutLink =(props)=>{

    return(
       <ul className="right">
            <li> <NavLink to="/signup">Sign Up</NavLink></li>
            <li> <NavLink to="/signin">Sign In</NavLink></li>
           { (props.auth.id)?<li> <NavLink to="/" className="btn btn-floating pink lighten-1"></NavLink></li>:null}
       </ul>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
      return{
          auth: state.firebase.auth
      }
  }
  export default connect(mapStateToProps)(SignedOutLink)
