import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import randomJokeActions from '../../store/ducks/randomJokes/randomJokes'
import { Button, CenterContainer, RandomJoke } from './style'

class RandomText extends React.Component {
  componentDidMount() {
    this.getRandomJoke()
  }

  getRandomJoke = () => {
    const { randomJokeRequest } = this.props
    randomJokeRequest()
  }

  render() {
    return (
      <>
        <CenterContainer>
          <RandomJoke>
            <h1>{this.props.randomJoke.value}</h1>
          </RandomJoke>
        </CenterContainer>
        <CenterContainer>
          <Button onClick={() => this.getRandomJoke()}>NEW RANDOM JOKE</Button>
        </CenterContainer>
      </>
    )
  }
}

const mapStateToProps = state => ({
  randomJoke: state.randomJoke.data
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...randomJokeActions
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(RandomText)
