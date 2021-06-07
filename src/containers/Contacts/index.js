import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';
import Header from '../../components/Header'
import getContacts from '../../contexts/actions/contacts/getContacts';
import { GlobalContext } from '../../contexts/Provider'
import ContactsListUI from '../../layouts/Contacts/List';
// import { Container } from 'semantic-ui-react'

const ContactsContainer = () => {
    const { contactsDispatch, contactsState } = useContext(GlobalContext);
    const history = useLocation();
    console.log(contactsState);
    
    useEffect(() => {
        getContacts(history)(contactsDispatch);
    }, [])

    return (
        <Container>
            <Header />
            <h2>All Contacts</h2>
            <ContactsListUI state={contactsState} />
        </Container>
    )
}

export default ContactsContainer
