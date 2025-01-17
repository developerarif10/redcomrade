// export const formatMyDate = (date) => {
//   let options = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   };
//   const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
//   return formattedDate;
// };

export const formatMyDate = (dateInput) => {
  let date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  let options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};

// export const formatMyDate = (dateInput) => {
//   if (!dateInput) {
//     console.log("Date input is null or undefined");
//     return "Invalid Date";
//   }

//   console.log("Input date:", dateInput); // Debug log

//   let date;

//   if (dateInput instanceof Date) {
//     date = dateInput;
//   } else if (typeof dateInput === "string") {
//     // Try parsing the string directly
//     date = new Date(dateInput);

//     // If parsing fails, try removing the milliseconds and timezone
//     if (isNaN(date.getTime())) {
//       const simplifiedDate = dateInput.split(".")[0];
//       date = new Date(simplifiedDate);
//     }
//   } else {
//     console.log("Invalid input type:", typeof dateInput); // Debug log
//     return "Invalid Date";
//   }

//   // Check if the date is valid
//   if (isNaN(date.getTime())) {
//     console.log("Failed to parse date:", dateInput); // Debug log
//     return "Invalid Date";
//   }

//   // Format the date to match the database format
//   return date.toISOString().replace("T", " ").slice(0, -5) + "+00:00";
// };
