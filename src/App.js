import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {

  state = {
    transactions: [],
    description: '',
    amount: '',
  }

  addTransaction = add => {

    const transactions = [...this.state.transactions];

    transactions.push({
      id: `cmr${(+new Date).toString(16)}`,
      description: this.state.description,
      amount: this.state.amount,
      add
    });

    this.setState({
      transactions,
      description: '',
      amount: ''
    });
  }

  addAmount = e => {
    this.setState({ amount: e.target.value });
  }

  addDescription = e => {
    this.setState({ description: e.target.value });
  }
  
  render() {
    console.log(this.state);
    return (
      <>
        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>
  
        <main>
          <div className="container">
            <Total 
              transactions={this.state.transactions}
            />
            <History 
              transactions={this.state.transactions}
            />
            <Operation
              addTransaction={this.addTransaction}
              addDescription={this.addDescription}
              addAmount={this.addAmount}
              description={this.state.description}
              amount={this.state.amount}
            />
          </div>
        </main>
      </>
    );
  }
}  

export default App;