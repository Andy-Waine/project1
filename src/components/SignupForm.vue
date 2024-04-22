<template>
  <form @submit.prevent="submitUser">
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <input type="text" v-model="firstname" placeholder="First Name">
    <input type="text" v-model="lastname" placeholder="Last Name">
    <input type="email" v-model="email" placeholder="Email">
    <button type="submit">Sign Up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const firstname = ref('');
const lastname = ref('');
const email = ref('');

const submitUser = async => {
  const userData = {
    username: username.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value
  };

  fetch('http://localhost:3000/api/v1/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => {
      if (response.ok) {
        console.log('User signed up successfully');
      } else {
        console.error('Error signing up:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
</script>

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

.sign-up-link {
  margin-top: 12px;
  align-content: center;
  justify-content: center;
  display: flex;
  font-size: 1rem;
}
</style>