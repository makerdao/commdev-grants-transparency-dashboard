import publicData from "@data/publicData.json"
import {region} from '@data/dataformat'
import {formatNumber} from '@utils'


const publicMeetupsData = publicData.meetups[0];

const nOfMeetupsByRegion = () => {
  let output = {};

  Object.values(region).map(reg => {
    output[reg] = publicMeetupsData.regionMeetupsCount[reg];
  })

  return output
}

export const totalMeetupsAppsSubmittedDoughnut = {
  datasets: [
    {
      data: [publicMeetupsData.totalNumberMeetups, publicMeetupsData.applicationsSubmitted],
      backgroundColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
      borderColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
    }
  ]
}

export const avgMeetupsAttendeesDoughnut = {
  datasets: [
    {
      data: [publicMeetupsData.averageNumberMeetupsPerMonthThisYear, publicMeetupsData.averageNumberAttendeesPerMonthThisYear],
      backgroundColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
      borderColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
    }
  ]
}

export const uniqueHostsRepeatHostsDoughnut = {
  datasets: [
    {
      data: [publicMeetupsData.totalNumberUniqueHosts, publicMeetupsData.totalNumberRepeatHosts],
      backgroundColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
      borderColor: ["#1AAB9B", "hsla(38,90%,60%,1)"],
    }
  ]
}

export const meetupsData = {
  totalMoneyDispersed: formatNumber(publicMeetupsData.totalMoneyDispersed),
  totalNumberMeetups: publicMeetupsData.totalNumberMeetups,
  totalNumberUniqueHosts: publicMeetupsData.totalNumberUniqueHosts,
  totalNumberRepeatHosts: publicMeetupsData.totalNumberRepeatHosts,
  totalNumberCountries: publicMeetupsData.totalNumberCountries,
  totalNumberPresentations: publicMeetupsData.totalNumberPresentations,
  totalNumberReportedAttendees: formatNumber(publicMeetupsData.totalNumberReportedAttendees),
  averageNumberAttendeesPerMonthThisYear: publicMeetupsData.averageNumberAttendeesPerMonthThisYear,
  averageNumberMeetupsPerMonthThisYear: publicMeetupsData.averageNumberMeetupsPerMonthThisYear,
  applicationsSubmitted: publicMeetupsData.applicationsSubmitted,
  nMeetupsByRegion: nOfMeetupsByRegion(),
  roiPerAttendee: formatNumber(publicMeetupsData.totalMoneyDispersed * publicMeetupsData.totalNumberMeetups),
  totalMeetupsAppsSubmittedDoughnut,
  avgMeetupsAttendeesDoughnut,
  uniqueHostsRepeatHostsDoughnut
}




