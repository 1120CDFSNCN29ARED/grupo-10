import React, { Component } from 'react';
import SmallCard from './SmallCard';
import { BASE_URL } from '../env'

class ContentRowMovies extends Component{
    constructor() {
		super();
		this.state = { totals: [] };
	}

	async componentDidMount() {
		const pro = await fetch(`${BASE_URL}/api/products`);
		const usr = await fetch(`${BASE_URL}/api/users`);
		const productsJson = await pro.json();
		const usersJson = await usr.json();
        const categoriesJson = productsJson.categories;
        console.log(categoriesJson.count)// = undefined

		let products = {
			title: 'Products in Data Base',
            color: 'primary', 
            cuantity: productsJson.total,
            icon: 'fa-clipboard-list'
		};

		let categories = {
			title:' Total categories', 
            color:'success', 
            cuantity: categoriesJson.length,
            icon:'fa-award'
		};

		let users = {
			title:'Users quantity' ,
            color:'warning',
            cuantity: usersJson.total,
            icon:'fa-user-check'
		};

		this.setState({ totals: [products, categories, users] });
	}
    render(){
        return (
            <div className="row">     
                {this.state.totals.map( (total, i) => {
                    return <SmallCard {...total} key={i}/>    
                })}
            </div>
        )
    }
}

export default ContentRowMovies;