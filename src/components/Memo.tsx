import { DATA, COLORS } from '@utils/constants'
import { useState, type FC, memo } from 'react'

const ItemList: FC = memo(function ItemList () {
  const item = DATA.map((item, index) => <div key={item.id}>{item.id}</div>)
  console.log('ItemList re-render')
  return <div>{item}</div>
})

export default function Memo () {
  const [color, setColor] = useState('red')

  function handleClick () {
    setColor(COLORS[Math.floor(Math.random() * COLORS.length)])
  }
  console.log('Memo re-render')
  return (
    <><div style={{ color }}>Login</div><ItemList /><button onClick={handleClick}>change color randomly</button></>)
}
