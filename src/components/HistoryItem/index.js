import {Component} from 'react'

import './index.css'

import History from '../userhistory'

class HistoryList extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = id => {
    const {historyList} = this.state
    const filteredHistory = historyList.filter(user => user.id !== id)
    this.setState({historyList: filteredHistory})
  }

  render() {
    const {historyList, searchInput} = this.state
    const filteredsearchResults = historyList.filter(eachUser =>
      eachUser.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <nav>
        <div className="bg-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-img"
            alt="app logo"
          />
          <div className="cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-img"
              alt="search"
            />
            <input
              type="search"
              className="input-ele"
              placeholder="Search History"
              onChange={this.onSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        {filteredsearchResults.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="u-list">
            {filteredsearchResults.map(eachUser => (
              <History
                userDetails={eachUser}
                key={eachUser.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        )}
      </nav>
    )
  }
}

export default HistoryList
