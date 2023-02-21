import styles from './App.module.css'
import { Header, LeftColumn, AddPath } from './components'
import { useModal } from './state/state'
import { RightColumn } from './components/rightColumn/RightColumn'
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
