<template>
  <div class="home-page">
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="logo-section">
          <div class="logo-icon">
            <div class="logo-grid">
              <div class="grid-item"></div>
              <div class="grid-item"></div>
              <div class="grid-item"></div>
              <div class="grid-item"></div>
            </div>
          </div>
          <h1 class="logo-text">TaskForce</h1>
        </div>
        
        <div class="auth-buttons">
          <a href="#login" class="login-link">Se connecter</a>
          <button class="cta-button">S'inscrire</button>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="split-page">
        <div class="left-side">
          <div class="content-wrapper">
            <h2 class="hero-title">
              Répartissez, organisez et gérez vos tâches intelligemment
            </h2>
            
            <div class="signup-form">
              <input 
                type="email" 
                placeholder="Email " 
                class="email-input"
              >
              <button class="signup-button">S'inscrire</button>
            </div>
            
            <p class="privacy-text">
              En saisissant mon email, j'accepte la 
              <router-link to="/privacy" class="privacy-link">politique de confidentialité</router-link> de TaskForce.
            </p>
          </div>
        </div>

        <div class="right-side">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: #00bcd4;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  width: 20px;
  height: 20px;
}

.grid-item {
  background: white;
  border-radius: 1px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00bcd4; 
  margin: 0;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.login-link {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid #374151;
  border-radius: 6px;
  transition: all 0.2s;
  font-size: 1rem;
  line-height: 1.5;
}

.login-link:hover {
  color: #00bcd4;
  border-color: #00bcd4;
}

.cta-button {
  background: #00bcd4; 
  color: white;
  border: 2px solid transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-button:hover {
  background: #00a5b8;
}

.main-content {
  height: 100vh; 
  margin: 0;
  padding: 0;
}

.split-page {
  display: flex;
  height: 100%;
  width: 100%;
}

.left-side {
  flex: 1;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content-wrapper {
  max-width: 500px;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  line-height: 1.1;
  margin-bottom: 2rem;
}

.signup-form {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  justify-content: center;
}

.email-input {
  flex: 1;
  max-width: 300px;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.email-input:focus {
  border-color: #00bcd4;
}

.signup-button {
  background: #00bcd4;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.signup-button:hover {
  background: #00a5b8;
}

.privacy-text {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.privacy-link {
  color: #00bcd4;
  text-decoration: none;
}

.right-side {
  flex: 1;
  background: #00bcd4; 
  height: 100%; 
}

@media (max-width: 1024px) {
  .split-page {
    flex-direction: column;
  }
  
  .left-side {
    flex: none;
    height: 60%;
    padding: 1.5rem;
  }
  
  .right-side {
    flex: none;
    height: 40%;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .auth-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .signup-form {
    flex-direction: column;
    align-items: center; 
  }
  
  .email-input {
    max-width: 100%;
  }
  
  .left-side {
    padding: 1rem;
  }
}
</style>
