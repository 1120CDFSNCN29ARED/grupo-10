import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.category_id}</td>
                </tr>
            )
    }
    
        

export default ChartRow;