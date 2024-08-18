/* eslint-disable react/prop-types */

function Progress({ index, numQuestions, points, maxPossiblePoints }) {
  return (
    <header className='progress'>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  )
}

export default Progress
