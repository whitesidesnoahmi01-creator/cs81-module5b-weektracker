let myWeek = [
    {day: "Monday", activity: "gym", category: "physical", hoursSpent: 2, enjoyment: 8, timeOfDay: "afternoon"}, 
    {day: "Tuesday", activity: "gaming", category: "social", hoursSpent: 2, enjoyment: 7, timeOfDay: "evening"},
    {day: "Wednesday", activity: "gym", category: "physical", hoursSpent: 2, enjoyment: 8, timeOfDay: "afternoon"},
    {day: "Thursday", activity: "walking", category: "physical", hoursSpent: 1, enjoyment: 6, timeOfDay: "morning"},
    {day: "Friday", activity: "gym", category: "physical", hoursSpent: 2, enjoyment: 9, timeOfDay: "afternoon"},
    {day: "Saturday", activity: "hangouts", category: "social", hoursSpent: 7, enjoyment: 8, timeOfDay: "afternoon"},
    {day: "Sunday", activity: "basketball", category: "physical", hoursSpent: 3, enjoyment: 7, timeOfDay: "afternoon"}
]

function timeOnCategory(log, cat) {
    const tocFilter = log.filter(i => i.category === cat)
    const tocReduce = tocFilter.reduce((total, n) => total + n.hoursSpent, 0)
    return tocReduce 
}



console.log(commonActivity(myWeek))
console.log("You spent", timeOnCategory(myWeek, "physical"), "hours on this category.")
