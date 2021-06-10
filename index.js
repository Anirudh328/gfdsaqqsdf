import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Carbody from "./Carbody/Carbody.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Shadow from "./Shadow/Shadow.js";
import Skidfr from "./Skidfr/Skidfr.js";
import Skidffl from "./Skidffl/Skidffl.js";
import Skidrr from "./Skidrr/Skidrr.js";
import Skidrl from "./Skidrl/Skidrl.js";
import CarData from "./CarData/CarData.js";
import Traffic from "./Traffic/Traffic.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Overdrive from "./Overdrive/Overdrive.js";
import NitroBar from "./NitroBar/NitroBar.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import AI from "./AI/AI.js";
import Fadde from "./Fadde/Fadde.js";
import _991 from "./_991/_991.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import CarInfo from "./CarInfo/CarInfo.js";
import CarDataHealthr from "./CarDataHealthr/CarDataHealthr.js";
import CarDataGripbar2 from "./CarDataGripbar2/CarDataGripbar2.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Go from "./Go/Go.js";
import Countdown from "./Countdown/Countdown.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import WantedLevel from "./WantedLevel/WantedLevel.js";
import B from "./B/B.js";
import TrafficNearMissDetector from "./TrafficNearMissDetector/TrafficNearMissDetector.js";
import ActionDetect from "./ActionDetect/ActionDetect.js";
import Spike from "./Spike/Spike.js";
import Heli from "./Heli/Heli.js";
import Roadblock from "./Roadblock/Roadblock.js";
import RoadblockWarning from "./RoadblockWarning/RoadblockWarning.js";
import HeliEmp from "./HeliEmp/HeliEmp.js";
import WreckedMessage from "./WreckedMessage/WreckedMessage.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import TouchControls from "./TouchControls/TouchControls.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import B2 from "./B2/B2.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import HelpText from "./HelpText/HelpText.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Options1 from "./Options1/Options1.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import C from "./C/C.js";
import C2 from "./C2/C2.js";
import Sprite17 from "./Sprite17/Sprite17.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Carbody: new Carbody({
    x: -263,
    y: -20.999999999999932,
    direction: -90,
    costumeNumber: 7,
    size: 20,
    visible: false,
    layerOrder: 47
  }),
  Sprite1: new Sprite1({
    x: 243,
    y: -100,
    direction: 0,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Shadow: new Shadow({
    x: -260,
    y: -18.999999999999932,
    direction: -90,
    costumeNumber: 7,
    size: 20,
    visible: false,
    layerOrder: 8
  }),
  Skidfr: new Skidfr({
    x: 7.599999999999998,
    y: -112.01249999999939,
    direction: -1.3999999999999977,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 2
  }),
  Skidffl: new Skidffl({
    x: -8.400000000000002,
    y: -112.01249999999939,
    direction: -1.3999999999999977,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 3
  }),
  Skidrr: new Skidrr({
    x: 8.274999999999999,
    y: -131.0124999999994,
    direction: -1.3999999999999977,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 4
  }),
  Skidrl: new Skidrl({
    x: -7.725000000000002,
    y: -129.0499999999994,
    direction: -1.3999999999999977,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 5
  }),
  CarData: new CarData({
    x: 49,
    y: 30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Traffic: new Traffic({
    x: -266,
    y: 60,
    direction: -90,
    costumeNumber: 4,
    size: 20,
    visible: false,
    layerOrder: 42
  }),
  Sprite2: new Sprite2({
    x: -198,
    y: -169,
    direction: 90,
    costumeNumber: 10,
    size: 100,
    visible: false,
    layerOrder: 43
  }),
  Overdrive: new Overdrive({
    x: 74,
    y: 26,
    direction: -90,
    costumeNumber: 6,
    size: 15,
    visible: false,
    layerOrder: 32
  }),
  NitroBar: new NitroBar({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 45
  }),
  Sprite3: new Sprite3({
    x: 38,
    y: -130,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 31
  }),
  AI: new AI({
    x: -262,
    y: -100,
    direction: -90,
    costumeNumber: 4,
    size: 20,
    visible: false,
    layerOrder: 48
  }),
  Fadde: new Fadde({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 50
  }),
  _991: new _991({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 20
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: -160,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 51
  }),
  Sprite5: new Sprite5({
    x: -170,
    y: 44,
    direction: 90,
    costumeNumber: 2,
    size: 90,
    visible: false,
    layerOrder: 34
  }),
  CarInfo: new CarInfo({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 18,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  CarDataHealthr: new CarDataHealthr({
    x: -320,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  CarDataGripbar2: new CarDataGripbar2({
    x: -320,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Sprite6: new Sprite6({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 39
  }),
  Go: new Go({
    x: 182,
    y: 149,
    direction: 90,
    costumeNumber: 2,
    size: 50,
    visible: false,
    layerOrder: 38
  }),
  Countdown: new Countdown({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 70.00000000000003,
    visible: false,
    layerOrder: 10
  }),
  Sprite7: new Sprite7({
    x: 0,
    y: 31.5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 30
  }),
  WantedLevel: new WantedLevel({
    x: -205,
    y: -119,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 41
  }),
  B: new B({
    x: -205,
    y: -134,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 44
  }),
  TrafficNearMissDetector: new TrafficNearMissDetector({
    x: -98.03191103720289,
    y: 58.87999999999809,
    direction: 0,
    costumeNumber: 1,
    size: 17.51857051073599,
    visible: false,
    layerOrder: 11
  }),
  ActionDetect: new ActionDetect({
    x: -1.2000000000000024,
    y: -69.59999999999948,
    direction: 90,
    costumeNumber: 1,
    size: 33.00000000000001,
    visible: false,
    layerOrder: 46
  }),
  Spike: new Spike({
    x: 20.36071985862459,
    y: 179,
    direction: 90,
    costumeNumber: 5,
    size: 70,
    visible: false,
    layerOrder: 12
  }),
  Heli: new Heli({
    x: -444,
    y: 83,
    direction: -90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 49
  }),
  Roadblock: new Roadblock({
    x: -43,
    y: -76.3000000000186,
    direction: 90,
    costumeNumber: 3,
    size: 80,
    visible: false,
    layerOrder: 13
  }),
  RoadblockWarning: new RoadblockWarning({
    x: 8.968088962797104,
    y: 48,
    direction: 90,
    costumeNumber: 3,
    size: 80,
    visible: false,
    layerOrder: 14
  }),
  HeliEmp: new HeliEmp({
    x: -3.28873470147082,
    y: -100,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 27
  }),
  WreckedMessage: new WreckedMessage({
    x: -1,
    y: 5,
    direction: 90,
    costumeNumber: 1,
    size: 93.70000000000036,
    visible: false,
    layerOrder: 15
  }),
  Sprite11: new Sprite11({
    x: 10,
    y: -146,
    direction: 90,
    costumeNumber: 2,
    size: 250,
    visible: false,
    layerOrder: 16
  }),
  TouchControls: new TouchControls({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Sprite8: new Sprite8({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Sprite9: new Sprite9({
    x: -176,
    y: -14,
    direction: 90,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 35
  }),
  Sprite10: new Sprite10({
    x: -18,
    y: -165,
    direction: 90,
    costumeNumber: 9,
    size: 100,
    visible: false,
    layerOrder: 25
  }),
  Sprite12: new Sprite12({
    x: 182,
    y: -156,
    direction: 90,
    costumeNumber: 2,
    size: 30,
    visible: false,
    layerOrder: 26
  }),
  B2: new B2({
    x: 118,
    y: -175,
    direction: 90,
    costumeNumber: 3,
    size: 60,
    visible: false,
    layerOrder: 29
  }),
  Sprite13: new Sprite13({
    x: -170,
    y: -64,
    direction: 90,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 36
  }),
  HelpText: new HelpText({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 8,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Sprite14: new Sprite14({
    x: -170,
    y: -114,
    direction: 90,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 37
  }),
  Options1: new Options1({
    x: 10,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 28
  }),
  Sprite15: new Sprite15({
    x: -22,
    y: 157,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 40
  }),
  Sprite16: new Sprite16({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 33
  }),
  C: new C({
    x: -135,
    y: 70,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  C2: new C2({
    x: 100,
    y: 70,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Sprite17: new Sprite17({
    x: 180,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 24
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
