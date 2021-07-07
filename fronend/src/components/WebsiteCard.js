import React from 'react'

export const WebsiteCard = (props) => {
const {url} = props.website    
    return (
            <div className="url-list">
                {url}
            </div>
    )
}
