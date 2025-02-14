# 🎨 Print History Card

![Print History Card](https://raw.githubusercontent.com/ton-repo/image-preview.png)

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

![Aperçu de la carte]([https://raw.githubusercontent.com/ton-repo/preview.png](https://github.com/llaull/print-history-card/blob/main/pannel.png))

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

