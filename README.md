# Checkpoint: React

## Setup

Fork and clone this repo.

**Before you begin anything, run `npm install`.**

## Instructions

You're going to build a simple contact list manager using React and React
Router. An initial set of contacts and some
CSS has been provided in `src/styles/index.css`.

> See a demo of the final app at
> [http://quickest-beam.surge.sh/](http://quickest-beam.surge.sh/)

### Setup

Inside `index.js`, import React Router and pass it to `ReactDOM.render()` as the
root component with `<App>` as a child component.

### `<App>`

Your `<App>` component should have state with a `contacts` property that is initially set to an empty array.

<details>
    <summary>Hint</summary> 

```js
const [contacts, setContacts] = useState([])
```
</details>

Use what you learned about useEffect to make a fetch request when the component mounts and load the contacts in the state.  Set the url to use in your request as: `'/contacts.json'`.

Your `<App>` component should also render:

- A div with a name of `'App'`
- Your `<Header>` component
- Two `<Route />` components:
  - If the route is `"/"` then ***render*** the `<ContactList>` component and pass the contacts in state to it as a prop named `contacts`.
  - If the route is `"/new-contact"` then render the `<NewContact>` component;

### `<Header>`

Your `<Header>` component should render:

- A `<header>` element with an `<h1>`
- A `<nav>` containing two React Router `<Link>`s, one to the homepage (`"/"`)
  and the other to create a new contact (`"/new-contact"`).

### `<ContactList>`

`<ContactList>` should take `contacts` as a prop

It should render:

- A `<Contact>` component for each contact object inside of the `contacts` prop.  Each contact component should be passed one contact object as a prop named `contact`. 
- A `<div>` with a class of `contact-list`.


> Don't forget to use a key prop!  Because our contacts are just a hard coded list, you can use the contact's email as the key.


### `<Contact>`

Your `<Contact>` component will render a single contact.

It should render:

- An outer `<div>` with a class of `contact`
- An include an `<img>` for the `image`,
- `<h3>` for the `name`
- `<h4>` for the `email`.

### `<NewContact>`

Your `<NewContact>` component should render:

- A `<div>` with a class of `new-contact`
- An `<h1>` with a text of `New Contact`
- A form with inputs for the `name`, `email` and `image`.
- Each input should have a **id** and corresponding label

When submitted, you should save the new contact by updating your state inside of
`<App>` and redirect the user back to the homepage/list of contacts.

## Rubric

- [] App component is defined and exported
- [] App component accepts the `contacts` json objects as a prop and the `contacts`
  json object is properly passed
- [] Router is defined and setup using the browser History API
- [] Router includes a route for the homepage (`"/"`) and for the new contact page
  (`"/new-contact"`)
- [] Header component is defined and exported
- [] Header component contains a title and two `<Link>`s, one to the homepage and
  the other to the new contact page
- [] ContactList component is defined and exported
- [] ContactList component iterates through the contacts, rendering a Contact
  component for each
- [] Contact component is defined and exported
- [] Contact component is rendering the image, name and email address of a contact
- [] NewContact is defined and exported
- [] NewContact contains a form that adds a new contact to the parent App component
  state
```
