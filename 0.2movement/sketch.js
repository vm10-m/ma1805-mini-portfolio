let i = 0;


function setup () {
    createCanvas(400, 400);
    }


function draw () {
        background(220);

        //eyes
        fill(100, 10, 67);
        circle (50,50,50);
        circle (150,50,50); 

        //mouth
        fill(0,206,0,207);
        triangle(30,67,68 , 20 , 670);
        circle(200,150, i);
        arc(540, i, 300, i, 180, 360, );


        //increment i 

        i = i + 1;
    }
