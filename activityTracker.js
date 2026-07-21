let myWeek = [
    {day: "Monday", activity: "gym", category: "physical", hoursSpent: 2, enjoyment: 8, timeOfDay: "afternoon"}, // the activity with the highest enjoyment will be the gym
    {day: "Tuesday", activity: "gaming", category: "social", hoursSpent: 2, enjoyment: 7, timeOfDay: "evening"}, // the dominant category of my week is physical activities
    {day: "Wednesday", activity: "gym", category: "physical", hoursSpent: 2, enjoyment: 8, timeOfDay: "afternoon"}, // im more likely to go on walks during the beginning of the day 
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

function commonActivity(log) {
    const activityMap = log.map(i => i.activity)
    const freqActivity = Math.max(
        ...activityMap.map(activity =>
            activityMap.filter(i => i === activity).length
    ))
    return freqActivity
}
function isPhysical(activity) {
    return activity.category === "physical";
}

function filterActivities(testFn) {
    return myWeek.filter(testFn);
}


console.table(filterActivities(isPhysical));

// take two parameters, log and log.length(?) and then reduce 
console.log("You did your most common activity", commonActivity(myWeek), "times")
console.log("You spent", timeOnCategory(myWeek, "physical"), "hours on this category")
