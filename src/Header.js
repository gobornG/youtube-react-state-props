import React from 'react';
import App from './App';
import Title from './Title';

export default class Header extends React.Component {
    render() {
        //console.log(this.props);
        var text = "Some text variable";
        return (
            <div>
                {/* <Title title={this.props.title} /> */}
                <h1>I'm a new Header component</h1>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>{text}</p>
                <p>User Object => Name: {this.props.user.name} </p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li> )}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

//proptypes a good idea
Header.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};