import React, { Component } from 'react';

class Head extends Component {
    state = {
        count: 12,
        tags:["tag1", "tag2", "tag3"]
    }
    render() {
        return (
            <div>
                <h4 className={this.getBadgeClasses()}>{this.capital()}</h4>
                
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning " : "primary"
        return classes;
    }

    capital() {
        const {count} = this.state 
        return count === 0 ? 'ZERO' : count;
    }
}
 
export default Head;