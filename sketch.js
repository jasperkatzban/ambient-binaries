const soundSourceFilenamePrefix = "assets/audio/";
let bg;

const canvasWidth = 640;
const canvasHeight = 640;

const soundsourcePeopleudioRadius = 40;
const soundSourcePointRadius = 5;

let peopleAreToggled = false;
let cursorPeople;
let cursorNoPeople;
let x = 1;
let y = 1;
let easing = 0.2;

class SoundSource {
  constructor(title, filename, x, y, soundRadius) {
    this.title = title;
    this.filename = filename;

    this.x = x;
    this.y = y;

    this.radius = soundSourcePointRadius;
    this.soundRadius = soundRadius;
    this.sourcePeople = loadSound(soundSourceFilenamePrefix + this.filename + "NoPeople" + ".mp3");
    this.sourceNoPeople = loadSound(soundSourceFilenamePrefix + this.filename + "People" + ".mp3");
    this.hasPeople = false;
    this.isPlaying = false;
    this.volume = 0.0;
  }

  loop() {
    this.sourcePeople.setLoop(true);
    this.sourceNoPeople.setLoop(true);
    this.isPlaying = false;
  }

  togglePeople() {
    this.updateVolume();
    if (this.hasPeople) {
      this.sourcePeople.setVolume(0.0);
      this.sourceNoPeople.setVolume(this.volume);
      this.hasPeople = false;
    } else {
      this.sourcePeople.setVolume(this.volume);
      this.sourceNoPeople.setVolume(0.0);
      this.hasPeople = true;
    }
  }

  // pause() {
  //   if (this.hasPeople) {
  //     this.sourceNoPeople.pause();
  //   } else {
  //     this.sourcePeople.pause();
  //   this.isPlaying = false;
  //   }
  // }

  // play() {
  //   if (this.hasPeople) {
  //     this.sourceNoPeople.play();
  //   } else {
  //     this.sourcePeople.play();
  //   this.isPlaying = true;
  //   }
  // }

  updateVolume() {
    let d = dist(this.x, this.y, mouseX, mouseY);
    d = constrain(d, 0, this.soundRadius);
    let aInt = map(d, 0, this.soundRadius, 100, 0);
    let a = float(aInt) / 100.0;
    this.volume = a;

    if (this.hasPeople) {
      // this.sourcePeople.setVolume(a);
      this.sourcePeople.setVolume(1.0);
    } else {
      this.sourceNoPeople.setVolume(1.0);
    }

    if (d >= this.soundRadius) {
      if (this.isPlaying) {
        this.sourceNoPeople.pause();
        this.sourcePeople.pause();
        this.isPlaying = false;
        print("paused:" + this.title);
      }
    } else {
      if (this.isPlaying == false) {
        this.sourceNoPeople.play();
        this.sourcePeople.play();
        this.isPlaying = true;
        print("playing:" + this.title);
      }
    }
  }

  draw() {
    this.hasPeople ? fill(255) : fill(0);
    ellipse(this.x, this.y, this.radius, this.radius);

    fill(0);
    textSize(10);
    textAlign(CENTER, CENTER);
    text(this.title, this.x, this.y + this.radius + 5)
  }

  update() {
    // this.draw();
    this.updateVolume();
  }
}

function drawCorona(x, y) {
  if (peopleAreToggled) {
    image(cursorNoPeople, x - 50, y - 50);
  } else {
    image(cursorPeople, x - 50, y - 50);
  }
}

let sourceRoom;
let sourceSuite;
let sourceLobby;
let sourceKitchen;
let sourceLaundry;

let sourceMilasLobby;
let sourceUpperLibrary;
let sourceLowerLibrary;
let sourceNordStage;
let sourceNordSeats;
let sourcePeoplertGallery;
let sourceQuietReadingRoom;
let sourceTeamRoom;
let sourceReturnDesign;

let sourceFlagPoles;

let sourceDiningHall;
let sourceMezzanine;
let sourceDishes;
let sourceWoodenWaterfall;
// let sourceMailroom;

let sourceOurSpace;

let sourceFreightElevator;
let sourceTables;
let sourceEntrance;
let source3DPrinters;
let sourceShop;
let sourceGreenhouse;
let sourceFishbowl;
let sourceParc;
let sourceDesnatStudio;
let sourceGEM;
let sourceEEStockroom;
let sourcePIERoom;
let sourceMemorialLounge;
let sourceMatsciLab;
let sourceElevator;
let sourceHallway;

function preload() {
  cursorPeople = loadImage('assets/images/cursorPeople.png');
  cursorNoPeople = loadImage('assets/images/cursorNoPeople.png');
  soundFormats('mp3');

  sourceRoom = new SoundSource('sourceRoom', 'Room', 449, 477, soundsourcePeopleudioRadius);
  sourceSuite = new SoundSource('sourceSuite', 'Suite', 416, 482, soundsourcePeopleudioRadius);
  sourceLobby = new SoundSource('sourceLobby', 'Lobby', 387, 517, soundsourcePeopleudioRadius);
  sourceKitchen = new SoundSource('sourceKitchen', 'Kitchen', 349, 529, soundsourcePeopleudioRadius);
  sourceLaundry = new SoundSource('sourceLaundry', 'Laundry', 382, 579, soundsourcePeopleudioRadius);
  sourceMilasLobby = new SoundSource('sourceMilasLobby', 'MilasLobby', 256, 327, soundsourcePeopleudioRadius);
  sourceUpperLibrary = new SoundSource('sourceUpperLibrary', 'UpperLibrary', 187, 331, soundsourcePeopleudioRadius);
  sourceLowerLibrary = new SoundSource('sourceLowerLibrary', 'LowerLibrary', 170, 391, soundsourcePeopleudioRadius);
  sourceNordStage = new SoundSource('sourceNordStage', 'NordStage', 103, 395, soundsourcePeopleudioRadius);
  sourceNordSeats = new SoundSource('sourceNordSeats', 'NordSeats', 81, 340, soundsourcePeopleudioRadius);
  sourcePeoplertGallery = new SoundSource('sourcePeoplertGallery', 'ArtGallery', 47, 371, soundsourcePeopleudioRadius);
  sourceQuietReadingRoom = new SoundSource('sourceQuietReadingRoom', 'QuietReadingRoom', 128, 300, soundsourcePeopleudioRadius);
  sourceTeamRoom = new SoundSource('sourceTeamRoom', 'TeamRoom', 212, 286, soundsourcePeopleudioRadius);
  sourceReturnDesign = new SoundSource('sourceReturnDesign', 'ReturnDesign', 225, 378, soundsourcePeopleudioRadius);
  sourceFlagPoles = new SoundSource('sourceFlagPoles', 'FlagPoles', 369, 366, soundsourcePeopleudioRadius);
  sourceDiningHall = new SoundSource('sourceDiningHall', 'DiningHall', 453, 379, soundsourcePeopleudioRadius);
  sourceMezzanine = new SoundSource('sourceMezzanine', 'Mezzanine', 462, 340, soundsourcePeopleudioRadius);
  sourceDishes = new SoundSource('sourceDishes', 'Dishes', 506, 358, soundsourcePeopleudioRadius);
  sourceWoodenWaterfall = new SoundSource('sourceWoodenWaterfall', 'WoodenWaterfall', 572, 374, soundsourcePeopleudioRadius);
  // sourceMailroom = new SoundSource('sourceMailroom', 'Mailroom', 506, 407, soundsourcePeopleudioRadius);
  sourceOurSpace = new SoundSource('sourceOurSpace', 'OurSpace', 506, 298, soundsourcePeopleudioRadius);
  sourceFreightElevator = new SoundSource('sourceFreightElevator', 'FreightElevator', 488, 180, soundsourcePeopleudioRadius);
  sourceTables = new SoundSource('sourceTables', 'Tables', 440, 159, soundsourcePeopleudioRadius);
  sourceEntrance = new SoundSource('sourceEntrance', 'Entrance', 386, 153, soundsourcePeopleudioRadius);
  source3DPrinters = new SoundSource('source3DPrinters', '3DPrinters', 321, 150, soundsourcePeopleudioRadius);
  sourceShop = new SoundSource('sourceShop', 'Shop', 267, 150, soundsourcePeopleudioRadius);
  sourceGreenhouse = new SoundSource('sourceGreenhouse', 'Greenhouse', 225, 164, soundsourcePeopleudioRadius);
  sourceFishbowl = new SoundSource('sourceFishbowl', 'Fishbowl', 171, 181, soundsourcePeopleudioRadius);
  sourceDesnatStudio = new SoundSource('sourceDesnatStudio', 'DesnatStudio', 344, 110, soundsourcePeopleudioRadius);
  sourceGEM = new SoundSource('sourceGEM', 'GEM', 424, 110, soundsourcePeopleudioRadius);
  sourceParc = new SoundSource('sourceParc', 'Parc', 154, 143, soundsourcePeopleudioRadius);
  sourceEEStockroom = new SoundSource('sourceEEStockroom', 'EEStockroom', 218, 106, soundsourcePeopleudioRadius);
  sourcePIERoom = new SoundSource('sourcePIERoom', 'PIERoom', 280, 87, soundsourcePeopleudioRadius);
  sourceMemorialLounge = new SoundSource('sourceMemorialLounge', 'MemorialLounge', 98, 119, soundsourcePeopleudioRadius);
  sourceMatsciLab = new SoundSource('sourceMatsciLab', 'MatsciLab', 209, 68, soundsourcePeopleudioRadius);
  sourceElevator = new SoundSource('sourceElevator', 'Elevator', 386, 55, soundsourcePeopleudioRadius);
  sourceHallway = new SoundSource('sourceHallway', 'Hallway', 482, 81, soundsourcePeopleudioRadius);
}

function setup() {
  let cnv = createCanvas(640, 640);
  cnv.mousePressed(canvasPressed);
  bg = loadImage("assets/images/bg.png");
  background(bg);

  noCursor();

  sourceRoom.loop();
  sourceSuite.loop();
  sourceLobby.loop();
  sourceKitchen.loop();
  sourceLaundry.loop();
  sourceMilasLobby.loop();
  sourceUpperLibrary.loop();
  sourceLowerLibrary.loop();
  sourceNordStage.loop();
  sourceNordSeats.loop();
  sourcePeoplertGallery.loop();
  sourceQuietReadingRoom.loop();
  sourceTeamRoom.loop();
  sourceReturnDesign.loop();
  sourceFlagPoles.loop();
  sourceDiningHall.loop();
  sourceMezzanine.loop();
  sourceDishes.loop();
  sourceWoodenWaterfall.loop();
  // sourceMailroom.loop();
  sourceOurSpace.loop();
  sourceFreightElevator.loop();
  sourceTables.loop();
  sourceEntrance.loop();
  source3DPrinters.loop();
  sourceShop.loop();
  sourceGreenhouse.loop();
  sourceFishbowl.loop();
  sourceDesnatStudio.loop();
  sourceGEM.loop();
  sourceParc.loop();
  sourceEEStockroom.loop();
  sourcePIERoom.loop();
  sourceMemorialLounge.loop();
  sourceMatsciLab.loop();
  sourceElevator.loop();
  sourceHallway.loop();
}

function canvasPressed() {
  peopleAreToggled = !peopleAreToggled;

  sourceRoom.togglePeople()
  sourceSuite.togglePeople()
  sourceLobby.togglePeople()
  sourceKitchen.togglePeople()
  sourceLaundry.togglePeople()
  sourceMilasLobby.togglePeople()
  sourceUpperLibrary.togglePeople()
  sourceLowerLibrary.togglePeople()
  sourceNordStage.togglePeople()
  sourceNordSeats.togglePeople()
  sourcePeoplertGallery.togglePeople()
  sourceQuietReadingRoom.togglePeople()
  sourceTeamRoom.togglePeople()
  sourceReturnDesign.togglePeople()
  sourceFlagPoles.togglePeople()
  sourceDiningHall.togglePeople()
  sourceMezzanine.togglePeople()
  sourceDishes.togglePeople()
  sourceWoodenWaterfall.togglePeople()
  // sourceMailroom.togglePeople()
  sourceOurSpace.togglePeople()
  sourceFreightElevator.togglePeople()
  sourceTables.togglePeople()
  sourceEntrance.togglePeople()
  source3DPrinters.togglePeople()
  sourceShop.togglePeople()
  sourceGreenhouse.togglePeople()
  sourceFishbowl.togglePeople()
  sourceDesnatStudio.togglePeople()
  sourceGEM.togglePeople()
  sourceParc.togglePeople()
  sourceEEStockroom.togglePeople()
  sourcePIERoom.togglePeople()
  sourceMemorialLounge.togglePeople()
  sourceMatsciLab.togglePeople()
  sourceElevator.togglePeople()
  sourceHallway.togglePeople()
}

function draw() {
  blendMode(BLEND);
  background(bg); // MOVE to once in setup()

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  blendMode(MULTIPLY);
  drawCorona(x, y);

  sourceRoom.update();
  sourceSuite.update();
  sourceLobby.update();
  sourceKitchen.update();
  sourceLaundry.update();
  sourceMilasLobby.update();
  sourceUpperLibrary.update();
  sourceLowerLibrary.update();
  sourceNordStage.update();
  sourceNordSeats.update();
  sourcePeoplertGallery.update();
  sourceQuietReadingRoom.update();
  sourceTeamRoom.update();
  sourceReturnDesign.update();
  sourceFlagPoles.update();
  sourceDiningHall.update();
  sourceMezzanine.update();
  sourceDishes.update();
  sourceWoodenWaterfall.update();
  // sourceMailroom.update();
  sourceOurSpace.update();
  sourceFreightElevator.update();
  sourceTables.update();
  sourceEntrance.update();
  source3DPrinters.update();
  sourceShop.update();
  sourceGreenhouse.update();
  sourceFishbowl.update();
  sourceDesnatStudio.update();
  sourceGEM.update();
  sourceParc.update();
  sourceEEStockroom.update();
  sourcePIERoom.update();
  sourceMemorialLounge.update();
  sourceMatsciLab.update(); ``
  sourceElevator.update();
  sourceHallway.update();
}
