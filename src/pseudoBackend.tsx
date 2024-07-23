import emailjs from "@emailjs/browser";

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

interface CustomerObject extends Record<string, unknown> {
  customerName: string;
  customerEmail: string;
  customerDate: string;
  customerNumber: string;
}

/* emailJS keys:
Account Public Key: 7Pnv_rg3SCrYBFp1S
Service ID: service_7bxq76a
Template ID: template_xgjxuqk

textbelt key:
6906702539543eda3ec705f5d119a552bbcfeb374ykiFoXXtoSB50lEB3ZUl0Mnm
*/
function pseudoBackend(reservation: Reservation): void {
  // Code to convert reservation to useful emailjs data object
  const customerObject: CustomerObject = {
    customerName: reservation?.person?.name,
    customerEmail: reservation?.person?.email,
    customerDate: `${reservation?.dateTime?.justDate?.toLocaleDateString()} @ ${
      reservation?.dateTime?.timeSlot
    }`,
    customerNumber: reservation?.person?.phoneNumber,
  };
  console.log(JSON.stringify(customerObject));

  //Code to send email via emailjs
  emailjs
    .send("service_7bxq76a", "template_xgjxuqk", customerObject, {
      publicKey: "7Pnv_rg3SCrYBFp1S",
    })
    .then(
      () => {
        alert(`confirmation email sent`);
      },
      (error) => {
        alert(`${error}: confirmation email failure`);
      }
    );

  // Code to send sms via textbelt
  fetch("https://textbelt.com/text", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone: customerObject?.customerNumber,
      message: `Confirming reservation for ${customerObject?.customerName} @ Asherah Restaurant @ ${customerObject?.customerDate}`,
      key: "6906702539543eda3ec705f5d119a552bbcfeb374ykiFoXXtoSB50lEB3ZUl0Mnm",
    }),
  })
    .then((response) => {
      alert(`confirmation sms sent (provider may be filtered as spam by carrier)`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

export default pseudoBackend;
