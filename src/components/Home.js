import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {matchesArr: [], loading: true}
  }
  componentDidMount() {
    this.getMatches();
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getMatches() {

    while (true) {
      // var dt;
      // if (this.props.params?.date == null) {
      //   var t = Date.now();
      //   var options = {
      //     year: "numeric",
      //     month: "numeric",
      //     day: "numeric",
      //   };
      //   dt = new Intl.DateTimeFormat("en-US", options).format(t);
      //   console.log(dt);
      // }
      // else {
      //   dt = this.props.params.date;
      // }
      // console.log("fdfs" + dt);
      await this.sleep(1000);
      const response = await fetch('/matches?date=20230412');

      const data2 = await response.json();

      
      console.log(this.state.matchesArr);
      this.setState({
        matchesArr: data2,
        loading: false
      });
      await this.sleep(5000);
    }


  }

  render() {
    return (
      <div className='homePage'>
        <div className='sidebarMatch'></div>
        {this.state.loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        )
          :
          (
            <div className='content'>
              <div className='matchesBlock'>

                {this.state.matchesArr.map(s => {
                  <div>

                    <h2>
                      {s.leagueName}
                    </h2>

                  </div>
                })}
              </div>
            </div>
          )
        }

      </div>
    )
  }
}
