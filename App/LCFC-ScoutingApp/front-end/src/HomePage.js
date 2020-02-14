import React from 'react'

class HomePage extends React.Component {


    state = {

        username: '',

    };

    componentDidMount() {

        this.gotohomepage();
    }

    gotohomepage = async () => {

        const response = await fetch('/api/hello', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

        });

        const body = await response.text();

        this.setState({ jamie: body });

    };


    render() {
        return (
            <div>
                <p>{this.state.jamie}</p>
            </div>
        );
    }
}


export default HomePage