import { useState } from 'react'    
import Input from './Input'
import Title from './Title';
import Button from './Button';
import Select from './Select';
function RegisterForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    return (
        <div>
         <form onSubmit={(e) => {
            e.preventDefault();
            console.log({ name, lastName, email, password });  }}>

            <Title name="Register Form" />
            <Title name="Please fill in the form below" />
          <Input 
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Select name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}>
                <option value="">Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mr">Mrs</option>
                <option value="Mr">Ms</option>
              </Select>
              <p>Selected title: {title}</p>
               <Button name="Submit" type="submit" />
                <Button name="Reset" type="reset" />
            </form>
        </div>
    )
}

export default RegisterForm