// Solve of Problem-5...............

function gemsToDaimond(gq1, gq2, gq3)
{
    const gp1 = 21;
    const gp2 = 32;
    const gp3 = 43;

    const d1 = gp1*gq1;
    const d2 = gp2*gq2;
    const d3 = gp3*gq3;

    const total_diamond = d1+d2+d3;
    
    if(total_diamond > 2000) {
        return total_diamond-2000;
    }
    else{
        return total_diamond;
    }
}

const gems_quantity = gemsToDaimond(20, 200, 50);
console.log(gems_quantity);