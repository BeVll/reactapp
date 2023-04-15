import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='table'>
                <div className='tableHeader'>
                    <img className='logoLeague' src={this.props.table.leagueLogo}></img>
                    <span className='leagueName'>{this.props.table.leagueName}</span>
                </div>
                <table cellSpacing={0} className='teams'>
                    <thead>
                        <tr>
                            <th className='pos'>#</th>
                            <th>Team</th>
                            <th>MS</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GD</th>
                            <th>PTS</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.props.table.teams.map((t, index) => {
                            return (
                                t.id == this.props.match.homeTeam.id || t.id == this.props.match.awayTeam.id ? (
                                    <tr className='teamLine home'>
                                        <td className='pos'>{index + 1}</td>
                                        <td className='teamNameLogo'>

                                            <img className='teamLogo' src={t.imageUrl}></img>
                                            <span className='teamName'>{t.name}</span>
                                        </td>
                                        <td className='param'>
                                            {t.playedGames}
                                        </td>
                                        <td className='param'>
                                            {t.wins}
                                        </td>
                                        <td className='param'>
                                            {t.draws}
                                        </td>
                                        <td className='param'>
                                            {t.losses}
                                        </td>
                                        <td className='param'>
                                            {t.gd}
                                        </td>
                                        <td className='param pts'>
                                            {t.points}
                                        </td>
                                    </tr>
                                )
                                    :
                                    (
                                        <tr className='teamLine'>
                                            <td className='pos'>{index + 1}</td>
                                            <td className='teamNameLogo'>

                                                <img className='teamLogo' src={t.imageUrl}></img>
                                                <span className='teamName'>{t.name}</span>
                                            </td>
                                            <td className='param'>
                                                {t.playedGames}
                                            </td>
                                            <td className='param'>
                                                {t.wins}
                                            </td>
                                            <td className='param'>
                                                {t.draws}
                                            </td>
                                            <td className='param'>
                                                {t.losses}
                                            </td>
                                            <td className='param'>
                                                {t.gd}
                                            </td>
                                            <td className='param pts'>
                                                {t.points}
                                            </td>
                                        </tr>
                                    )

                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
