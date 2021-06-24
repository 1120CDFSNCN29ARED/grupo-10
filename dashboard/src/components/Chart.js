import React, { Component } from 'react';
import ChartRow from './ChartRow';
import { BASE_URL } from '../env'

class Chart extends Component{
    constructor(){
        super();
        this.state = {products: []}
    }
    async componentDidMount() {
		const productsApi = await fetch(`${BASE_URL}/api/products`);
		const productsJson = await productsApi.json();
		const products = productsJson.data;


		this.setState({ products: productsJson.data });
	}


    render(){
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                            <h5 className="m-0 font-weight-bold text-gray-800">
                                 PRODUCTS LIST
                            </h5>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                this.state.products.map( ( row , i) => {
                                    return <ChartRow { ...row} key={i}/>
                                })
                            }
    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Chart;