import React from 'react'

export default function Alert(props) {
    const Capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
           <div style={{height:'60px'}} >
            { props.alert && <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong>{Capitalize(props.alert.txt)}: </strong>{props.alert.msg}
            </div>}
        
           </div>
    )
}
