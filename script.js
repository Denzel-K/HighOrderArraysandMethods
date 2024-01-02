const companies = [
  {
    name: "company1",
    category: "Retail",
    start: 1921,
    end: 1929
  },
  {
    name: "company2",
    category: "Energy",
    start: 1930,
    end: 1970
  },
  {
    name: "company3",
    category: "Finance",
    start: 1937,
    end: 1950
  },
  {
    name: "company4",
    category: "Pharmaceutical",
    start: 1920,
    end: 1929
  },
  {
    name: "company5",
    category: "Agri",
    start: 1960,
    end: 1969
  },
  {
    name: "company6",
    category: "Agri",
    start: 1950,
    end: 1970
  },
  {
    name: "company7",
    category: "Finance",
    start: 1952,
    end: 1961
  },
  {
    name: "company8",
    category: "Retail",
    start: 1932,
    end: 1946
  },
];

const ages = [18, 23, 16, 50, 21, 19, 12, 42, 36, 39, 35];

//1. FILTER

/*get ppl that can drink - Start*/
//Standard for loop
const canDrink = [];

for(let i = 0; i < ages.length; i++){
  if(ages[i] >= 18){
    canDrink.push(ages[i]);
  }
}

console.log("Filter using for loop", canDrink);

//High order filter method
  //ES - 5
const canDrink_2 = ages.filter(function(age){
  if(age >= 18){
    return true;
  }
});

//console.log("ES - 5 high order filter method:", canDrink_2);

  //ES - 6
const canDrink_3 = ages.filter(age => age >= 18);

console.log("ES - 6 high order filter method:", canDrink_3);

/*get ppl that can drink - End*/


//get all companies that have lasted 10yrs
const lasted10yrs = companies.filter(company => (company.end - company.start >= 10));

console.log("The following companies have lasted 10yrs or more", lasted10yrs);

//2. MAP
//create new array of company Names
const companyNames = companies.map(function(company) {
  return company.name;
})

//ES - 6
const companyNames_2 = companies.map(company => company.name);

//further manipulation
const companyNames_3 = companies.map(company => `${company.name}[${company.start} - ${company.end}]`);

console.log("An array of company names", companyNames_3);

//mapping the ages array
  //sqrt
const ageSqrt = ages.map(age => Math.sqrt(age));
  //ages * 2
const ageTimesTwo = ages.map(age => age * 2);

 //sqrt then * 2
const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);
  
console.log(ageMap);


//3. SORT
//sort companies by startYear
  //ES - 5
const sortCompanies_1 = companies.sort(function(c1, c2){
  if(c1.start > c2.start){
    return 1;
  } else { 
    return -1;
  }
});

  //ES - 6 
const sortCompanies_2 = companies.sort((a, b) => a.start > b.start ? 1 : -1);

console.log (sortCompanies_2);

//sort ages
  //Ascending order
const agesAscend_1 = ages.sort((a, b) => a > b ? 1 : -1);
  //Alternatively
const agesAscend_2 = ages.sort((a, b) => a - b);

  //Descending order
const agesDescend = ages.sort((a, b) => b - a);

console.log("Ages in ascending order", agesAscend_2);
console.log("Ages in descending order", agesDescend);


//4. REDUCE

//get sum of ages
  //standard for loop
let ageSum_1 = 0;
  
for(let i = 0; i < ages.length; i++){
    ageSum_1 += ages[i];
}

  //High order reduce method
    //es5
const ageSum_2 = ages.reduce(function(total, age){
  return total + age;
}, 0);

    //es6
const ageSum_3 = ages.reduce((total, age) => total + age, 0);

console.log(ageSum_3);


//5. Combine methods
const combined = ages 
  .filter(age => age >= 21)
  .map(age => age * 3)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);
  
console.log(combined);
