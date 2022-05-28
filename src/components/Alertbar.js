import React from 'react'

export default function Alertbar(props) {
    const capitalize = (word) => {
        const lower = word.charAt(0).toUpperCase();
        return lower+word.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}
