import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/buttons';

storiesOf('Button', module)
    .add('with text', () => (
        <Button text={"Confirm"}/>
    ), {
        notes: `Button can be used with only one prop 'text'. However this button won't do anything.
        import { Button } from 'cheapreats-react-ui/components/buttons';
        `
    })
    .add('with onClick action', () => (
        <Button
            text={"Show me an alert!"}
            onClick={e => {
                window.alert("You just clicked on the button!");
            }}
        />
    ), {
        notes: "You can also pass in an onClick prop to specify the action to take upon clicking."
    })
    .add('disabled', () => (
        <Button
            text={"I am disabled... :("}
            onClick={e => {
                window.alert("You just clicked on the button!");
            }}
            disabled={true}
        />
    ), {
        notes: "Disabling the button will also disable all onClick events."
    });