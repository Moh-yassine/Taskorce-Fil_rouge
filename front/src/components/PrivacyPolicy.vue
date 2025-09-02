<template>
  <div class="privacy-policy">

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

    <main class="main-content">
      <div class="content-wrapper">
        <h2 class="policy-title">Politique de Confidentialité</h2>
        
        <div class="policy-text">
          <p>
            TaskForce s'engage à protéger et respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre service de répartition dynamique des tâches.
          </p>

          <p>
            Nous collectons les informations que vous nous fournissez directement, notamment votre nom et prénom, votre adresse e-mail, vos informations de profil professionnel, vos compétences et expériences, ainsi que vos données de charge de travail. Nous collectons également automatiquement certaines informations techniques comme les données d'utilisation de l'application, les informations sur votre navigateur et système d'exploitation, votre adresse IP et données de localisation, ainsi que les cookies et technologies similaires.
          </p>

          <p>
            Nous utilisons vos informations pour fournir et améliorer nos services de gestion de tâches, optimiser la répartition automatique des tâches, personnaliser votre expérience utilisateur, communiquer avec vous concernant nos services, assurer la sécurité et prévenir la fraude, et respecter nos obligations légales.
          </p>

          <p>
            Nous traitons vos données sur la base de l'exécution du contrat pour fournir nos services, de l'intérêt légitime pour améliorer nos services et assurer la sécurité, du consentement pour les communications marketing qui est révocable à tout moment, et de l'obligation légale pour respecter la réglementation applicable.
          </p>

          <p>
            Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations uniquement avec votre consentement explicite, avec nos prestataires de services pour l'hébergement et le support technique, pour respecter une obligation légale, ou pour protéger nos droits et notre sécurité.
          </p>

          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données, notamment le chiffrement des données en transit et au repos, l'accès restreint aux données personnelles, la surveillance continue de nos systèmes, la formation régulière de nos employés, et des tests de sécurité réguliers.
          </p>

          <p>
            Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services, respecter nos obligations légales, résoudre les litiges, et faire respecter nos accords. Les données sont supprimées ou anonymisées une fois qu'elles ne sont plus nécessaires.
          </p>

          <p>
            Conformément au RGPD, vous disposez du droit d'accès pour consulter vos données personnelles, du droit de rectification pour corriger des données inexactes, du droit à l'effacement pour demander la suppression de vos données, du droit à la portabilité pour récupérer vos données dans un format structuré, du droit d'opposition pour vous opposer au traitement de vos données, et du droit de limitation pour limiter le traitement de vos données.
          </p>

          <p>
            Nous utilisons des cookies et des technologies similaires pour assurer le bon fonctionnement de l'application, mémoriser vos préférences, analyser l'utilisation de nos services, et améliorer nos performances. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
          </p>

          <p>
            Vos données peuvent être transférées et traitées dans des pays en dehors de l'Union européenne. Nous nous assurons que ces transferts respectent les exigences du RGPD et mettons en place des garanties appropriées.
          </p>

          <p>
            Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement significatif par e-mail ou via une notification dans l'application.
          </p>

        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy'
}
</script>

<style scoped>
.privacy-policy {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  transition: color 0.2s;
  padding: 0.5rem 1rem;
  border: 2px solid #374151;
  border-radius: 6px;
  transition: all 0.2s;
}

.login-link:hover {
  color: #00bcd4;
  border-color: #00bcd4;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.content-wrapper {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.policy-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
}

.policy-text p {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  text-align: justify;
}

@media (max-width: 1024px) {
  .main-content {
    padding: 3rem 2rem;
  }
  
  .content-wrapper {
    padding: 2rem;
  }
  
  .policy-title {
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
  
  .content-wrapper {
    padding: 1.5rem;
  }
  
  .policy-title {
    font-size: 1.75rem;
  }
  
  .policy-text p {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}
</style>
