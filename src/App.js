import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {
   
   constructor(){
    super()
    this.state ={
      squares: [
                false, false, true, false, false, 
                false, true, false, true, false, 
                true, false, false, false, true,
                false, true, false, true, false, 
                false, false, true, false, false
               ],
      load: true,
      winner: false
    }
  }

  handleButtonSwap(index){
    let value = this.state.squares.slice()
    let winCondition = value.every( (index) => index === true  )
    this.setState({winner: winCondition})

    let hasNeighborTop
    let hasNeighborBottom
    let hasNeighborLeft
    let hasNeighborRight
    if (!this.state.winner){
        switch (index){
          case 0:
            hasNeighborRight = true
            hasNeighborLeft = false
            hasNeighborTop = false
            hasNeighborBottom = true
            break
          case 1:
          case 2:
          case 3:
            hasNeighborRight = true
            hasNeighborLeft = true
            hasNeighborTop = false
            hasNeighborBottom = true
            break
          case 4: 
            hasNeighborRight = false
            hasNeighborLeft = true
            hasNeighborTop = false
            hasNeighborBottom = true
            break
          case 5:
            hasNeighborRight = true
            hasNeighborLeft = false
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 6:
          case 7:
          case 8:
            hasNeighborRight = true
            hasNeighborLeft = true
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 9: 
            hasNeighborRight = false
            hasNeighborLeft = true
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 10:
            hasNeighborRight = true
            hasNeighborLeft = false
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 11:
          case 12:
          case 13:
            hasNeighborRight = true
            hasNeighborLeft = true
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 14: 
            hasNeighborRight = false
            hasNeighborLeft = true
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 15:
            hasNeighborRight = true
            hasNeighborLeft = false
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 16:
          case 17:
          case 18:
            hasNeighborRight = true
            hasNeighborLeft = true
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 19: 
            hasNeighborRight = false
            hasNeighborLeft = true
            hasNeighborTop = true
            hasNeighborBottom = true
            break
          case 20:
            hasNeighborRight = true
            hasNeighborLeft = false
            hasNeighborTop = true
            hasNeighborBottom = false
            break
          case 21:
          case 22:
          case 23:
            hasNeighborRight = true
            hasNeighborLeft = true
            hasNeighborTop = true
            hasNeighborBottom = false
            break
          case 24: 
            hasNeighborRight = false
            hasNeighborLeft = true
            hasNeighborTop = true
            hasNeighborBottom = false
            break
          
        }

        const a = this.state.squares.slice()
        if (this.state.squares[index])
          a[index] = !this.state.squares[index]
        else
          a[index] = !this.state.squares[index]

        if (hasNeighborTop){
          const neighborTop = index - 5
          a[neighborTop] = !this.state.squares[neighborTop]
          this.setState({
                        squares:  a
                      })
        }


        if (hasNeighborBottom){
          const neighborBottom = index + 5   
          a[neighborBottom] = !this.state.squares[neighborBottom]
          this.setState({
                        squares:  a
                      })
        }


        if (hasNeighborRight){
          const neighborRight = index + 1 
          a[neighborRight] = !this.state.squares[neighborRight]
          this.setState({
                        squares:  a
                      })
        }


        if (hasNeighborLeft){
              const neighborLeft = index - 1
          a[neighborLeft] = !this.state.squares[neighborLeft]
          this.setState({
                        squares:  a
                      })
        }
    } else {
    value = this.state.squares.slice()
    winCondition = value.every( (index) => index === true  )
    this.setState({winner: winCondition})
    }
  }

  render(){
    if (this.state.load){
      this.setState ({
                        load: false,
                    })
    } 

    return (
      <div className="App">
         <div className = 'row'>
          <button className = 'button' onClick = { () => this.handleButtonSwap(0) }> 
            <div> 
              {Number(this.state.squares[0])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(1) }> 
            <div> 
              {Number(this.state.squares[1])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(2) }> 
            <div> 
              {Number(this.state.squares[2])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(3) }> 
            <div> 
              {Number(this.state.squares[3])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(4) }> 
            <div> 
              {Number(this.state.squares[4])} 
            </div> 
          </button>
        </div>

        <div className = 'row'>
          
          <button className = 'button' onClick = { () => this.handleButtonSwap(5) }> 
            <div> 
              {Number(this.state.squares[5])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(6) }> 
            <div> 
              {Number(this.state.squares[6])} 
            </div> 
          </button>
          
          <button className = 'button' onClick = { () => this.handleButtonSwap(7) }> 
            <div> 
              {Number(this.state.squares[7])} 
            </div> 
          </button>
         
          <button className = 'button' onClick = { () => this.handleButtonSwap(8) }> 
            <div> 
              {Number(this.state.squares[8])} 
            </div> 
          </button>
          
          <button className = 'button' onClick = { () => this.handleButtonSwap(9) }> 
            <div> 
              {Number(this.state.squares[9])} 
            </div> 
          </button>

        </div>

        <div className = 'row'>
          <button className = 'button' onClick = { () => this.handleButtonSwap(10) }> 
            <div> 
              {Number(this.state.squares[10])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(11) }> 
            <div> 
              {Number(this.state.squares[11])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(12) }> 
            <div> 
              {Number(this.state.squares[12])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(13) }> 
            <div> 
              {Number(this.state.squares[13])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(14) }> 
            <div> 
              {Number(this.state.squares[14])} 
            </div> 
          </button>
        </div>     
        <div className = 'row'>
          <button className = 'button' onClick = { () => this.handleButtonSwap(15) }> 
            <div> 
              {Number(this.state.squares[15])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(16) }> 
            <div> 
              {Number(this.state.squares[16])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(17) }> 
            <div> 
              {Number(this.state.squares[17])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(18) }> 
            <div> 
              {Number(this.state.squares[18])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(19) }> 
            <div> 
              {Number(this.state.squares[19])} 
            </div> 
          </button>
        </div> 
        <div className = 'row'>
          <button className = 'button' onClick = { () => this.handleButtonSwap(20) }> 
            <div> 
              {Number(this.state.squares[20])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(21) }> 
            <div> 
              {Number(this.state.squares[21])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(22) }> 
            <div> 
              {Number(this.state.squares[22])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(23) }> 
            <div> 
              {Number(this.state.squares[23])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(24) }> 
            <div> 
              {Number(this.state.squares[24])} 
            </div> 
          </button>
        </div>
        {this.state.winner? <h1> You Won </h1> :  <h1> You haven\'t won yet  </h1>}
      </div>
    );
  }
}

export default App;
