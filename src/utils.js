import rawData from "../static/data/acceptedProjectsData.json"
import publicData from "../static/data/publicData.json"
import { pStatus, pType, region } from "../static/data/dataformat.js"

const publicGrantsData = publicData.grants[0];
const publicMeetupsData = publicData.meetups[0];

const getAcceptedProjects = () => {
  return rawData
}

const getAppsSubmitted = () => {
  return publicGrantsData.applicationsSubmitted
}

const getNofAcceptedProjects = () => {
  return rawData.length
}

const getNofCountries = () => {
  let countries = getAcceptedProjects().map(p => p.country)
  let distinctCountries = new Set(countries)
  distinctCountries.delete("")
  return distinctCountries.size
}

// counts the number of projects which have a given value in a certain field
const getNofProjectField = (field, value) => {
  return getAcceptedProjects().filter(p => p[field] === value).length
}

const nOfProjectsByRegion = Object.values(region).map(reg => {
  return { [reg]: getNofProjectField("region", reg) }
})

// all projects that have been accepted and are not discontinued
const getNofActiveProjects = () => {
  return getAcceptedProjects().filter(p => p.status !== "Inactive").length
}

// Creating stats of how many projects there are of each status:
let statusDistributionList = Object.values(pStatus).map(p => {
  return { [p]: getNofProjectField("status", p) }
})

// Creating stats of how many projects there are of each type
let typeDistributionList = Object.values(pType).map(p => {
  return { [p]: getNofProjectField("type", p) }
})

// helper-reduce function to merge lists into one handy object with status/types as keys
const mergeObjects = (acc, currentValue) => Object.assign(acc, currentValue)

// get distribution of projectTypes as percentages (used for pieCharts)
let typeDistribution = {}
for (let type of Object.values(pType)) {
  typeDistribution[type] = getNofProjectField("type", type) // / (nOfProjects)) * 100
}
// let typeDistribution = Object.values(pType).map(t => getNofProjectField('type', t))

//===== get all countries of each region ========
var countriesByRegion = {}
// helper-function to reduce a list to unique objects
const distinct = (value, index, self) => {
  return self.indexOf(value) === index
}
// create list of distinct countries by region
const getCountriesOfRegion = region => {
  return getAcceptedProjects()
    .filter(p => p.region === region)
    .map(p => p.country)
    .filter(distinct)
}
for (let reg of Object.values(region)) {
  countriesByRegion[reg] = getCountriesOfRegion(reg)
  // if there is an empty location-string remove that from the list
  let emptyStringIndex = countriesByRegion[reg].indexOf("")
  if (emptyStringIndex > -1) {
    countriesByRegion[reg].splice(emptyStringIndex, 1)
  }
}
// console.log('countriesByRegion ', countriesByRegion )

// helper-function to insert comma as separators every 3 digits
function formatNumber(num) {
  return Math.round(num)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export const grantsData = {
  acceptedProjects: getAcceptedProjects(),
  totalMoneyAwarded: formatNumber(publicGrantsData.totalMoneyAwarded),
  totalMoneyDispersed: formatNumber(publicGrantsData.totalMoneyDispersed),
  averageAwardedMoney: formatNumber(
    publicGrantsData.totalMoneyAwarded / getNofAcceptedProjects()
  ),
  appsSubmitted: getAppsSubmitted(),
  appsAccepted: getNofAcceptedProjects(),
  nCountries: getNofCountries(),
  nProjectsByRegion: nOfProjectsByRegion.reduce(mergeObjects),
  NofProjectType: typeDistributionList.reduce(mergeObjects),
  NofProjectStatus: statusDistributionList.reduce(mergeObjects),
  milestones: {
    total: publicGrantsData.totalMilestones,
    last30days: publicGrantsData.milestonesLast30Days,
  },
  currentlyActive: getNofActiveProjects(),
  typeDistribution,
  countriesByRegion,
}

export const meetupsData = {
  totalMoneyDispersed: formatNumber(publicMeetupsData.totalMoneyDispersed),
  totalNumberMeetups: publicMeetupsData.totalNumberMeetups,
  totalNumberUniqueHosts: publicMeetupsData.totalNumberUNiqueHosts,
  totalNumberRepeatHosts: publicMeetupsData.totalNumberRepeatHosts,
  totalNumberCountries: publicMeetupsData.totalNumberCountries,
  totalNumberPresentations: publicMeetupsData.totalNumberPresentations,
  totalNumberReportedAttendees: formatNumber(publicMeetupsData.totalNumberReportedAttendees),
  averageNumberAttendeesPerMonthThisYear: publicMeetupsData.averageNumberAttendeesPerMonthThisYear,
  averageNumberMeetupsPerMonthThisYear: publicMeetupsData.averageNumberMeetupsPerMonthThisYear,
  applicationsSubmitted: publicMeetupsData.applicationsSubmitted
}

// activate this to debug data flows
// console.log("processed data", data)

export const pieData = (field, value) => {
  let nOfValue = getNofProjectField(field, value)
  let data
  if (value === "All") data = [0]
  else
    data = nOfValue > 0 ? [nOfValue, getNofAcceptedProjects() - nOfValue] : [1]
  let displayData = {
    datasets: [
      {
        data,
        backgroundColor:
          nOfValue > 0
            ? ["#1BBBAA", "hsl(152, 45%, 94%)"]
            : ["hsl(152, 45%, 94%)"],
        borderColor: ["#1AA9BB"],
      },
    ],
  }
  if (value === "Inactive") {
    displayData.datasets[0].borderColor = ["#FF0000", "#FF0000"]
    displayData.datasets[0].backgroundColor = ["#FF0000"]
  }
  return displayData
}

export const doughnutData = {
  datasets: [
    {
      data: [getNofAcceptedProjects(), getAppsSubmitted()],
      backgroundColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
      borderColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
    },
  ],
}

//NOTE(Rejon): I didn't want to import lodash just for the merge method. This is a vanilla js implementation.
/*!
 * Merge two or more objects together.
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param   {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
 * @param   {Object}   objects  The objects to merge together
 * @returns {Object}            Merged values of defaults and options
 */
export const extend = function() {
  // Variables
  var extended = {}
  var deep = false
  var i = 0

  // Check if a deep merge
  if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
    deep = arguments[0]
    i++
  }

  // Merge the object into the extended object
  var merge = function(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        // If property is an object, merge properties
        if (
          deep &&
          Object.prototype.toString.call(obj[prop]) === "[object Object]"
        ) {
          extended[prop] = extend(extended[prop], obj[prop])
        } else {
          extended[prop] = obj[prop]
        }
      }
    }
  }

  // Loop through each object and conduct a merge
  for (; i < arguments.length; i++) {
    merge(arguments[i])
  }

  return extended
}
