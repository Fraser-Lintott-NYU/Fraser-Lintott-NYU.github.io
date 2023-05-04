class Popup{
    constructor(Pwidth,Pheight,order)
    {
    this.ad = ads[int(random(0,ads.length))];
    this.order = order;
    this.Pheight = Pheight;
    this.Pwidth = Pwidth;
    this.xPos = random(0,width - this.Pwidth);
    this.yPos = random(0,height - this.Pheight);
    //Pwidth and Pheight = dimensions of popup
    }

    drawPopup()
    {
        stroke(0);
        fill(255);
        strokeWeight(3);
        rect(this.xPos,this.yPos,this.Pwidth,this.Pheight);
        strokeWeight(0);
        image(this.ad, this.xPos, this.yPos, this.Pwidth, this.Pheight);
        strokeWeight(3);
        square(this.xPos + (this.Pwidth - 60), this.yPos + 10, 50);
        strokeWeight(5);
        stroke(255,0,0);
        line(this.xPos + (this.Pwidth - 60), this.yPos + 10, this.xPos + (this.Pwidth - 10), this.yPos + 60);
        line(this.xPos + (this.Pwidth - 60),this.yPos + 60,this.xPos + (this.Pwidth - 10),this.yPos + 10);
    }

    getWidth()
    {
        return this.Pwidth;
    }

    getHeight()
    {
        return this.Pheight;
    }

    getXPos()
    {
        return this.xPos;
    }

    getYPos()
    {
        return this.yPos;
    }

    getOrder()
    {
        return this.order;
    }

    minusOrder()
    {
        this.order = this.order - 1;
    }
}
//images
let imgTestosterone;
let imgCheating;
let imgSpaceship;
let imgMcafee;
let imgButt;
let imgDiet;
let imgDiet2;
let imgSad;
let imgInsecure;
let imgCat;
let imgDOOM;
let imgBatman;
let imgSunglass;
let imgDiglett;
let imgAybabtu;
let imgMegaman;

//other variables
let ads = [];
let storePopups = [];

function preload()
{
    imgDOOM = loadImage("img/DOOM.jpg");
    imgCheating = loadImage("img/cheating-ad.png");
    imgMcafee = loadImage("img/mcafee.JPG");
    imgSpaceship = loadImage("img/spaceship.png");
    imgTestosterone = loadImage("img/testosterone.jpg");
    imgButt = loadImage("img/buttlmao.jpg");
    imgDiet = loadImage("img/dietpills.jpg");
    imgDiet2 = loadImage("img/dietpills2.jpg");
    imgSad = loadImage("img/bigsad.png");
    imgInsecure = loadImage("img/insecure.png");
    imgCat = loadImage("img/maxwell.png");
    imgBatman = loadImage("img/batman.jpg");
    imgSunglass = loadImage("img/sunglass.png");
    imgDiglett = loadImage("img/diglett.png");
    imgAybabtu = loadImage("img/aybabtu.png");
    imgMegaman = loadImage("img/megaman.jpg");
}

function setup(){
    createCanvas(1610,1000);
    ads.push(imgMcafee);
    ads.push(imgCheating);
    ads.push(imgTestosterone);
    ads.push(imgButt);
    ads.push(imgDiet);
    ads.push(imgDiet2);
    ads.push(imgSad);
    ads.push(imgInsecure);
    storePopups.push(new Popup(random(100, 900),random(100, 400),storePopups.length));
}

function draw(){
    textAlign(LEFT);
    background(202, 104, 209);
    textSize(50);
    stroke(0);
    strokeWeight(5);
    fill(255);
    text("welcome to my site!", 20, 70);
    image(imgSpaceship, 460, -25, 150,150)

    

    image(imgCat, 1150, 0, 476, 309);
    textSize(20);
    strokeWeight(2);
    text("my cat, Maxwell", 1350, 320);
 
    image(imgDOOM, 650, 75, 308 * 1.5, 176 * 1.5);
    text("my favorite game, DOOOOM", 750, 100 + (176*1.5));

    image(imgSunglass, -100, 100);

    image(imgDiglett, 1100, 500);
    text("my fav pokemon", 1275, 965);

    image(imgAybabtu, 875, 550);

    image(imgMegaman, 650, 725, 648/2, 512/2);

    image(imgBatman, 50, 600, 200*2.5, 150*2.5);
    fill(0);
    stroke(255);
    textSize(40)
    text("BATMANNN", 300, 950);

    stroke(0);
    fill(255);
    textSize(30);
    strokeWeight(4);
    textAlign(CENTER);
    text("Hi!! This is my first website to log some of my hobbies, pictures, and journal entries (please don't judge ;-;)", width/2, height/2);

    for(let pop of storePopups)
    {   
        pop.drawPopup();
    }
}

 function mouseMoved(){
    if(storePopups.length <= 0)
    {
        storePopups.push(new Popup(random(100, 900),random(100, 400),storePopups.length));
    }
    else 
    {
        if(random(1,100) >= 99 - frameCount/250)
        {
        storePopups.push(new Popup(random(100, 900),random(100, 400),storePopups.length));
        }
    }   
}

function mouseClicked(){
   for(let pop of storePopups)
   {
        if((mouseY > (pop.getYPos() + 10) && mouseY < (pop.getYPos() + 60)) && (mouseX > pop.getXPos() + (pop.getWidth() - 60) && mouseX < pop.getXPos() + (pop.getWidth() - 10)))
        {
            let k = pop.getOrder()
            storePopups.splice(pop.getOrder(),1);
            for(let pop2 of storePopups)
            {
                if(pop2.getOrder() > k)
                {
                    pop2.minusOrder();
                }
            }
        }
    }
}