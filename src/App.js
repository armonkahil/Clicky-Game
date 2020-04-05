import React, { Component } from 'react'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import mcu from './components/MCU'
import MovieCard from './components/MovieCard/index'
import theme from './components/images/marvel-studios-fanfare-hd.mp3'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mcu,
      score: 0,
      highScore: 0,
      picks: mcu
    }
  }

  gameOver = newHighScore => {
    // this.setState({ initialState.highScore: this.state.highScore})
    this.setState({
      mcu,
      score: 0,
      highScore: newHighScore,
      picks: mcu
    })
  }

  theme = () => {
    const themeMusic = new Audio(theme)
    if (themeMusic.play === true) {
      themeMusic.pause()
    }
    themeMusic.play()
  }

  picker = id => {
    if (this.state.mcu.some(element => element.id === id)) {
      this.scored()
      // eslint-disable-next-line no-shadow
      const mcu = this.state.mcu.filter(movie => movie.id !== id)

      const picks = this.state.picks.sort(function (a, b) {
        return 0.5 - Math.random()
      })
      this.setState({ mcu, picks })
    } else {
      alert(
        `Game Over, your score was ${this.state.score}. Click the screen to play again!!!`
      )
      this.gameOver(this.state.highScore)
    }
  }

  scored = () => {
    let { score } = this.state
    const { highScore } = this.state
    score += 1
    if (score > highScore) {
      this.setState({ highScore: score, score })
    } else {
      this.setState({ score })
    }
  }

  render() {
    return (
      <>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          theme={this.theme}
        />
        <Wrapper>
          <div className="d-flex flex-wrap justify-content-center">
            {this.state.picks.map(({ id, name, image }) => (
              <MovieCard
                scored={this.scored}
                picker={this.picker}
                id={id}
                key={id}
                name={name}
                image={image}
              />
            ))}
          </div>
        </Wrapper>
      </>
    )
  }
}
export default App
