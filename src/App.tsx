import styles from './App.module.css'
import { useModal } from './state/state'
import { RightColumn } from './components/rightColumn/RightColumn'
import { Header } from './components/header/Header'
import { LeftColumn } from './components/leftColumn/LeftColumn'
import { AddPath } from './components/addPath/AddPath'
function App() {

  const statePath = useModal((state) => state.OpenPath)

  return (
    <div className={styles.App} >
      <Header />
      <div className={styles.content}>
        <LeftColumn />
        <RightColumn />
      </div>
      {statePath && <AddPath />}
    </div>

  )
}

export default App
