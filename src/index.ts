import {
  Application,
  Container,
  Graphics,
  Sprite,
  TextStyle,
  Text,
} from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 1440,
  height: 650,
});

const container = new Container();
container.rotation = 0.1;
// container.angle = 10; Both work but rotation is in radians, angle is in degrees.
app.stage.addChild(container);

const pixi_elemental = Sprite.from("pixi-elemental.png");

pixi_elemental.anchor.set(0.5, 0.5);
pixi_elemental.position.set(app.screen.width / 2, app.screen.height / 2);
pixi_elemental.scale.set(0.5, 0.5);
pixi_elemental.rotation = 0.1;
// pixi_elemental.anchor.set(0);

container.addChild(pixi_elemental);

// const particlecontainer: ParticleContainer = new ParticleContainer();
// Pretty much everything that worked on a Container will work with a ParticleContainer.

const graphy: Graphics = new Graphics();

// we give instructions in order. begin fill, line style, draw circle, end filling
graphy.beginFill(0xff00ff);
graphy.lineStyle(10, 0x00ff00);
graphy.drawCircle(0, 0, 25); // See how I set the drawing at 0,0? NOT AT 100, 100!
graphy.endFill();

app.stage.addChild(graphy); //I can add it before setting position, nothing bad will happen.

// Here we set it at 100,100
graphy.x = 100;
graphy.y = 100;

const styly: TextStyle = new TextStyle({
  align: "center",
  fill: "#754c24",
  fontSize: 42,
});
const texty: Text = new Text("私に気づいて先輩！", styly); // Text supports unicode!
// texty.text = "This is expensive to change, please do not abuse";

app.stage.addChild(texty);
