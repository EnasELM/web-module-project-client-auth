import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
function AddFriendForm(){
    const initialValues={
        
              name: '',
              password: '',
              email:''
            }
            
     const {push} = useHistory ()   
    const[formValues,setFormValues]=useState(initialValues)
    const handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
     const handleSubmit = e => {
        e.preventDefault();
       
        axiosWithAuth()
       
        .post('/api/friends',formValues )
          .then(resp=> {
            push('/friends');
            
          })
          .catch(err=> {
            
            console.log(err);
          })
      };
    
    return(
<div><h3>Add New Friend</h3>
      <form onSubmit={handleSubmit}>
           <label htmlFor="name">name</label>
            <input id="name" name="name" value={formValues.name} onChange={handleChange }/>
            

      </form>
</div>

    )
}
export default AddFriendForm;