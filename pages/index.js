import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';


class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    };

    renderCampaigns() {
        const items = this.props.campaigns.map( address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            }
        });

        return <Card.Group items={items} />
    }

   

    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                {this.renderCampaigns()}
                <Button
                    content="Create Campaign"
                    icon="add circle"
                    primary
                />
            </div>
        );
    }
}

export default CampaignIndex;