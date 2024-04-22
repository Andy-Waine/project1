<script setup>
// import axios from 'axios'; // dont need this, delete from package.
import { ref } from 'vue';

// Define data properties
const username = ref('');
const password = ref('');
const firstname = ref('');
const lastname = ref('');
const email = ref('');

const submitUser = async () => {
  const userData = {
    username: username.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value
  };

  // Make an HTTP POST request to send user data to the backend
  fetch('http://localhost:3000/api/v1/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => {
      if (response.ok) {
        // User successfully signed up
        console.log('User signed up successfully');
      } else {
        // Handle signup error
        console.error('Error signing up:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="dark-green" style="margin: 0 0 25px 0">Sign In</h1>
      <form class="login-form">
        <label for="username" class="dark-green">
          Username:
        </label>
        <input type="text" id="username" name="username">

        <label for="password" class="dark-green">
          Password:
        </label>
        <input type="password" id="password" name="password">

        <button type="submit">Sign In</button>
      </form>
    </div>
  </div>
    <div>
    <form @submit.prevent="submitUser">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <input type="text" v-model="firstname" placeholder="First Name">
      <input type="text" v-model="lastname" placeholder="Last Name">
      <input type="email" v-model="email" placeholder="Email">
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: #ffecda;
}

h3 { 
  font-size: 1.2rem;
}

label {
  margin-bottom: 5px;
  font-weight: bold
}

input {
  width: 94%;
  padding: 8px;
  margin-bottom: 15px;
  margin-right: 15px;
  border-radius: 6px;
  color: rgb(143, 91, 2);
  font-weight: bold;
  background-color:#fefaf8;
  border: .5px solid rgb(143, 91, 2);
}

input:focus {
  outline: .5px solid rgb(143, 91, 2);
}

button {
  width: 100%;
  padding: 7px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #482301;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: Tiempos Fine, Times New Roman, sans-serif;
}



</style>
