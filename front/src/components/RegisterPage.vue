<template>
  <div class="register-page">
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
            <h2 class="page-title">Inscription</h2>
            <p class="page-subtitle">Rejoignez TaskForce et optimisez votre équipe</p>
            
            <!-- Message d'erreur -->
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
            
            <!-- Message de succès -->
            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>
            
            <form class="register-form" @submit.prevent="handleRegister">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName" class="form-label">Prénom</label>
                  <input 
                    id="firstName"
                    type="text" 
                    v-model="formData.firstName"
                    placeholder="Votre prénom" 
                    class="form-input"
                    required
                    :disabled="isLoading"
                  >
                </div>
                
                <div class="form-group">
                  <label for="lastName" class="form-label">Nom</label>
                  <input 
                    id="lastName"
                    type="text" 
                    v-model="formData.lastName"
                    placeholder="Votre nom" 
                    class="form-input"
                    required
                    :disabled="isLoading"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email professionnel</label>
                <input 
                  id="email"
                  type="email" 
                  v-model="formData.email"
                  placeholder="votre@email.com" 
                  class="form-input"
                  required
                  :disabled="isLoading"
                  @blur="checkEmailAvailability"
                >
                <div v-if="emailStatus" class="email-status" :class="emailStatus.type">
                  {{ emailStatus.message }}
                </div>
              </div>
              
              <div class="form-group">
                <label for="role" class="form-label">Rôle dans l'équipe</label>
                <select 
                  id="role" 
                  v-model="formData.role" 
                  class="form-select"
                  required
                  :disabled="isLoading"
                >
                  <option value="">Sélectionnez votre rôle</option>
                  <option value="collaborator">Collaborateur</option>
                  <option value="manager">Manager</option>
                  <option value="project_manager">Responsable de Projet</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="company" class="form-label">Entreprise</label>
                <input 
                  id="company"
                  type="text" 
                  v-model="formData.company"
                  placeholder="Nom de votre entreprise" 
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
                  placeholder="Créez un mot de passe sécurisé" 
                  class="form-input"
                  required
                  :disabled="isLoading"
                >
              </div>
              
              <div class="form-group">
                <label for="confirmPassword" class="form-label">Confirmer le mot de passe</label>
                <input 
                  id="confirmPassword"
                  type="password" 
                  v-model="formData.confirmPassword"
                  placeholder="Confirmez votre mot de passe" 
                  class="form-input"
                  required
                  :disabled="isLoading"
                >
                <div v-if="passwordError" class="password-error">
                  {{ passwordError }}
                </div>
              </div>
              
              <div class="form-options">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="formData.acceptTerms" required :disabled="isLoading">
                  <span class="checkmark"></span>
                  J'accepte les <a href="#terms" class="terms-link">conditions d'utilisation</a> et la 
                  <router-link to="/privacy" class="terms-link">politique de confidentialité</router-link>
                </label>
              </div>
              
              <button type="submit" class="submit-button" :disabled="isLoading || !isFormValid">
                <span v-if="isLoading">Création du compte...</span>
                <span v-else>Créer mon compte</span>
              </button>
            </form>
            
            <div class="auth-footer">
              <p class="auth-text">
                Déjà un compte ? 
                <router-link to="/login" class="auth-link">Se connecter</router-link>
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
  name: 'RegisterPage',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        company: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
      },
      isLoading: false,
      errorMessage: '',
      successMessage: '',
      emailStatus: null,
      passwordError: ''
    }
  },
  computed: {
    isFormValid() {
      return this.formData.firstName && 
             this.formData.lastName && 
             this.formData.email && 
             this.formData.role && 
             this.formData.company && 
             this.formData.password && 
             this.formData.confirmPassword && 
             this.formData.acceptTerms &&
             this.passwordError === '' &&
             (this.emailStatus === null || this.emailStatus.type === 'success')
    }
  },
  methods: {
    async checkEmailAvailability() {
      if (!this.formData.email || this.formData.email.length < 3) {
        this.emailStatus = null
        return
      }

      try {
        const exists = await authService.checkEmail(this.formData.email)
        this.emailStatus = {
          type: exists ? 'error' : 'success',
          message: exists ? 'Cet email est déjà utilisé' : 'Email disponible'
        }
      } catch (error) {
        this.emailStatus = {
          type: 'error',
          message: 'Erreur lors de la vérification'
        }
      }
    },

    validatePassword() {
      if (this.formData.password !== this.formData.confirmPassword) {
        this.passwordError = 'Les mots de passe ne correspondent pas'
        return false
      }
      
      if (this.formData.password.length < 6) {
        this.passwordError = 'Le mot de passe doit contenir au moins 6 caractères'
        return false
      }
      
      this.passwordError = ''
      return true
    },

    async handleRegister() {
      // Validation des mots de passe
      if (!this.validatePassword()) {
        return
      }

      this.isLoading = true
      this.errorMessage = ''
      this.successMessage = ''

      try {
        // Utiliser le vrai service d'authentification
        await authService.register(this.formData)
        
        this.successMessage = 'Compte créé avec succès ! Redirection...'
        
        // Rediriger vers le dashboard après un court délai
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 1500)
        
      } catch (error) {
        this.errorMessage = error.message || 'Erreur lors de la création du compte'
      } finally {
        this.isLoading = false
      }
    }
  },
  watch: {
    'formData.confirmPassword'() {
      if (this.formData.password && this.formData.confirmPassword) {
        this.validatePassword()
      }
    }
  }
}
</script>

<style scoped>
.register-page {
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

.register-form {
  text-align: left;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
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

.form-input, .form-select {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
  background: white;
}

.form-input:focus, .form-select:focus {
  border-color: #00bcd4;
}

.form-input:disabled, .form-select:disabled {
  background-color: #f9fafb;
  cursor: not-allowed;
}

.form-select {
  cursor: pointer;
}

/* Status email et erreurs mot de passe */
.email-status {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.email-status.success {
  background: #dcfce7;
  color: #166534;
}

.email-status.error {
  background: #fee2e2;
  color: #991b1b;
}

.password-error {
  margin-top: 0.5rem;
  color: #991b1b;
  font-size: 0.75rem;
  font-weight: 500;
}

.form-options {
  margin-bottom: 2rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  cursor: pointer;
  line-height: 1.4;
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #00bcd4;
  margin-top: 0.125rem;
}

.checkbox-label input[type="checkbox"]:disabled {
  cursor: not-allowed;
}

.terms-link {
  color: #00bcd4;
  text-decoration: none;
  font-weight: 500;
}

.terms-link:hover {
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
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
