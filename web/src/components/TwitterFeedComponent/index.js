import React from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import './style.scss';

class TwitterFeed extends React.Component {

    render() {
        return (
            <TwitterTimelineEmbed
                sourceType="list"
                id="1441371281350279170"
                options={{ id: "list:1441371281350279170" }}
                noScrollbar
                noHeader
            />
        )
    }

}

export { TwitterFeed };