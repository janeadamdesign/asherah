import React, { useEffect, useState, useRef } from "react";

// Third Party Imports
import PhoneInput from "react-phone-input-2";
import "./PhoneInput.css";
import Calendar from "react-calendar";
import "./Calendar.css";
// Custom code to execute email / sms confirmation
import pseudoBackend from "./pseudoBackend";

interface ReservationProps {
  page: string;
  handleClick: (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLImageElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

interface DateType {
  justDate: Date | null;
  timeSlot: string | null;
}

interface PersonalDetails {
  name: string;
  phoneNumber: string;
  email: string;
}

interface Reservation {
  person: PersonalDetails;
  dateTime: DateType;
}

function Reservations(props: ReservationProps): React.ReactElement {
  // N.B. useEffects in this file grouped thematically

  /* Code related to date state:
  - declares date state: self explantory  
  - nullify: simple fn to reset state values to null
  - pickTime: simple fn to assign timeSlot value
  - useEffect to enact nullify whenever Asherah page changes  */
  const [date, setDate] = useState<DateType>({
    justDate: null,
    timeSlot: null,
  });
  const nullify = (): void => {
    setDate({ justDate: null, timeSlot: null });
    setVisibleBites(0);
    setVisibleDinner(false);
    setPerson({
      name: "",
      phoneNumber: "",
      email: "",
    });
    setShowFinalConfirmation(false);
    liquidateReservation();
  };
  const pickTime = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const target: HTMLButtonElement = e.currentTarget;
    let timeSelected: string;
    if (target) {
      timeSelected = target.id;
    }
    setDate((prev) => ({
      ...prev,
      timeSlot: timeSelected,
    }));
  };
  useEffect(() => {
    nullify();
  }, [props.page]);

  /* Code related to the appearance / disappearance of the ConfirmationPane:
- 1.i. declare a useRef assigned to the whole conditionally rendered <div> "confirmation-container"
- 1.ii. fn confirmationScroll: if date.timeSlot && emailRef.current, smooth scrolls to the confirmation pane. Else scrolls to zero. 
- 1.iii. useEffect to trigger confirmationScroll whenever date.timeSlot changes.*/
  const [showFinalConfirmation, setShowFinalConfirmation] =
    useState<boolean>(false);
  const emailRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  const confirmationScroll = (): void => {
    if (showFinalConfirmation && finalRef.current) {
      finalRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (date.timeSlot && emailRef.current) {
      emailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  };
  useEffect(() => {
    confirmationScroll();
  }, [date.timeSlot, showFinalConfirmation]);
  /* 2. Retreat State: Declares retreat state which simply records coutn of times user has 'retreated' back to calendar from the email/sms confirmation form. The purpose of this code is to enable us to trigger a useEffect whenever this happens: required due to desired use of setTimeout as response to user's retreat. Timeout optimised for chrome's smoothscroll speed*/
  const [retreat, setRetreat] = useState<number>(0);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const timer: NodeJS.Timeout = setTimeout(() => {
      nullify();
    }, 750);
    return () => {
      clearTimeout(timer);
    };
  }, [retreat]);

  /* Simple tools related to date and times, called within getTimes() code body:
  - weekdayFormatter is class definition to render date data as weekday string
  - isSameDate dates two date variables and compares whether calendar day is the same
  - chunkArray simply processes any array into chunks
  */
  const weekdayFormatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
  });
  const isSameDate = (date1: Date, date2: Date): boolean => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };
  const chunkArray = (array: string[], chunkSize: number): string[][] => {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  };

  /* State declarations and useEffects relevant to chunk 'pop in': this is to animate the times generated within getTimes() code body*/
  const [visibleBites, setVisibleBites] = useState<number>(0);
  const [visibleDinner, setVisibleDinner] = useState<boolean>(false);
  useEffect(() => {
    let revealBites: NodeJS.Timeout;
    let revealDinner: NodeJS.Timeout;
    if (!date.justDate || date.justDate?.getDay() === 1) return;
    revealBites = setTimeout(() => {
      if (visibleBites < 12) {
        setVisibleBites((prev) => prev + 1);
      }
    }, 150);
    if (date.justDate?.getDay() !== 0) {
      revealDinner = setTimeout(() => {
        if (visibleDinner === false) {
          setVisibleDinner(true);
        }
      }, 900);
    }
    return () => clearTimeout(revealBites);
  }, [date, visibleBites]);

  // getTimes is our main processing function invoked by returned JSX at the bottom of the document.
  const getTimes = (): React.ReactElement => {
    if (!date.justDate) return (<></>)
    const weekDay: number = date.justDate.getDay();
    const today: Date = new Date();
    const minutesToTime = (minutes: number): string => {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours.toString().padStart(2, "0")}:${remainingMinutes
        .toString()
        .padStart(2, "0")}`;
    };
    /*Interior fn to calculate when to start generating booking slots for TODAY*/
    const calculateBeginning = (): number => {
      const timeNow: string = today.toLocaleTimeString("en-GB", {
        hour12: false,
      });
      const minutes: number = parseFloat(timeNow.slice(3, 5));
      const hours: number = parseFloat(timeNow.slice(0, 2));
      const hoursSixty: number = hours * 60;
      const minutesSinceMidnight: number = hoursSixty + minutes;
      const difference: number = minutesSinceMidnight % 15;
      let beginning: number = 0;
      if (difference > 0) {
        beginning = minutesSinceMidnight - difference + 15;
      } else beginning = minutesSinceMidnight;
      /*console.log(
        `minutes since midnight: ${minutesSinceMidnight}; difference: ${difference}; beginning: ${beginning}`
      );*/
      return beginning;
    };
    // Main function for generating times
    const generateTimesArray = (day: number): React.ReactElement => {
      let sundayTimes: string[] = [];
      let lunchTimes: string[] = [];
      let dinnerTimes: string[] = [];
      if (day === 0) {
        let beginning: number;
        if (isSameDate(today, date.justDate as Date)) {
          beginning = calculateBeginning();
        } else {
          beginning = 720; // 1200h converted to minutes
        }
        const end: number = 1050; // 1730h converted to minutes
        for (let i: number = beginning; i <= end; i += 15) {
          sundayTimes.push(minutesToTime(i));
        }
        const sundayChunks: string[][] = chunkArray(sundayTimes, 6);
        if (sundayChunks.length > 0) {
          return (
            <>
              <p>Sunday Sitting</p>
              {sundayChunks.map((chunk, index) => {
                return (
                  <span className="chunk" key={index}>
                    {chunk.map((time, index) => (
                      <div className="meal-time-container" key={index}>
                        <button
                          id={time}
                          onClick={pickTime}
                          className={
                            visibleBites >= index + 1
                              ? "meal-time"
                              : "meal-time-hide"
                          }
                        >
                          {time}
                        </button>
                      </div>
                    ))}
                  </span>
                );
              })}
            </>
          );
        } else {
          return <p> Oops! Too late :( </p>;
        }
      } else {
        let beginning: number = 0;
        if (isSameDate(today, date.justDate as Date)) {
          beginning = calculateBeginning();
        }
        const lunchBeginning: number = Math.max(720, beginning); // 1200h converted to minutes
        const lunchEnd: number = 870; // 1430h converted to minutes
        for (let l: number = lunchBeginning; l <= lunchEnd; l += 15) {
          lunchTimes.push(minutesToTime(l));
        }
        const lunchChunks: string[][] = chunkArray(lunchTimes, 6);
        const dinnerBeginning: number = Math.max(1080, beginning); // 1500h converted to minutes
        const dinnerEnd: number = 1290; // 2130h converted to minutes
        for (let d: number = dinnerBeginning; d <= dinnerEnd; d += 15) {
          dinnerTimes.push(minutesToTime(d));
        }
        const dinnerChunks: string[][] = chunkArray(dinnerTimes, 6);
        return (
          <>
            <p>Lunch Sitting</p>
            {lunchChunks && lunchChunks.length ? (
              lunchChunks.map((chunk, index) => {
                return (
                  <span className="chunk" key={index}>
                    {chunk.map((time, index) => (
                      <div key={index} className="meal-time-container">
                        <button
                          id={time}
                          onClick={pickTime}
                          className={
                            visibleBites >= index + 1
                              ? "meal-time"
                              : "meal-time-hide"
                          }
                        >
                          {time}
                        </button>
                      </div>
                    ))}
                  </span>
                );
              })
            ) : (
              <p> Oops! Too late :( </p>
            )}
            <p>Dinner Sitting</p>
            {dinnerChunks &&
            dinnerChunks.length &&
            lunchChunks &&
            lunchChunks.length ? (
              dinnerChunks.map((chunk, index) => {
                return (
                  <span className="chunk" key={index}>
                    {chunk.map((time, index) => (
                      <div className="meal-time-container" key={index}>
                        <button
                          id={time}
                          onClick={pickTime}
                          className={
                            visibleBites >= index + 6 && visibleDinner === true
                              ? "meal-time"
                              : "meal-time-hide"
                          }
                          key={index}
                        >
                          {time}
                        </button>
                      </div>
                    ))}
                  </span>
                );
              })
            ) : dinnerChunks && dinnerChunks.length ? (
              dinnerChunks.map((chunk, index) => {
                return (
                  <span className="chunk" key={index}>
                    {chunk.map((time, index) => (
                      <div className="meal-time-container" key={index}>
                        <button
                          id={time}
                          onClick={pickTime}
                          className={
                            visibleBites >= index + 1
                              ? "meal-time"
                              : "meal-time-hide"
                          }
                          key={index}
                        >
                          {time}
                        </button>
                      </div>
                    ))}
                  </span>
                );
              })
            ) : (
              <p> Oops! Too late :( </p>
            )}
          </>
        );
      }
    };
    if (weekDay === 0) {
      return <div>{generateTimesArray(0)}</div>; // Sunday
    } else return <div>{generateTimesArray(2)}</div>; // Tues-Sat
  };

  /* Code related to processing booking confirmation form
  - declares person state object with name, phoneNumber, email keys
  - destructures object for later use as variables
  - fn handleFormChange: boilerplate state setter onChange*/
  const [confirmButtonHovered, setConfirmButtonHovered] =
    useState<boolean>(false);
  const [person, setPerson] = useState<PersonalDetails>({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement> | string
  ): void => {
    if (typeof e !== "string" && e.target.id) {
      switch (e.target.id) {
        case "name":
          setPerson((prev) => ({
            ...prev,
            name: e.target.value,
          }));
          break;
        case "email":
          setPerson((prev) => ({
            ...prev,
            email: e.target.value,
          }));
          break;
      }
    } else if (typeof e === "string") {
      setPerson((prev) => ({
        ...prev,
        phoneNumber: e,
      }));
    }
    console.log(`person: ${JSON.stringify(person)}`);
  };

  /* Code related to processing reservation proper 
  - Declares reservation as state and sets initial state: empty strings rather than nulls
  - Defines simple fn to liquidate reservation and return to empty strings
  - Defines fn which sets reservation state on the basis of person state and date state, before setting the conditional rendering state to show final confirmation to TRUE*/
  const [reservation, setReservation] = useState<Reservation>({
    person: { name: "", phoneNumber: "", email: "" },
    dateTime: { justDate: null, timeSlot: null },
  });
  const liquidateReservation = (): void => {
    setReservation({
      person: { name: "", phoneNumber: "", email: "" },
      dateTime: { justDate: null, timeSlot: null },
    });
  };
  const processReservation = (): void => {
    setReservation({
      person: {
        name: person.name,
        phoneNumber: person.phoneNumber,
        email: person.email,
      },
      dateTime: { justDate: date.justDate, timeSlot: date.timeSlot },
    });
    setShowFinalConfirmation(true);
  };

  /* Click handler that runs processing functions described above upon click of "confirm booking" button */
  const confirmationClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!date.justDate || !date.timeSlot) return;
    else if (
      person.email !== "" &&
      person.name !== "" &&
      person.phoneNumber !== ""
    ) {
      e.preventDefault();
      processReservation();
    }
  };
  /* useEffect to call external backend sms/email fns when reservation state set to all values truthy / contentful */
  useEffect(() => {
    if (
      reservation?.dateTime?.justDate &&
      reservation?.dateTime?.timeSlot &&
      person.email !== "" &&
      person.name !== "" &&
      person.phoneNumber !== ""
    ) {
      pseudoBackend(reservation);
    }
  }, [reservation]);

  const ReservationDiv = (): React.ReactElement => {
    let reservationContent: null | React.ReactElement = null;
    if (date.justDate && date.timeSlot) {
      reservationContent = (
        <div id="reservation">
          <p>Congratulations!</p>
          <p>
            {reservation.person.name} on {reservation.person.phoneNumber} @{" "}
            {reservation.person.email}
          </p>
          <p>Your booking is confirmed for:</p>
          <p>
            {reservation.dateTime.justDate
              ? `${weekdayFormatter.format(
                  reservation.dateTime.justDate
                )}, ${date.justDate.toLocaleDateString()}`
              : ""}{" "}
            @ {reservation.dateTime.timeSlot}
          </p>
        </div>
      );
    }
    return <>{reservationContent}</>;
  };

  // Return JSX primary
  return (
    <>
      <div id="reservation-container">
        <div
          id="modular-reservations-container"
          className={!date.justDate ? "calendar-container" : "time-container"}
        >
          <div id="time-selection">
            {date.justDate && date.justDate.getDay() === 1 ? (
              <div id="monday">
                <button
                  className="back-button"
                  onClick={() => {
                    nullify();
                  }}
                >
                  Return to calendar
                </button>
                <p> We're closed on Mondays :( </p>
              </div>
            ) : (
              <div id="not-monday">
                <button
                  className="back-button"
                  onClick={() => {
                    nullify();
                  }}
                >
                  Return to calendar
                </button>
                {getTimes()}
              </div>
            )}
          </div>
          <Calendar
            minDate={new Date()}
            onClickDay={(date) => {
              setDate((prev) => ({ ...prev, justDate: date }));
            }}
          />
        </div>
      </div>
      {date.justDate && date.timeSlot ? (
        <div id="email-sms" ref={emailRef}>
          <div className="confirmation-container">
            <div className="confirmation-fields">
              <button
                className="back-button"
                onClick={() => {
                  setRetreat((prev) => prev + 1);
                }}
              >
                {" "}
                Return to calendar
              </button>
              <p>
                {" "}
                You have selected{" "}
                <em>
                  {isSameDate(date.justDate, new Date())
                    ? `TODAY: ${weekdayFormatter.format(date.justDate)}`
                    : weekdayFormatter.format(date.justDate)}
                </em>
                , <span>{date.justDate.toLocaleDateString()}</span> @{" "}
                <span>{date.timeSlot ? date.timeSlot : ""}</span>.
              </p>
              <form id="booking-form">
                <div className="form-div">
                  <label htmlFor="name">
                    <p id="name-label">Your name?</p>
                  </label>
                  <input
                    onChange={handleFormChange}
                    value={person.name}
                    className="booking-input-field"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-div">
                  <label htmlFor="email">
                    <p>And your email?</p>
                  </label>
                  <input
                    onChange={handleFormChange}
                    value={person.email}
                    className="booking-input-field"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-div">
                  <label htmlFor="phone">
                    <p>And your digits?</p>
                  </label>
                  <PhoneInput
                    country={"gb"}
                    value={person.phoneNumber}
                    onChange={handleFormChange}
                    inputProps={{
                      name: "phone",
                      required: true,
                      placeholder: "",
                    }}
                  />
                </div>
                <button
                  className="bottom-button"
                  onMouseEnter={() => setConfirmButtonHovered(true)}
                  onMouseLeave={() => setConfirmButtonHovered(false)}
                  onClick={confirmationClickHandler}
                >
                  {confirmButtonHovered
                    ? "Confirm Booking?"
                    : "Confirm Booking"}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {showFinalConfirmation ? (
        <div id="final-confirmation" ref={finalRef}>
          <div className="confirmation-container">
            <div className="confirmation-fields">
              <button
                className="back-button"
                onClick={() => {
                  setRetreat((prev) => prev + 1);
                }}
              >
                {" "}
                Make another booking
              </button>
              <ReservationDiv />
              <button
                className="bottom-button"
                id="confirmation-home"
                onClick={(e) => {
                  props.handleClick(e);
                }}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Reservations;
