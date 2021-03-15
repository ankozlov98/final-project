import React from 'react'



const Specs = ({specs}) => {
    let profileDate = new Date();
    if (specs.date) {profileDate = (new Date(specs.date)).toLocaleDateString();}
    
    return (
        <div>
            NAME: {specs.name}
            ID: {specs.id}
            STATUS: {specs.isCaught ? (`THIS ONE IS TAMED ${profileDate}`  ) : "NO, IT IS FREE AS A REAL LIVING THING"}
            
        </div>
    )
}

export default Specs
