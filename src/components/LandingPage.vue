<script setup>
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="dark-green" style="margin: 0 0 25px 0">Sign In</h1>
      <form class="login-form">
        <!-- Username -->
        <label for="username" class="dark-green">
          Username:
        </label>
        <input type="text" id="username" name="username">

        <!-- Password -->
        <label for="password" class="dark-green">
          Password:
        </label>
        <input type="password" id="password" name="password">

        <button type="submit">Sign In</button>
      </form>
    </div>
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
