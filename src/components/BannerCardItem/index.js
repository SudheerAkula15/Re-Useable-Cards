import './index.css'

const Cards = props => {
  const {card} = props
  const {headerText, description, className} = card
  return (
    <li className={className}>
      <h1 className="head">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}

export default Cards
