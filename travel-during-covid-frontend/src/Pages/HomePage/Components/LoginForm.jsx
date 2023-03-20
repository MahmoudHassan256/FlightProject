import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../../styles/styles.css'
export default function LoginForm() {
  return (
<div className="login-form-container">
  <FontAwesomeIcon icon={faTimes} id="form-close"/>
</div>
  )
}
