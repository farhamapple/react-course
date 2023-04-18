import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props){

    const titleInputRef = useRef(); //Object
    const iamgeInputRef = useRef(); //Object
    const addressInputRef = useRef(); //Object
    const descriptionInputRef = useRef(); //Object

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value; // Reading
        const enteredImage = iamgeInputRef.current.value; // Reading
        const enteredAddress = addressInputRef.current.value; // Reading
        const enteredDescription = descriptionInputRef.current.value; // Reading
        // titleInputRef.current.value = 'Some new Value'; // Input Static String

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        }

        console.log(meetupData);
        props.onAddMeetup(meetupData);
        // Send data to a Server

    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={iamgeInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>;
}

export default NewMeetupForm;