const companies = [
  { name: "Bank One", category: "Finance", start: 1981, end: 2003 },
  { name: "Outlet Two", category: "Retail", start: 1982, end: 2008 },
  { name: "Jalopies Three", category: "Auto", start: 1999, end: 2007 },
  { name: "InfoTechNJ Four", category: "Tech", start: 2009, end: 2014 }
]

const ages = [33, 12, 20, 16, 54, 44, 61, 45, 64]

// FOR EACH:

// companies.forEach(function (company) {
//   console.log(company.name)
// })

// FILTER:

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true
//   }
// })

// const canDrink = ages.filter(age => age >= 21)

// console.log(canDrink)

// FILTER RETAIL COMPANIES
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true
//   }
// })

// console.log(retailCompanies)

// using arrow func:

// const retailCompanies = companies.filter(company => company.category === "Retail")

// console.log(retailCompanies)

// COMPANES THAT STARTED IN THE 80s

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)

// console.log(eightiesCompanies)

// MAP:

// create array of company names

// const companyNames = companies.map(company => company.name)

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

// console.log(testMap)

// SORT:
// sort companies by start year

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1
//   }
// })

// console.log(sortedCompanies)

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

// console.log(sortedCompanies)

// REDUCE:

// add ages together

// const ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum)

// get total years for all companies

// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start)
// }, 0)

// console.log(totalYears)

// using arrow func

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)

// console.log(totalYears)

// COMBINE METHODS

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0)

// console.log(combined)
