<template>
  <div class="signup-overlay" @click="handleOverlayClick">
    <div class="signup-container" @click.stop>
      <h2 class="signup-title">Sign Up</h2>

      <form class="signup-form">
        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <!-- Username -->
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username" />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <!-- Checkboxes -->
        <div class="checkbox-group">
          <label>
            <input type="checkbox" class="custom-checkbox" />
            I confirm that I am over 18 years old
          </label>
        </div>

        <div class="checkbox-group">
          <label>
            <input type="checkbox" class="custom-checkbox" />
            I agree with the Privacy Policy
          </label>
        </div>

        <!-- Button -->
        <button type="submit" class="signup-button">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  methods: {
    handleOverlayClick() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* overlay preko celog ekrana */
.signup-overlay {
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

/* glavni box */
.signup-container {
  background: #1c1c1c;
  color: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 350px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.signup-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #fff;
}

.signup-form {
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

.checkbox-group {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
}

/* custom checkbox */
.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
  position: relative;
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #1db954;
  border-color: #1db954;
}

.custom-checkbox:checked::after {
  content: "✔";
  color: #fff;
  font-size: 12px;
  position: absolute;
  top: -2px;
  left: 2px;
}

/* dugme */
.signup-button {
  background-color: #1db954;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.signup-button:hover {
  background-color: #17a94d;
}
</style>