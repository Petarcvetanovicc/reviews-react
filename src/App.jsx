import { useState } from 'react'
import reviews from './data'
import { FaArrowLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'

const App = () => {
  const [count, setCount] = useState(0)
  const nextPerson = () => {
    setCount((prev) => {
      let nextValue = prev + 1
      if (nextValue > reviews.length - 1) {
        nextValue = 0
        return nextValue
      }
      return nextValue
    })
  }
  const prevPerson = () => {
    setCount((prev) => {
      let nextValue = prev - 1
      if (nextValue < 0) {
        nextValue = reviews.length - 1
        return nextValue
      }
      return nextValue
    })
  }
  return (
    <main>
      <section className="review">
        <div className="img-container">
          <img
            src={reviews[count].image}
            alt={reviews[count].name}
            className="person-img"
          />
        </div>
        <h2 className="author">{reviews[count].name}</h2>
        <p className="job">{reviews[count].job}</p>
        <p className="info">{reviews[count].text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaArrowLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaArrowRight />
          </button>
        </div>
      </section>
    </main>
  )
}
export default App
