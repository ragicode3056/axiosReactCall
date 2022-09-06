
export const LoginModal = (props) =>{
  
    return (
        
        <div>
               <div>Enter username
        <input type="text"></input>
     </div>
     <div>
       Enter password 
       <input type="password"></input>
     </div>
     <button type="submit" onClick={props.onSubmit}>Log in</button>
    
     
             </div>
     
    )
}