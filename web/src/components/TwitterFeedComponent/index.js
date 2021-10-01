import React from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import './style.scss';

class TwitterFeed extends React.Component {

    render() {
        return (
        <div className="twitter-feed-component">
            <TwitterTimelineEmbed
                sourceType="list"
                id="1441371281350279170"
                options={{ 
                    id: "list:1441371281350279170",
                    height: 2000,
                }}
                noScrollbar
                noHeader
            />
        </div>
        )
    }

}

export { TwitterFeed };