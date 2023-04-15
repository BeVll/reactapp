import React, { Component } from 'react'

export default class Statistic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='statistic' >
        <h2>Statistics</h2>
        {this.props.match.stats.map(stat => {
          return (
            <div className='statLine'>
              <h4>{stat.name}</h4>
              <div className='details'>
                <span className='value home'>{stat.valueHome}</span>
                <div className='graph' style={{ gridTemplateColumns: stat.percentHome + "fr " + stat.percentAway + "fr", }}>

                  <div className='teamGraph' style={{ backgroundColor: this.props.match.homeColor }}></div>
                  <div className='teamGraph' style={{ backgroundColor: this.props.match.awayColor }}></div>
                </div>
                <span className='value away'>{stat.valueAway}</span>
              </div>

            </div>
          )
        })}
      </div>
    )
  }
}
