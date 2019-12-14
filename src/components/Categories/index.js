import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import categoryListActions from '../../store/ducks/category/categoryList'
import categoryActions from '../../store/ducks/category/categorySelected'

import { CategoryCard, CategoryCardContainer, Title, LinkRoute } from './style'

class CardCategory extends React.Component {
  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    const { categoryListRequest } = this.props
    categoryListRequest()
  }

  getSelectedCategory = category => {
    localStorage.setItem('@category', category)
    const { categoryRequest } = this.props
    categoryRequest(category)
  }

  render() {
    return (
      <>
        <Title>
          <h1>CATEGORIES</h1>
        </Title>
        <CategoryCardContainer>
          {this.props.categories.map(category => (
            <LinkRoute key={category} to={'/' + category}>
              <CategoryCard onClick={() => this.getSelectedCategory(category)}>
                <h2>{category}</h2>
              </CategoryCard>
            </LinkRoute>
          ))}
        </CategoryCardContainer>
      </>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categoryList.data,
  category: state.category.data
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...categoryListActions,
      ...categoryActions
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(CardCategory)
