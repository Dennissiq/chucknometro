import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import randomJokeActions from '../../store/ducks/randomJokes/randomJokes'
import categoryActions from '../../store/ducks/category/categorySelected'

import { Button, CenterContainer, Card, ImageCard, BackButton } from './style'

import chuck1 from '../../assets/images/chuck-1.jpg'
import chuck2 from '../../assets/images/chuck-2.jpeg'
import chuck3 from '../../assets/images/chuck-3.jpg'

class TextCard extends React.Component {
  state = {
    chuckImg: chuck1,
    redirect: false
  }

  componentDidMount() {
    this.handleCategoryJokes()
    this.setRandomChuck()
    this.getRandomJoke()
  }

  getRandomJoke = () => {
    const { randomJokeRequest } = this.props
    randomJokeRequest()
  }

  setRandomChuck = () => {
    let getChuck = Math.floor(Math.random() * 3 + 1)
    switch (getChuck) {
      case 1:
        this.setState({
          chuckImg: chuck1
        })
        break
      case 2:
        this.setState({
          chuckImg: chuck2
        })
        break
      case 3:
        this.setState({
          chuckImg: chuck3
        })
        break

      default:
        break
    }
  }

  handleCategoryJokes = () => {
    let category = localStorage.getItem('@category')
    const { categoryRequest } = this.props
    categoryRequest(category)
    this.setRandomChuck()
  }

  handleRandomJokes = () => {
    this.setRandomChuck()
    this.getRandomJoke()
    localStorage.removeItem('@category')
    this.setState({ redirect: true })
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to="/" />
    }
    return (
      <CenterContainer>
        <Card>
          <CenterContainer>
            <ImageCard src={this.state.chuckImg} />
          </CenterContainer>
          <CenterContainer>
            <h2>{this.props.category.categories}</h2>
          </CenterContainer>
          <h3>{this.props.category.value}</h3>
          <CenterContainer>
            <Button onClick={() => this.handleCategoryJokes()}>NEW JOKE</Button>
          </CenterContainer>
          <CenterContainer>
            <BackButton>
              <h3 onClick={() => this.handleRandomJokes()}>RANDOM JOKES</h3>
            </BackButton>
          </CenterContainer>
        </Card>
      </CenterContainer>
    )
  }
}

const mapStateToProps = state => ({
  randomJoke: state.randomJoke.data,
  category: state.category.data
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...randomJokeActions,
      ...categoryActions
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TextCard)
