<template>
  <div class="login-page">
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
          <router-link to="/" class="login-link">Retour à l'accueil</router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="split-page">
        <!-- Left Side - White with Content -->
        <div class="left-side">
          <div class="content-wrapper">
            <h2 class="page-title">Connexion</h2>
            <p class="page-subtitle">Accédez à votre espace TaskForce</p>
            
            <!-- Message d'erreur -->
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
            
            <!-- Message de succès -->
            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>
            
            <form class="login-form" @submit.prevent="handleLogin">
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input 
                  id="email"
                  type="email" 
                  v-model="formData.email"
                  placeholder="votre@email.com" 
                  class="form-input"
                  required
                  :disabled="isLoading"
                >
              </div>
              
              <div class="form-group">
                <label for="password" class="form-label">Mot de passe</label>
                <input 
                  id="password"
                  type="password" 
                  v-model="formData.password"
                  placeholder="Votre mot de passe" 
                  class="form-input"
                  required
                  :disabled="isLoading"
                >
              </div>
              
              <div class="form-options">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="formData.rememberMe" :disabled="isLoading">
                  <span class="checkmark"></span>
                  Se souvenir de moi
                </label>
                
                <a href="#forgot-password" class="forgot-link">Mot de passe oublié ?</a>
              </div>
              
              <button type="submit" class="submit-button" :disabled="isLoading">
                <span v-if="isLoading">Connexion en cours...</span>
                <span v-else>Se connecter</span>
              </button>
            </form>
            
            <div class="auth-footer">
              <p class="auth-text">
                Pas encore de compte ? 
                <router-link to="/register" class="auth-link">S'inscrire</router-link>
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side - Cyan -->
        <div class="right-side">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import authService from '@/services/authService.js'

export default {
  name: 'LoginPage',
  data() {
    return {
      formData: {
        email: '',
        password: '',
        rememberMe: false
      },
      isLoading: false,
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    async handleLogin() {
      this.isLoading = true
      this.errorMessage = ''
      this.successMessage = ''

      try {
        // Utiliser le vrai service d'authentification
        await authService.login(this.formData.email, this.formData.password)
        
        this.successMessage = 'Connexion réussie ! Redirection...'
        
        // Rediriger vers le dashboard après un court délai
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 1500)
        
      } catch (error) {
        this.errorMessage = error.message || 'Erreur lors de la connexion'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Header Styles - Même taille que la page d'accueil */
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

/* Main Content - Split Page */
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

/* Left Side - White with Content */
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

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2.5rem;
}

/* Messages d'erreur et de succès */
.error-message {
  background: #fee2e2;
  color: #991b1b;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #fecaca;
  font-size: 0.875rem;
}

.success-message {
  background: #dcfce7;
  color: #166534;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #bbf7d0;
  font-size: 0.875rem;
}

.login-form {
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #00bcd4;
}

.form-input:disabled {
  background-color: #f9fafb;
  cursor: not-allowed;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #00bcd4;
}

.checkbox-label input[type="checkbox"]:disabled {
  cursor: not-allowed;
}

.forgot-link {
  color: #00bcd4;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
}

.forgot-link:hover {
  text-decoration: underline;
}

.submit-button {
  width: 100%;
  background: #00bcd4;
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}

.submit-button:hover:not(:disabled) {
  background: #00a5b8;
}

.submit-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.auth-footer {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.auth-text {
  color: #6b7280;
  font-size: 0.875rem;
}

.auth-link {
  color: #00bcd4;
  text-decoration: none;
  font-weight: 600;
}

.auth-link:hover {
  text-decoration: underline;
}

/* Right Side - Cyan */
.right-side {
  flex: 1;
  background: #00bcd4;
  height: 100%;
}

/* Responsive Design */
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
  
  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .main-content {
    padding: 2rem 1rem;
  }
  
  .left-side {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 1.75rem;
  }
  
  .form-options {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
