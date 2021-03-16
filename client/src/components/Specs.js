import React from 'react'



const Specs = ({specs}) => {
    let profileDate = "";
    if (specs.date) {profileDate = (new Date(specs.date));
        profileDate = profileDate.toLocaleDateString();
    }
    
    return (
        <div>
            NAME: {specs.name}
            ID: {specs.id}
            STATUS: {specs.isCaught ? (<h3>THIS ONE IS TAMED</h3>  ) : <h3>NO, IT IS FREE AS A BLUE-BIRD</h3>}
            {specs.date ? "DATE" : ""} {profileDate}
        </div>
    )
}

export default Specs
