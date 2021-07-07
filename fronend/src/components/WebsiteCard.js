import React from 'react'

export const WebsiteCard = (props) => {
const {url, title} = props.website
    return (
        <div style={{borderBottom:'1px solid #ccc'}}>
            <div className="url-list">
                {url}
                <span>{title}</span>
                {
                    title ? 
                    <button className="live">Live</button>
                    :
                    <button className="error">Error</button>
                }
            </div>
            </div>
    )
}
