import type { FC } from 'react'
import React from 'react'

class ChildClassComponent extends React.Component {
  componentWillUnmount(): void {
    alert("child class component is about to unmount")
  }

  render() {
    return <>child</>
  }
}

class ClassComponent extends React.Component<
  { color: string },
  { color: string, hasChild: boolean }
> {
  // 1.mounting phase
  constructor(props: any) {
    super(props)
    this.state = { color: 'red', hasChild: true }
  }

  static getDerivedStateFromProps(props: { favcol: any }, state: any) {
    return { favoritecolor: props.favcol }
  }

  removeChild = () => {
    this.setState({ ...this.state, hasChild: false })
  }

  render() {
    let child = this.state.hasChild && <ChildClassComponent />

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <div style={{ border: '1px solid black' }}>
          state:{this.state.color}
          <br />
          props:{this.props.color}
          <button type="button" onClick={this.changeColor}>Change state</button>
          <div id='div1'></div>
          <div id='div2'></div>
        </div>
        <div style={{ border: '1px solid green' }}>
          {child}
          <button onClick={() => { this.removeChild() }}>remove ChildClassComponent</button>
        </div>
      </div>

    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'yellow' })
    }, 1000)
  }

  // 2.updating phase
  changeColor = () => {
    this.setState({ color: "blue" });
  }

  shouldComponentUpdate(nextProps: Readonly<{ color: string; }>, nextState: Readonly<{ color: string; }>, nextContext: any): boolean {
    // return false
    return true
  }
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    document.getElementById("div1")!!.innerHTML =
      `Before update: props: ${JSON.stringify(prevProps)}, state: ${JSON.stringify(prevState)}`;
  }
  componentDidUpdate() {
    document.getElementById("div2")!!.innerHTML =
      `After update: props: ${JSON.stringify(this.props)}, state: ${JSON.stringify(this.state)}`;
  }
}

const LifeCycle: FC = () => {
  return (
    <>
      <ClassComponent color="hehe" />
    </>
  )
}

export default LifeCycle
