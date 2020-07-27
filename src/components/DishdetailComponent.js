import React, { Component } from 'react';
import {Card, CardImg, CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    };

    renderDish(dish){
        if(dish!=null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <div className="col-12 m-1">
                        <CardTitle><h5>{dish.name}</h5></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </div>
                </Card>
            )
        }
        else
        {
            return(
                <div></div>
            )
        }
    }

    renderComments(dish){
        if(dish!=null) {
            var comment = dish.comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </div>
                )
            })
            return(
                <div>
                    <h4>Comments</h4>
                    {comment}
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    render() {
        return(
            <div>
                {this.renderDish(this.props.DishDetails)}
                {this.renderComments(this.props.Comments)}
            </div>
        )
    }
}

export default DishDetail;