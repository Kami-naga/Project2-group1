import React, { Component } from 'react';

class List2 extends React.Component{
    render(){
        return(
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>summary</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default List2;