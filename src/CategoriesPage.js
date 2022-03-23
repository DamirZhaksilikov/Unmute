import React from 'react';
import './CategoriesPage.css'

const restaurantData = [
    { imageSource: "ice-cream.png", audioSource: null, scoreCount: 0, phrase: ["Ice Cream", "I would like to have an ice cream.", "Can I have an ice cream, please?"] },
    { imageSource: "burger.png", audioSource: null, scoreCount: 0, phrase: ["Burger", "I want a hamburger. ", "Can I have a hamburguer, please?"] },
    { imageSource: "restroom.png", audioSource: null, scoreCount: 0, phrase: ["Toilet", "I want to use the toilet.", "May I use the toilet, please?"] }
]

const schoolData = [];
const partyData = [];
const transportData = [];
 
class CategoriesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='categories-page'>
                <div id="categories-blurb">
                    {`Hi ${this.props.userName}, choose a category:`}
                </div>
                <div className='category' onClick={this.openGamePage.bind(this, restaurantData)}>
                    <img className='category-image' src='Restaurant-category.png' />
                    <div className='category-caption'>{"Restaurant"}</div>
                </div>

                <div className='category disabled'>
                    <img className='category-image' src='School-category.png' />
                    <div className='category-caption'>{"School"}</div>
                </div>

                <div className='category disabled'>
                    <img className='category-image' src='Party-category.png' />
                    <div className='category-caption'>{"Party"}</div>
                </div>

                <div className='category disabled'>
                    <img className='category-image' src='Transport-category.png' />
                    <div className='category-caption'>{"Transport"}</div>
                </div>
            </div>
        )
    }

    openGamePage(categoryData) {
        this.props.handler("GamePage", categoryData);
    }
}

export default CategoriesPage;
