

 const calculateBmi = (height: number,weight: number): string => {

    const index: number = weight / ((height/100) * (height/100) );

    if(18.5 <= index && index <=25) {
        return 'normal weight' ;
    }
    else if(index < 18.5 ) {
        return 'under weight';
    }

    return 'over weight';
};

const inputs: string[] = process.argv;



if (inputs.length < 4) {
    throw new Error('You need to give two arguments');
}

if (inputs.length > 4) {
    throw new Error('You have given more than two arguments');
}


if(isNaN(Number(inputs[2]))) {
    throw new Error('First argument was not a number');
}

if(isNaN(Number(inputs[3]))) {
    throw new Error('Second argument was not a number');
}

console.log(calculateBmi(Number(inputs[2]),Number(inputs[3])));




