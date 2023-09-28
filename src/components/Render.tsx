import { COLORS } from '@utils/constants'
import { useState } from 'react'

const ChildComponent = ({
  depth, name,
  parentState, setParentState
}: { depth: number, name: string,
    parentState: number, setParentState: React.Dispatch<React.SetStateAction<number>> }) => {
  const [color, setColor] = useState('black')

  function handleClick () {
    setColor(COLORS[Math.floor(Math.random() * COLORS.length)])
  }

  function handleNumberStateClick () {
    setParentState(parentState + 1)
  }

  console.log(`${name} is re-rendered`)
  return <div style={{ border: '1px solid green', padding: '20px', margin: '10px' }}>
    <div style={{ color }}>depth={depth} with name={name}</div>
    <button onClick={handleClick} >set {name} Color</button>
    <button onClick={handleNumberStateClick} >set parent state</button>
  </div>
}

export default function Render ({ name = 'parent' }: { name?: string }) {
  const [color, setColor] = useState('black')
  const [numberState, setNumberState] = useState(0)

  function handleColorClick () {
    setColor(COLORS[Math.floor(Math.random() * COLORS.length)])
  }
  console.log(`${name} is re-rendered`)

  function batchingClick () {
    (() => {
      console.log('batching click')
    })()
    setNumberState((oldValue: number) => oldValue + 1)
    setNumberState((oldValue: number) => oldValue + 1)
    setNumberState(numberState + 1)
    setNumberState((oldValue: number) => oldValue + 1);
    (() => {
      console.log('batching click again')
    })()
  }

  setTimeout(() => {}, 3000)

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <div style={{ color }}>Render parent</div>
      <div>{name} state: {numberState}</div>
      <ChildComponent depth={1} name="child1"
        parentState={numberState} setParentState={setNumberState}/>
      <ChildComponent depth={1} name="child2"
        parentState={numberState} setParentState={setNumberState}/>
      <button onClick={handleColorClick} >set {name} Color</button>
      <div><input/></div>
      <div><button onClick={batchingClick}>batching state updates</button></div>
    </div>
  )
}

/*
    render parent (change its state?) -> render child with its state (could be unchanged, it prints re-render, but wont
    commit to the real DOM to request change, and leave the node intact)
    child change its state -> parent isnt re-rendered, child change parent's state -> parent is re-rendered
    if a component's state is changed, react changes the DOM node
*/
