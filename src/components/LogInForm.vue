<template>
  <div class="login-overlay" @click="handleOverlayClick">
    <div class="login-container" @click.stop>
      <h2 class="login-title">Log In</h2>

      <form class="login-form">
        <!-- Username -->
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <!-- Button -->
        <button type="submit" class="login-button">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  methods: {
    handleOverlayClick() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* overlay */
.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

/* box */
.login-container {
  background: #1c1c1c;
  color: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 350px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.login-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #fff;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.form-group input {
  width: 100%;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 0.9rem;
}

/* dugme */
.login-button {
  background-color: #1db954;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.login-button:hover {
  background-color: #17a94d;
}
</style>