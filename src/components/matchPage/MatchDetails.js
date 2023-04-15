import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import withRouter from '../../withRouter';
import { wait } from '@testing-library/user-event/dist/utils';
import MatchHeader from './MatchHeader';
import Events from './Events';
import Goals from './Goals';
import Table from './Table';
import Information from './Information';
import Statistic from './Statistic';
class MatchDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match: {},
            loading: true,
            leagueId: 0,
            table: {},
            i: 0
        }

    }
    componentDidMount() {
        this.foot();

    }


    async foot() {
        while (true) {

            const response = await fetch('/foot?matchId=' + this.props.params.id);
            console.log(response);
            const data = await response.json();

            this.setState({ match: data });
            console.log(data.leagueId);
            if(this.state.loading)
                this.table(data.leagueId);
            await this.sleep(15000);
        }
    }
    async table(leagueId) {
        while (true) {

            const response = await fetch('/table?leagueId=' + leagueId);
            console.log(response);
            const data = await response.json();

            this.setState({ table: data, loading: false });

            await this.sleep(15000);
        }
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    render() {
        console.log();
        return (
            <div className='matchBlock'>

                <div className='sidebarMatch'></div>
                {this.state.loading ?
                    <div className="loader-container">
                        <div className="spinner"></div>
                    </div>
                    :
                    (<div className='content'>

                        <div className='leftSide'>
                            
                            <MatchHeader match={this.state.match}></MatchHeader>
                            
                            
                            {this.state.match.isStarted ? (
                                <Events match={this.state.match}></Events>
                            )
                                :
                                null
                            }
                            {this.state.match.isStarted ? (
                                <Statistic match={this.state.match}></Statistic>
                            )
                                :
                                null
                            }
                        </div>
                        <div></div>
                        <div className='rightSide'>
                            <Table table={this.state.table} match={this.state.match}></Table>
                        </div>

                    </div>)}
            </div>

        )
    }
}

export default withRouter(MatchDetails);