# 🎨 Print History Card

Une carte personnalisée pour **Home Assistant** permettant d'afficher l'historique des impressions 3D.  
Elle affiche les fichiers imprimés, la couleur utilisée, le type de filament et le statut de l'impression.

## 📌 Fonctionnalités

✅ Affichage de l'historique des impressions  
✅ Indicateur visuel de la couleur du filament  
✅ Icônes pour le statut de l'impression  
✅ Formatage automatique des dates en français  
✅ Mise à jour dynamique des données  

## 🚀 Installation

1. **Télécharge les fichiers** ou clone le dépôt :
   ```sh
   git clone https://github.com/ton-repo/print-history-card.git
   ```
2. **Ajoute le fichier dans Home Assistant**  
   - Place le fichier `.js` dans le dossier `/www/` de Home Assistant.
3. **Ajoute la carte dans Lovelace**  
   - Active le mode YAML si nécessaire  
   - Ajoute la carte personnalisée avec :  
   ```yaml
   - type: custom:print-history-card
   ```
4. **Redémarre Home Assistant** pour appliquer les changements.

## 📸 Aperçu

![Print History Card](https://github.com/llaull/print-history-card/blob/main/pannel.png)

## 🔧 Configuration

Tu peux configurer plusieurs options dans Lovelace :

```yaml
- type: custom:print-history-card
  title: "Historique des impressions"
```

## 🛠️ Développement

Tu peux modifier le fichier `print-history-card.js` pour adapter la carte à tes besoins.

### Cloner le projet
```sh
git clone https://github.com/ton-repo/print-history-card.git
cd print-history-card
```

### Modifier et tester
Ajoute les modifications dans `print-history-card.js`, puis recharge Home Assistant.

## Prérequis

1. **Node-RED via le gestionnaire de modules de Home Assistant** :  
   Pour installer **Node-RED** dans **Home Assistant**, suis ces étapes :
   
   - Ouvre **Home Assistant** et va dans le menu **Supervisor** (supervision).
   - Clique sur l'onglet **Add-on Store** (Store des add-ons).
   - Cherche **Node-RED** dans la barre de recherche.
   - Sélectionne le module **Node-RED** et clique sur **Install**.
   - Une fois installé, tu peux démarrer **Node-RED** depuis cette interface.
   - Accède à Node-RED via l'URL fournie dans l'interface d'add-on de Home Assistant.

2. **Serveur MySQL** : Assure-toi d'avoir un serveur MySQL fonctionnel.
   - Installe MySQL sur ta machine ou utilise un service externe.
   - Crée une base de données pour enregistrer l'historique des impressions.

3. **Plugin HACS pour Bambu Lab** : Installe le plugin HACS pour intégrer facilement les imprimantes 3D avec Home Assistant.
   - Installe le plugin depuis HACS pour obtenir un suivi de ton imprimante.

## 📄 Importation du fichier `flow.json` dans Node-RED

Une fois que tu as configuré ton serveur MySQL et installé le plugin HACS, tu peux importer le fichier `flow.json` dans **Node-RED** :

### Étapes :

1. **Ouvre Node-RED** via l'interface Home Assistant.
2. **Importe le fichier `flow.json`** :
   - Clique sur l'icône du menu (en haut à droite).
   - Sélectionne **Import** et choisis ton fichier `flow.json`.
3. **Vérifie les connexions MySQL** :
   - Assure-toi que les nœuds dans le flux sont bien configurés pour communiquer avec ton serveur MySQL.
4. **Ajoute les nœuds spécifiques à HACS** : Si nécessaire, configure des nœuds pour interagir avec le plugin HACS Bambu Lab pour récupérer les informations de ton imprimante.
5. **Déploie les modifications** et surveille les résultats.

## 🤝 Contribution

Les contributions sont les bienvenues !  
1. **Fork** le projet 🍔  
2. **Crée une branche** pour tes modifications (`git checkout -b feature-nouvelle-fonction`)  
3. **Commit tes changements** (`git commit -m "Ajout d'une nouvelle fonctionnalité"`)  
4. **Push la branche** (`git push origin feature-nouvelle-fonction`)  
5. **Ouvre une Pull Request**  

## 🐜 Licence

Ce projet est sous licence **MIT**.  

---

🔥 **Améliore ton interface Home Assistant avec Print History Card !** 🚀
