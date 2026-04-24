import React from 'react'

//https://script.google.com/macros/s/AKfycbzO6YQL2aiDNNtFtRaA-qWfHddTQx41Gw4orIdOxT64939L2HeTRrbVQ3hScKWqOonKuQ/exec
const FormPage = () => {
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const values = e.target;
        console.log(values.name.value, values.email.value, values.role.value, values.date.value);
        const url = 'https://script.google.com/macros/s/AKfycbzO6YQL2aiDNNtFtRaA-qWfHddTQx41Gw4orIdOxT64939L2HeTRrbVQ3hScKWqOonKuQ/exec';
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `Name=${values.name.value}&Email=${values.email.value}&Role=${values.role.value}&Timestamp=${values.date.value}`,
            })
        } catch (error) {
            console.error('Error submitting form:', error);

        }
    }
  return (
    <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder='Name' />
        <input type="email" name="email" placeholder='Email' />
        <input type="text" name="role" placeholder='Role' />
        <input type="date" name="date" placeholder='Date' />

        <button type="submit">Submit</button>
    </form>
  )
}

export default FormPage