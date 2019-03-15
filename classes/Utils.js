class Utils {

    static strDateFormat(string) {

        if(string.length < 2) {

            string = `0${string}`;
        
        } 

        return string;
    
    }
   
    static dateFormat(date) {

        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();

        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        
        return `
            ${this.strDateFormat(day.toString())}/${this.strDateFormat(month.toString())}/${year} 
            
            ${this.strDateFormat(hour.toString())}:${this.strDateFormat(minutes.toString())}:${this.strDateFormat(seconds.toString())}
        `;

    }

}