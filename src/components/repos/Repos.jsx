import React from 'react';
import './style.css';
const Repos = (props) =>{
    const {repos} = props;
    return(
      repos.map((repos)=>{
        return(
          <div className="repos_container" key={repos.id}>
            <div className="repos">
              <h4>owner:{repos.owner.login}</h4>
             <h4>Repository name:{repos.name}</h4>    
        <h4>Description: {repos.description}</h4>      
            </div>
          </div>
        )
      })
    )
}
export default Repos;