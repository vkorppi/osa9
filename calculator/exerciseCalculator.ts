
interface Result {
    days: number;
    trainingdays: number;
    trainingWasSuccess: boolean;
    rating: number;
    Description: string;
    target: number;
    average: number;
  }

const calculateExercises  = (target: number,dailyHours: number[]): Result => {

    const average: number= dailyHours.reduce( (sum: number, hour: number) => {return sum + hour;}) / dailyHours.length;

    if(isNaN(Number(average))) {
        throw new Error('Average could not be calculated');
    }

    const trainingdays: number[] = dailyHours.filter((hour) => {return hour > 0;});
    
    let description ='';
    let trainingWasSuccess=false;
    let rating=3;

    if(target === average) {
        description='Target achieved';
        trainingWasSuccess=true;
    }
    else if(average > target) {
        description='You exceeded target';
        trainingWasSuccess=true;
    }
    else if( (target-1) < average && average < target) {
        description='You got close but not quite there';
        rating=2;
    }
    else {
        description='Not even close';
        rating=1;
    }
    
    return  {
        days:dailyHours.length,
        trainingdays: trainingdays.length,
        trainingWasSuccess:trainingWasSuccess,
        rating:rating,
        Description:description,
        target:target,
        average:average
      };
};

const dataInput: string[] = process.argv;

if(isNaN(Number(dataInput[2]))) {
    throw new Error('First argument was not a number');
}

const periodDays: string[]=dataInput.slice(3, dataInput.length);
const periodDaysNumber: number[] =periodDays.map(hour => Number(hour));


 console.log(calculateExercises(Number(dataInput[2]),periodDaysNumber));


