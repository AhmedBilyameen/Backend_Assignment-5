// WEEK 5 ASSIGNMENT: Working with Drug Data

// Instructions:

// Copy the array below and paste it into your JavaScript assignment file.
// You will use this array to answer all the questions that follow.
// Use JavaScript concepts we've learned in class:

// map()
// filter()
// forEach()
// if/else statements
// comparison operators (==, ===)
// functions
// ! (negation)

// When you're done:
// Push your file to GitHub and share the GitHub repository URL


const drugs = [

        { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },

        { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },

        { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },

        { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },

        { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },

        { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },

        { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },

        { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },

        { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },

        { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },

        { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },

        { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },

        { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },

        { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },

        { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },

        { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },

        { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },

        { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },

        { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },

        { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }

];



// 1. Get all drugs that are antibiotics.

        const antibioticsDrugs = drugs.filter( (drug) => {

            return drug.category == "Antibiotic";
            
        })

        console.log(antibioticsDrugs);



// 2. Return an array of drug names in lowercase.

        const drugNames = drugs.map( (drug) => {
            return drug.name.toLowerCase();
        })

        console.log(drugNames);


// 3. Write a function that accepts a category and returns all drugs under that category.

        function drugsByCategory(catName = "") {
            // checking if the category name is available in the array.
            const checkCat = drugs.find((cat) => cat.category.toLowerCase() === catName.toLowerCase()); //Q1 I tried using {} but its not working here?

            if ( !checkCat ) {
                //if category was not found print out error msg to the console.
                return `there is no category \'${catName}\', please check and try again`;
            }else{
                //print out the new array list
                return drugs.filter( (myNewlist) =>  myNewlist.category.toLowerCase() == catName.toLowerCase() )
                // return "found";
            }
        }

        console.log(drugsByCategory("AntiBiotic"))
        console.log(drugsByCategory("Antibitic"))



// 4. Log each drug’s name and its manufacturer.

        const drugsInfo = drugs.map(function(drug){
            // printing out drugs-info as new array of object.
            return {
                DrugName: drug.name,
                Manufacturer: drug.manufacturer
            }

        })

        console.log(drugsInfo)



// 5. Return all drugs that require a prescription.

        const drugsPrescriptionRequired = drugs.filter( (drug) => {
          
            return drug.isPrescriptionOnly == true; // using shorter arrow function is way cooler than this.
          
        })

        console.log(drugsPrescriptionRequired);



// 6. Return a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg".

        const drugsInDosage = drugs.map(function(drug){

            return `Drug: ${drug.name} - ${drug.dosageMg}mg`;  // 

        })

        console.log(drugsInDosage);


// 7. Write a function that returns all drugs with a stock less than 50.

        const drugsByStock = drugs.filter( (drug) => {
        
            // return each drug that is less than 50
            return (drug.stock < 50);
        })

        console.log(drugsByStock);

    //--------------------------------------------------------------------
    //  Q7. In another approach
    //--------------------------------------------------------------------

        function drugsByStock2(stockNo){
            return drugs.filter( (drug) => drug.stock < stockNo);
        }

        console.log(drugsByStock2(50)); // reusable function

    //--------------------------------------------------------------------

// 8. Return all drugs that are not prescription-only.

        const drugsPrescriptionNotRequired = drugs.filter( (drug) => {
            return drug.isPrescriptionOnly !== true; // checking where the prescription is false
        })

        console.log(drugsPrescriptionNotRequired);



// 9. Write a function that takes a manufacturer name and returns how many drugs are from that company.

        function drugsByManufacturerName(name = "") {
            //check if manufacturer's name is valid.
            const checkName = drugs.find( (comName) => comName.manufacturer === name);

            if (!checkName) {
                return `there is no manufacturer named \'${name}\', please try again`;
            } else {
                // return back the length of the array that satisfied the condition.
               return `The ${name} Company has: ` + drugs.filter( (drug) => drug.manufacturer === name).length +   ` Drugs`; 
    
            }


        }

        console.log(drugsByManufacturerName("Bayer"));
        console.log(drugsByManufacturerName("Teva"));
        console.log(drugsByManufacturerName("Tev"));



// 10. Use forEach() to count how many drugs are Analgesics.

         let a = 0;   //Q2 I mistakenly put the counter variable inside the loop and my loop did not work, 
         
         drugs.forEach( (drug) => {
        //  
            if (drug.category == "Analgesic") { 
                a++; 
            }
        
         }) 
         console.log(`the total number of Analgesic drugs: ${a}`); //Q3 console.log(a) is not working here.




//END_OF_ASSIGNMENT.
