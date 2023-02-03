import React from 'react'
import './images.css';

export function FullImages(props) {
  return (
    <div className='full-image'>
      <img src={props.images} alt={props.name} />
    </div>
  )
}
export function RoundedImages(props) {
  return (
    <div className={`rounded-image ${props.classname}`}>
      <img src={props.images} alt={props.name} />
    </div>
  )
}
export function BackImages(props) {
  return (
    <div className='back-image'>
      <img src={props.images} alt={props.name} />
    </div>
  )
}
