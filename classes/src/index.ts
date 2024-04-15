import { measure} from "helpful-decorators";

class DateClass{
    private TimeZone: string;
    constructor(Timezone: string){
        this.TimeZone =Timezone;

    }
    @measure
    getTime(){
        var d = new Date();
        console.log('hi there from getTime')
        return d.getTime();
       
    }

    
}

const dateObject = new DateClass("INDIA");
dateObject.getTime();
dateObject.getTime();
dateObject.getTime();
dateObject.getTime();