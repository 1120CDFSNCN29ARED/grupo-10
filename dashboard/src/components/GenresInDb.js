import React, { Component } from "react";
import { BASE_URL } from '../env'
import Genre from './Category';


class GenresInDb extends Component {
  constructor(){
    super();
    this.state= { products: null};
  }

  async componentDidMount(){
    const res = await fetch(`${BASE_URL}/api/products`);
    const products = await res.json();
    const categories = products.categories;
    console.log(categories);

    this.setState({
      products: categories.map((elem) => {
        return{
          genre:elem.name + ': ' + elem.total
        }
      })
    });

  }


  render(){
    if(this.state.products == null){
      return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categories in Data Base
            </h5>
          </div>
          <div className="card-body">
            <p>Loading...</p>
          </div>
        </div>
      </div>
      );  
    }
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categories in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
             {this.state.products.length > 0 ? this.state.products.map((genre, index) => {
               return <Genre {...genre} key={index} />;
             }) : "No se encontraron generos"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default GenresInDb;

/*
<div className="col-lg-6 mb-4">
  <div className="card bg-dark text-white shadow">
    <div className="card-body">Resmas: {totalResmas}</div>
  </div>
</div>
*/
