import axios from "axios";
import { ContactAction } from "../Slices/ContactSlices";
import Swal from 'sweetalert2'


/* --------------------------------------------------------------------------------
                        Global State Fetch From Repidapi
-------------------------------------------------------------------------------- */

export const ContactData = (contactInfo) => {
    return async (dispatch) => {
        const sendContactRequest = async () => {
            console.log(JSON.stringify(contactInfo));

            dispatch(ContactAction.sendContactInfo(contactInfo));
            var data = JSON.stringify({
                "email": contactInfo.email,
                "related": contactInfo.related,
                "subject": contactInfo.subject,
                "message": contactInfo.message
            });

            console.log(data)

            var config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/contact',
                // contentType: "text/plain",
                contentType: "application/json",
                data: data,
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
            // axios.request(
            //     {
            //         method: 'POST',
            //         url: 'http://127.0.0.1:8000/contact',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         data: {
            //             "email": contactInfo.email,
            //             "related": contactInfo.related,
            //             "subject": contactInfo.subject,
            //             "message": contactInfo.message,
            //         }
            //     }
            // ).then(function (response) {
            //     console.log(JSON.stringify(response.data));
            //     Swal.fire({
            //         title: 'Form Sucessfully Submited!',
            //         text: "Thank You! We Connect to You As soon as Possible.",
            //         icon: 'success',
            //         showCancelButton: false,
            //         confirmButtonColor: '#b7ac50',
            //         confirmButtonText: 'Ohk'
            //     })

            // }).catch(function (error) {
            //     Swal.fire({
            //         title: 'Form Sucessfully Submited!',
            //         text: "Thank You! We Connect to You As soon as Possible.",
            //         icon: 'error',
            //         showCancelButton: false,
            //         confirmButtonColor: '#000000',
            //         confirmButtonText: 'Try Again'
            //     })
            // });



            // Swal.fire(
            //     'Success',
            //     'Form Sucessfully Submited!',
            //     'success',
            //     'Ohk <i class="fa fa-thumbs-up"></i>',
            // )
            // alert('Send SuccessFully!');


        }
        try {
            await sendContactRequest();
        } catch (error) {
            console.error(error);
        }
    }
}
