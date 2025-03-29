import iconStar from "./assets/icon-star.svg"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import { useState } from "react"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  function handleSubmited() {
    if (rateNote != 0) {
      setSubmited(true)
      return
    }

    alert("Plase, choose a rate button!")
  }

  function handleChangeRateNote(value) {
    setRateNote(value)
  }

  return (
      submited === false ? (
        <div className="bg-radial-gradient max-w-103.5 px-6 pt-6 pb-8 rounded-2xl font-Overpass">

        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
          <img src={iconStar} alt="ícone da estrela" />
        </div>

        <h1 className="font-bold text-2xl mb-2.5">How did we do?</h1>

        <p className="text-light-grey text-sm leading-1 mb-6">Please let us know how we did your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className="flex justify-between mb-6">
          <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange-500 hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400" onClick={() => handleChangeRateNote(1)} />
          <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange-500 hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400" onClick={() => handleChangeRateNote(2)} />
          <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange-500 hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400" onClick={() => handleChangeRateNote(3)} />
          <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange-500 hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400" onClick={() => handleChangeRateNote(4)} />
          <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange-500 hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400" onClick={() => handleChangeRateNote(5)} />
        </div>

        <button className="bg-orange-500 w-full py-3 rounded-3xl uppercase font-bold tracking-1 hover:bg-white hover:text-orange-500 cursor-pointer transition duration-400" onClick={handleSubmited}>Submit</button>
      </div>
      ) : (
      <div className="bg-radial-gradient max-w-103.5 px-6 pt-6 pb-8 rounded-2xl font-Overpass text-center"> 
        <img className="mx-auto mb-6" src={illustrationThankYou} alt="Illustration Thank you" />

        <p className="mb-6 text-orange-500 bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl">You selected {rateNote} out of 5!</p>

        <h1 className="font-bold text-2xl mb-2.5">Thank You</h1>

        <p className="text-light-grey text-sm leading-1">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
      )
  )
}