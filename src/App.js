import React from "react";
// import computeTimeByCityOrCountryOrZone from "./Test";
// import { formatDate } from "@kamesh-a/city-to-timezones";
// import { TimeZoneDropdown } from "@pinninti-sravanthi/time-zone-search";
// import { TimeZoneDropdown } from "@adaptavant/timezone-picker";
// import { getCountryForTimezone } from "countries-and-timezones";
// import { format, formatInTimeZone } from "date-fns-tz";
// import date from "./Date";

// const onChange = (e) => {
//   console.log("came here ", e);
// };

const App = () => {
  // console.log(" formatDate ", date);
  // console.log("config ", config);
  // config.init.id = "app";
  // const tzList = getCountryTzInfo();
  // console.log(tzList);
  // const result = computeTimeByCityOrCountryOrZone("United");
  //  console.log(" result ", result);

  // React.useEffect(() => {
  // console.log(" came here 00adfd ", Close.handle(false));

  // window.addEventListener("mousedown", Close.handle(true));
  // });

  // //console.log(TimeZoneDropdown);

  // // const response = getCountryForTimezone("Asia/Calcutta", { deprecated: true });
  // // console.log(" response ", response); //{id: "IN", name: "India", timezones: ["Asia/Calcutta", "Asia/Kolkata"]}

  // // const format = formatInTimeZone(
  // //   new Date(),
  // //   "Asia/Kolkata",
  // //   "yyyy-MM-dd__hh:mm aa__zzzz"
  // // );
  // // console.log(" format ", format); // 2022-12-21__05:02 PM__India Standard Time

  // // console.log(format.split("__")); // [
  // //     "2022-12-21",
  // //     "05:04 PM",
  // //     "India Standard Time"
  // // ]

  // /**
  //  *
  //  * @param {string} tzAbbrevation - India Standard Time
  //  * @returns {String} IST
  //  */
  // function getTzShortName(tzAbbrevation) {
  //   if (tzAbbrevation) {
  //     if (tzAbbrevation.includes("GMT")) {
  //       return tzAbbrevation;
  //     }

  //     const tzFullName = tzAbbrevation?.trim();
  //     return tzFullName
  //       .split(" ")
  //       .reduce((a, c) => {
  //         console.log(c);
  //         return a + c.charAt(0);
  //       }, "")
  //       .toUpperCase();
  //   }
  // }

  // console.log(getTzShortName("India Standard Time")); // IST

  return (
    <div>
      <h1>Hello world! I am using React</h1>
      {/* <p>User Specific TimeZone: </p> */}
      {/* <div>
        <TimeZoneDropdown useTimeZone="US/Pacific" onChange={onChange} />
      </div> */}
      {/* <p>User System/default TimeZone: </p> */}
      {/* <TimeZoneDropdown useTimeZone="" onChange={onChange} close={true} /> */}
    </div>
  );
};

export default App;
