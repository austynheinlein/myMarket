class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Locations />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
)
