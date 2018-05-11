import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {

    async getUserData() {
        const response = await axios.get('/api/user-data');

        console.log('User Data Response is: ', response);
    }

    async sendData() {
        const dataToSend = {
            something: 'Here is a string',
            more: 'Here is another string'
        };

        const response = await axios.post('/api/send-data', dataToSend);

        console.log('Send Data:', response);
    }

    componentDidMount() {
        this.getUserData();
        this.getArticle();
        this.sendData();
    }

    async getArticle() {
        const response = await axios.get('/api/get-article');

        console.log(response);
    }

    render() {
        return <h1>test complete</h1>
    }
}

export default Test;