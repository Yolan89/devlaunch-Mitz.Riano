
type instrumentType = "aire" | "cuerda " | "percusion"
abstract class Instrument {
  constructor(public type: instrumentType) {

  }
  play() { }
}

class Guitar extends Instrument {
  constructor() {
    super("cuerda")
  }

  play() {
    console.log(" 🎸 Strum strum strum");

  }
}

class Flute extends Instrument {
  constructor() {
    super("aire")
  }

  play() {
    console.log("🪈  Toot toot toot");

  }
}

class Drums extends Instrument {
  constructor() {
    super("percusion")
  }

  play() {
    console.log("🥁 Boom Boom Boom");

  }
}

class Artist {
  constructor() { }

  playInstrument(Instrument: Instrument) {
    Instrument.play()
  }

}


const Guitar1 = new Guitar
const flute1 = new Flute
const drums1 = new Drums

Guitar1.play()
flute1.play()
drums1.play()

const artist1 = new Artist

artist1.playInstrument(Guitar1)
artist1.playInstrument(flute1)
artist1.playInstrument(drums1)