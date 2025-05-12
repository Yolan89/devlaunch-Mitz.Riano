
type FanSize = 'small' | 'medium' | 'large'
type FanColor = 'black' | 'Gray' | 'White'
type FanSpeed = 0 | 1 | 2 | 3
class Fan {
  public speed: FanSpeed
  constructor(
    public type: string,
    public size: FanSize,
    public color: FanColor
  ) {
    this.type = type
    this.speed = 0
    this.color = color
    this.size = size
  }


  public setType(type: string) {
    this.type = type
  }

  public getType(type: string) {
    return type
  }

  public setSize(size: FanSize) {
    this.size = size
  }

  public getSize(size: FanSize) {
    return size
  }

  public setColor(color: FanColor) {
    this.color = color
  }

  public getColor(color: FanColor) {
    return color
  }
  public setSpeed(speed: FanSpeed) {
    this.speed = speed
  }

  public getSpeed(speed: FanSpeed) {
    return speed
  }
}

const Fan1 = new Fan('LG', 'small', 'Gray')

Fan1.getColor('Gray')
Fan1.getSize('small')
Fan1.getType('LG')
Fan1.getSpeed(2)
console.log(Fan1.speed);
console.log(Fan1.type);
console.log(Fan1.color);
console.log(Fan1.size);
