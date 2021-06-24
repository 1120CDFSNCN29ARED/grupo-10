import React, {Component} from 'react';
import imagenFondo from '../assets/images/MerchPoster.jpg';
import { BASE_URL } from '../env'

class LastMovieInDb extends Component{
    constructor() {
		super();
		this.state = { lastProduct: [] };
	}

	async componentDidMount() {
		const pro = await fetch(`${BASE_URL}/api/products`);
		const productsJson = await pro.json();	
        const lastProductData = productsJson.data[20];
        console.log(productsJson)

        let lastProduct = {
            img:'',
            description:lastProductData.description,
            url: lastProductData.url,
        }

		this.setState({ lastProduct: lastProduct});
	}
    render() {
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                        </div>
                        <p>{this.state.lastProduct.description}</p>
                    
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default LastMovieInDb;