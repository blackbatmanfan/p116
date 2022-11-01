nosex=0;
nosey=0;

function preload()
{}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initilized');
}

function draw()
{}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x-15;
        nosey = results[0].pose.nose.y-15;
        console.log("nose x =" + nosex);
        console.log("nose y =" + nosey);
    }
}
