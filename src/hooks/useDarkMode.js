import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkModeON')

  return [darkMode, setDarkMode]
}