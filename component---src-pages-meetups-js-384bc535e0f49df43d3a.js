(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{tXjE:function(e,t,a){"use strict";a.r(t);var r,n=a("vOnD"),o=a("q1tI"),u=a.n(o),l=a("1zJl"),s=a("53LN"),m=a("Wi6b"),i=(a("3bBZ"),a("4mDm"),a("07d7"),a("B6y2"),a("z2E5")),c=a("Al62"),p=i.meetups[0],d={datasets:[{data:[p.totalNumberMeetups,p.applicationsSubmitted],backgroundColor:["#1AAB9B","hsla(38,90%,60%,1)"],borderColor:["#1AAB9B","hsla(38,90%,60%,1)"]}]},b={datasets:[{data:[p.averageNumberMeetupsPerMonthThisYear,p.averageNumberAttendeesPerMonthThisYear],backgroundColor:["#1AAB9B","hsla(38,90%,60%,1)"],borderColor:["#1AAB9B","hsla(38,90%,60%,1)"]}]},h={datasets:[{data:[p.totalNumberUniqueHosts,p.totalNumberRepeatHosts],backgroundColor:["#1AAB9B","hsla(38,90%,60%,1)"],borderColor:["#1AAB9B","hsla(38,90%,60%,1)"]}]},g={totalMoneyDispersed:Object(c.b)(p.totalMoneyDispersed),totalNumberMeetups:p.totalNumberMeetups,totalNumberUniqueHosts:p.totalNumberUniqueHosts,totalNumberRepeatHosts:p.totalNumberRepeatHosts,totalNumberCountries:p.totalNumberCountries,totalNumberPresentations:p.totalNumberPresentations,totalNumberReportedAttendees:Object(c.b)(p.totalNumberReportedAttendees),averageNumberAttendeesPerMonthThisYear:p.averageNumberAttendeesPerMonthThisYear,averageNumberMeetupsPerMonthThisYear:p.averageNumberMeetupsPerMonthThisYear,applicationsSubmitted:p.applicationsSubmitted,nMeetupsByRegion:(r={},Object.values(m.region).map((function(e){r[e]=p.regionMeetupsCount[e]})),r),roiPerAttendee:Object(c.b)(p.totalMoneyDispersed/p.totalNumberReportedAttendees),totalMeetupsAppsSubmittedDoughnut:d,avgMeetupsAttendeesDoughnut:b,uniqueHostsRepeatHostsDoughnut:h};function f(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n          flex-direction: row;\n        "]);return f=function(){return e},e}var M=Object(n.c)(s.a.Country).withConfig({displayName:"MeetupCountries__MeetupCountry",componentId:"sc-1vwrrzk-0"})(["&&{margin:0rem 2rem 0rem 2rem;}"]),E=["Africa","Asia","Oceania","South America","Europe","North America"],N=function(){return u.a.createElement(s.a.Row.Overflow,{gridColumn:"2 / -1"},E.map((function(e){return u.a.createElement(A,{key:e,country:e,bottomSpaced:!0,number:g.nMeetupsByRegion[e]})})))},A=Object(n.c)(M)(f()),v=a("e8ea"),k=a("lc0z"),w=a("xBMw");function B(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n              transform: rotate(-235deg);\n            "]);return B=function(){return e},e}var C=g.uniqueHostsRepeatHostsDoughnut,y=Object(n.c)(s.a.Section).withConfig({displayName:"meetups__MeetupsSection",componentId:"ktk5tq-0"})(["&&{padding-top:3rem;}"]),D=(t.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(l.Title,null,"MakerDAO Community - Development Grants"),u.a.createElement(v.e,null,"We've funded"," ",u.a.createElement(v.f,null,g.totalNumberReportedAttendees)," ","meetups in"," ",u.a.createElement(v.f,null,g.totalNumberCountries)," ","countries"),u.a.createElement(v.d,null,"Started by the Maker Foundation's Community Development Team, this grant program supported virtual and physical meetups that helped individuals around the world learn about Ethereum, DeFi, and MakerDAO."),u.a.createElement(y,null,u.a.createElement(s.a.Row,null,u.a.createElement(N,null)),u.a.createElement(s.a.Row,null,u.a.createElement(s.a,{number:g.totalMoneyDispersed,description:"Total Dai Dispersed"}),u.a.createElement(s.a,{number:g.averageNumberMeetupsPerMonthThisYear,description:"Avg. Meetups per Month"})),u.a.createElement(s.a.Row,{justifyContent:"center"},u.a.createElement(s.a,{number:g.totalNumberUniqueHosts,description:"Number of Unique Hosts"}),u.a.createElement(D,{data:C,width:200,height:200,options:{maintainAspectRatio:!0,responsive:!0}}),u.a.createElement(s.a,{number:g.totalNumberRepeatHosts,colorOrange:!0,description:"Number of Repeat Hosts"}))),u.a.createElement(w.a,null,u.a.createElement("div",null,u.a.createElement(w.c,{columnLeft:!0},u.a.createElement(w.d,{columnLeft:!0},"How can I host a meetup?"),u.a.createElement(w.b,null,"We've compiled some resources to help you get started."))),u.a.createElement(w.e,null,u.a.createElement(w.g,{href:"https://community-development.makerdao.com/en/learn/",target:"_blank",rel:"noopener noreferrer"},u.a.createElement(w.f,{noBackground:!0},u.a.createElement(k.a,{colorMakerBlue:"true",labelContent:"New to Maker?"}),"View a list of educational resources.")),u.a.createElement(w.g,{href:"https://forum.makerdao.com/",target:"_blank",rel:"noopener noreferrer"},u.a.createElement(w.f,{noBackground:!0},u.a.createElement(k.a,{colorMakerBlue:"true",labelContent:"Meet the community"}),"Join the official Maker forum.")),u.a.createElement(w.g,{href:"https://community-development.makerdao.com/meetups/getting-started-guide",target:"_blank",rel:"noopener noreferrer"},u.a.createElement(w.f,{noBackground:!0},u.a.createElement(k.a,{colorMakerBlue:"true",labelContent:"Looking for guidance?"}),"View our meetup guides.")))))},Object(n.c)(s.a.DoughnutChart)(B()))}}]);
//# sourceMappingURL=component---src-pages-meetups-js-384bc535e0f49df43d3a.js.map