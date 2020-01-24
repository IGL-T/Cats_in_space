let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type)

//Create a Pixi Application
let app = new PIXI.Application({
        width: 1280,         // default: 800
        height: 720,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1       // default: 1
    }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

PIXI.loader
    .add("assets/images/peng.png")
    .add("assets/images/nebula.png")
    .load(()=>{

        //background
        let background = new PIXI.extras.TilingSprite(
            PIXI.loader.resources["assets/images/nebula.png"].texture,1024,1024
        );
        background.position.x=640;
        background.position.y=360;
        background.tilePosition.x=512;
        background.tilePosition.y=512;
        background.width=1280*2;
        background.height=720*2;
        background.anchor.set(0.5);
        app.stage.addChild(background);

        // cat
        let cat = new PIXI.Sprite(
            PIXI.loader.resources["assets/images/peng.png"].texture
        );
        cat.width=128;
        cat.height=128;
        cat.position.x=(200);
        cat.position.y=(140);
        cat.anchor.set(0.5);
        app.stage.addChild(cat);

        //update
        app.ticker.add((delta)=>{
            //background.tilePosition.x-=0.1;
            background.rotation+=0.005
        });
        app.ticker.add(delta => gameLoop(delta));

            function gameLoop(delta){
                    cat.x += 1 + delta;
            }

});



//