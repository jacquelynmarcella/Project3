import React, { Component } from 'react';
import axios from 'axios';

class DreamLog extends Component {
	constructor(props){
		super(props);
	}

	handleDelete = (event) => {
		event.preventDefault();
		let base = this;

		axios({
			method: 'delete',
			url: '/dream/12345',
			data: {
				id: 12345
			}
		}).then((result) => {
			console.log(result);
		}).catch((error) => {
			console.log('error returned', error.response.data);
		})
	}

  render(){
		// CHECK TO SEE IF USER IS LOGGED IN
		// if(this.props.user && this.props.user.name){
      return (
				<div>
          <h1>See what dreams are made of</h1>
					<div className="dream-log__list">
						<ul>
							<li>Dream 1<a href="#" className="dream-log__delete-btn" onClick={this.handleDelete}>X</a></li>
							<li>Dream 2<a href="#" className="dream-log__delete-btn" onClick={this.handleDelete}>X</a></li>
							<li>Dream 3<a href="#" className="dream-log__delete-btn" onClick={this.handleDelete}>X</a></li>
							<li>Dream 4<a href="#" className="dream-log__delete-btn" onClick={this.handleDelete}>X</a></li>
						</ul>
					</div>
        </div>);
		// }
		// MESSAGE IF USER IS LOGGED OUT
    // else {
      // return ( <p>This is a dreamy list page. You need to be logged in to view it.</p> );
    // }
  }
}

export default DreamLog;