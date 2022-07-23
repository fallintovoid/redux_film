import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { changeValue } from './store/slices/mainSlice'

function App() {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector(state => state.main)

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => dispatch(changeValue())}>+1</button>
    </div>
  );
}

export default App;
