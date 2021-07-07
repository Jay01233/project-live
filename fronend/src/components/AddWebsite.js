import React, { Component } from 'react'

export default class AddWebsite extends Component {
    state = {
        url:"",
    }


    addWebsite = (e) => {
        e.preventDefault();
        if (this.state.url === "") {
            alert('Please upload your url');
            return
        }
        this.props.addWebsiteHandler(this.state)
        this.props.callApi(this.state.url)
        this.setState({url:""})
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h3>LIVE WEBSITE TRACKING</h3>
                    <h6> Currently tracking 4 websites</h6>
                </div>
                <div onSubmit={this.addWebsite}>
                    <form>
                        <div className="input-form">
                            <input 
                                type="text"
                                name="url"
                                className="input-box"
                                placeholder="Input with URL Valiation"
                                value={this.state.url}
                                onChange={(e) => this.setState({url: e.target.value})}
                            />                       
                            <button type="submit" className="button-website">Add Website</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
