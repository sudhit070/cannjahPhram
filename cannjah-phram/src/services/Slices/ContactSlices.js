import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice({
    name: 'Contact',
    initialState: {
        email: '',
        related: '',
        subject: '',
        message: ''
    },
    reducers: {
        sendContactInfo(state, action) {
            state.email = action.payload.email;
            state.related = action.payload.related;
            state.subject = action.payload.subject;
            state.message = action.payload.message;
        }
    }
});


export const ContactAction = ContactSlice.actions;

export default ContactSlice;