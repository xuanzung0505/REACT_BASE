import { DATA, COLORS } from '@utils/constants'
import { useState, type FC, memo } from 'react'

const ItemList: FC = memo(function ItemList () {
  const item = DATA.map((item, index) => <div key={item.id}>{item.id}</div>)
  console.log('re-render itemlist')
  return <div>{item}</div>
})

const Login: FC = () => {
  const [color, setColor] = useState('red')

  function handleClick () {
    setColor(COLORS[Math.floor(Math.random() * COLORS.length)])
  }
  console.log('re-render')
  return <div>
    <div style={{ color }}>Login</div>
    <ItemList/>
    <button onClick={handleClick}>change color randomly</button>
  </div>
}

export default Login
