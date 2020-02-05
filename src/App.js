import React, { Component } from 'react'
import Container from './components/Container'
import Row from './components/Row/Row'
import Col from './components/Col'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import mcu from './components/MCU'
import MovieCard from './components/MovieCard/index'
import theme from './components/images/marvel-studios-fanfare-hd.mp3'

class App extends Component {
  state = {
    mcu,
    score: 0,
    highScore: 0,
    picks: mcu
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
    let themeMusic = new Audio(theme)
    if (themeMusic.play === true) {
      themeMusic.pause()
    }
    themeMusic.play()
  }

  picker = id => {
    if (this.state.mcu.some(element => element.id === id)) {
      this.scored()
      const mcu = this.state.mcu.filter(movie => movie.id !== id)
      const picks = this.state.picks.sort(function(a, b) {
        return 0.5 - Math.random()
      })
      this.setState({ mcu, picks })
    } else {
      alert(`Game Over, your score was ${this.state.score}. Click the screen to play again!!!`)
      this.gameOver(this.state.highScore)
    }
  }

  scored = () => {
    let { score, highScore } = this.state
    score = score + 1
    if (score > highScore) {
      this.setState({ highScore: score, score: score })
    } else {
      this.setState({ score: score })
    }
  }

  render() {
    return (
      <>
        <Navbar score={this.state.score} highScore={this.state.highScore} theme={this.theme} />
        <Container>
          <Jumbotron />
          <Row>
            <Col>
              <Container>
                <div className='d-flex flex-wrap justify-content-center'>
                  {this.state.picks.map(movie => (
                    <MovieCard
                      scored={this.scored}
                      picker={this.picker}
                      id={movie.id}
                      key={movie.id}
                      name={movie.name}
                      image={movie.image}
                    />
                  ))}
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default App
