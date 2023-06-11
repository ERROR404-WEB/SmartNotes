import React from 'react'

function Alert(props) {
    let bgcolor=" rgb(255, 37, 0.217)";

    if(props.alert && props.alert.type==="success"){
         bgcolor="rgb(37, 255, 182)"
    }
    
        
    let styles = { height: "2.4em", 
    alignItems: "center", 
    paddingLeft: "5%",
    backgroundColor:bgcolor,
    
}

    return (
        <div >
            {/* className={`alert alert-${props.alert.type} alert-dismissible fade show`} */}
            {props.alert && <div className='d-flex' style={styles} >
                {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert