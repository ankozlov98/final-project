import React from 'react'



const Specs = ({specs}) => {
    let profileDate = "";
    if (specs.date) {profileDate = (new Date(specs.date));
        profileDate = profileDate.toLocaleDateString();
    }
    let pokeName = new String (specs.name);
    pokeName = pokeName.toUpperCase();

    return (
        <div className="specsContainer">
           <div className="specsLine"><strong>NAME:</strong> {pokeName}</div> 
           <div className="specsLine"><strong>ID:</strong> {specs.id}</div> 
           <div className="specsLine"><strong>STATUS:</strong> 
                {specs.isCaught ? (" THIS ONE IS TAMED" ) : " NO, IT IS FREE JUST LIKE A WHITE WINGED DOVE"} 
            </div> 
            {specs.date ? (<div className="specsLine"><strong>DATE:</strong> {profileDate}</div> ) : ""} 
        </div>
    )
}

export default Specs
