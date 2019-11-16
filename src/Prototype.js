import React, {Component} from 'react'

class Game extends Component{
  constructor(){
    super()
    this.state ={
      block: [
          false, false, true, false, false, 
                  false, true, false, true, false, 
                  true, false, false, false, true,
                  false, true, false, true, false, 
                  false, false, true, false, false
                  ],
      winner: false
    }
  }

  handleButtonSwap(index){
  let copy = this.state.block.slice()
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

        const copy = this.state.block.slice()
        if (this.state.block[index])
          copy[index] = !this.state.block[index]
        else
          copy[index] = !this.state.block[index]

        if (hasNeighborTop){
          const neighborTop = index - 5
          copy[neighborTop] = !this.state.block[neighborTop]
        }


        if (hasNeighborBottom){
          const neighborBottom = index + 5   
          copy[neighborBottom] = !this.state.block[neighborBottom]

        }


        if (hasNeighborRight){
          const neighborRight = index + 1 
          copy[neighborRight] = !this.state.block[neighborRight]

        }


        if (hasNeighborLeft){
          const neighborLeft = index - 1
          copy[neighborLeft] = !this.state.block[neighborLeft]

        }
      
    let winCondition = copy.every( (index) => index === true  )

    this.setState({block: copy, winner: winCondition})
    }




  }

  render(){
    let display = this.state.winner? <div> You won! </div> : <div> Play </div>
    return (
          <div className="App">
              {display}
                <div className = 'row'>
          <button className = 'button' onClick = { () => this.handleButtonSwap(0) }> 
            <div> 
              {Number(this.state.block[0])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(1) }> 
            <div> 
              {Number(this.state.block[1])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(2) }> 
            <div> 
              {Number(this.state.block[2])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(3) }> 
            <div> 
              {Number(this.state.block[3])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(4) }> 
            <div> 
              {Number(this.state.block[4])} 
            </div> 
          </button>
 
          
          <button className = 'button' onClick = { () => this.handleButtonSwap(5) }> 
            <div> 
              {Number(this.state.block[5])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(6) }> 
            <div> 
              {Number(this.state.block[6])} 
            </div> 
          </button>
          
          <button className = 'button' onClick = { () => this.handleButtonSwap(7) }> 
            <div> 
              {Number(this.state.block[7])} 
            </div> 
          </button>
         
          <button className = 'button' onClick = { () => this.handleButtonSwap(8) }> 
            <div> 
              {Number(this.state.block[8])} 
            </div> 
          </button>
          
          <button className = 'button' onClick = { () => this.handleButtonSwap(9) }> 
            <div> 
              {Number(this.state.block[9])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(10) }> 
            <div> 
              {Number(this.state.block[10])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(11) }> 
            <div> 
              {Number(this.state.block[11])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(12) }> 
            <div> 
              {Number(this.state.block[12])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(13) }> 
            <div> 
              {Number(this.state.block[13])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(14) }> 
            <div> 
              {Number(this.state.block[14])} 
            </div> 
          </button>
  
          <button className = 'button' onClick = { () => this.handleButtonSwap(15) }> 
            <div> 
              {Number(this.state.block[15])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(16) }> 
            <div> 
              {Number(this.state.block[16])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(17) }> 
            <div> 
              {Number(this.state.block[17])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(18) }> 
            <div> 
              {Number(this.state.block[18])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(19) }> 
            <div> 
              {Number(this.state.block[19])} 
            </div> 
          </button>
      
          <button className = 'button' onClick = { () => this.handleButtonSwap(20) }> 
            <div> 
              {Number(this.state.block[20])} 
            </div> 
          </button>

          <button className = 'button' onClick = { () => this.handleButtonSwap(21) }> 
            <div> 
              {Number(this.state.block[21])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(22) }> 
            <div> 
              {Number(this.state.block[22])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(23) }> 
            <div> 
              {Number(this.state.block[23])} 
            </div> 
          </button>
          <button className = 'button' onClick = { () => this.handleButtonSwap(24) }> 
            <div> 
              {Number(this.state.block[24])} 
            </div> 
          </button>
        </div>
      </div>
    );
  }
}
export default Game;

import React, {Component} from 'react'

class Game extends Component{
  constructor(){
    super()
    this.state ={
      block: [false, true],
      winner: false
    }
  }

  handleButtonSwap(index){
    let copy = this.state.block.slice()
    if (!this.state.winner)
      copy[index] = !this.state.block[index]
    let winCondition = copy.every( (index) => index === true  )

    this.setState({block: copy, winner: winCondition})
  }

  render(){
    let display = this.state.winner? <div> You won! </div> : <div> Play </div>
    return (
        <div className="App">
            {display}
            <button className = 'button' onClick = { () => this.handleButtonSwap(0) }> 
              <div> 
                {Number(this.state.block[0])}
              </div> 
            </button>

            <button className = 'button' onClick = { () => this.handleButtonSwap(1) }> 
              <div> 
                {Number(this.state.block[1])}
              </div> 
            </button>
      </div>
    );
  }
}
export default Game;