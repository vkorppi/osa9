

export const calculateBmi = (height: number,weight: number): string => {

    const index: number = weight / ((height/100) * (height/100) );

    if(18.5 <= index && index <=25) {
        return 'normal weight'; 
    }
    else if(index < 18.5 ) {
        return 'under weight';
    }

    return 'over weight';
};




