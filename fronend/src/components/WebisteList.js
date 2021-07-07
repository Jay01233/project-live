import React from 'react'
import { WebsiteCard } from './WebsiteCard';
export const WebisteList = (props) => {
    const renderList = props.website.map(website => {
            return (
                <WebsiteCard 
                    website={website}
                />
            );
        })
    
    return (
        <div>
            {renderList}
        </div>
    )
}
