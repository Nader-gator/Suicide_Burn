export default class GameHandler{
  constructor(surface, ship){
    this.ship = ship
    this.surface = surface
  }

  isOver(){
    if 
      (this.surface.collisionHappened(this.ship.boardX+30,this.ship.boardY+30) ||
      this.surface.collisionHappened(this.ship.boardX+30,this.ship.boardY) ||
      this.surface.collisionHappened(this.ship.boardX,this.ship.boardY+30) ||
      this.surface.collisionHappened(this.ship.boardX,this.ship.boardY)
    ){
      return true
    }
    return false
  }


  checkLanding(){
        let fX ;let fY;let lX;let lY
    for (let i = 0; i < this.surface.points.length; i++) {
      if (this.surface.points[i][0] > this.ship.boardX+30){
        lX = this.surface.points[i][0]
        lY = this.surface.points[i][1]
        fX = this.surface.points[i - 1][0]
        fY = this.surface.points[i - 1][1]
        break
      }
    }
    
    if (Math.abs(fY - lY) <= 5 
    && Math.abs(fX -lX) > 20
    && (this.ship.vSpeed < 0.35)
    && (Math.abs(this.ship.hSpeed) < 0.2)
    && (this.ship.angle === 0 || this.ship.angle === -10 || this.ship.angle === 10)
    ){
      console.log('good')
    }else{
      console.log('bad')
      // console.log(Math.abs(fY - lY))
      // console.log(Math.abs(fX - lX))
      // console.log((this.ship.vSpeed))
      // console.log(Math.abs(this.ship.hSpeed))
    }
  }

  start(){
    this.interval = setInterval(() => {
      this.ship.step()
      this.ship.render()
      if (this.isOver()){
        this.ship.fire = false
        this.ship.render()
        clearInterval(this.interval)
        this.checkLanding()
      }
    }, 20);


  }
}