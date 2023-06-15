/* eslint-disable semi */
import useLocalStorage from './useLocalStorage'

const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)
  const handleToggle = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }
  return [ darkMode, setDarkMode, handleToggle ]
}

export default useDarkMode

