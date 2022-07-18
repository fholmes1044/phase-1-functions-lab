function distanceFromHqInBlocks (blocks){
    let hr = 42;
    if (blocks <= 42) {
        return hr - blocks;
    }

    else if (blocks > 42) {
        return blocks - hr;
    }
};


function distanceFromHqInFeet(blocks){
  
  return  distanceFromHqInBlocks(blocks) * 264;
};

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    }

    else if (start > destination) {
        return(start - destination) * 264;
    }
};

function calculatesFarePrice(start,destination){

    if (distanceTravelledInFeet (start,destination) < 400) {
        return 0;
    }

    else if (distanceTravelledInFeet(start,destination)> 400 && distanceTravelledInFeet(start,destination)<2000 )
    {
        return (distanceTravelledInFeet(start,destination) - 400) * 0.02;
    }

    else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500)
    {
        return 25;
    }

    else {return "cannot travel that far"
}
}