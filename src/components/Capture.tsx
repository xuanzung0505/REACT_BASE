export default function Capture () {
  return (<div onClickCapture={() => { console.log('capture') }} onClick={() => { console.log('click capture') }}>
    <button onClick={e => { console.log('button') }}
      onClickCapture={() => { console.log('click capture btn1') }}>Btn1</button>
    <button onClick={e => { e.stopPropagation(); console.log('button') }}>Btn2</button>
  </div>)
}
