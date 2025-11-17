# Fiche Modèle — Documentation Utilisateur

La **Fiche Modèle** est l’interface centrale de gestion des modèles produits dans le système. Elle permet de créer, modifier et suivre les informations techniques, commerciales et logistiques liées à chaque modèle, y compris ses coloris, sa nomenclature et son historique.

![Capture d'écran : Fiche Modèle - Vue principale](../images/fm.png)

> ⚠️ **Remarque** : Seuls les utilisateurs autorisés peuvent créer ou modifier un modèle. Une validation par un responsable métier peut être requise selon les règles d’entreprise.

---

## 1. En-tête de la fiche

### Tiers
- Sélectionnez le **tiers fabricant ou fournisseur** via la liste déroulante (ex: `0115` → `MEY GmbH`).
- Le nom du tiers s’affiche automatiquement à droite.

### Modèle technique \*
- Saisissez ou recherchez le **code technique du modèle** via la loupe.
- Ce champ est obligatoire et unique.

### Valide
- Cochez **Oui** pour activer le modèle dans le système.
- Cochez **Non** pour le désactiver sans le supprimer.

### Annulé le :
- Date d’annulation du modèle (si applicable).

---

## 2. Onglets & Panneaux latéraux

### Panneau droit : Actions rapides

| Bouton | Fonction |
|--------|----------|
| **Enregistrer** ✔️ | Sauvegarde les modifications apportées. |
| **Nouveau** ➕ | Crée un nouveau modèle. |
| **Supprimer** 🗑️ | Supprime définitivement le modèle (confirmation requise). |
| **Annuler** ❌ | Annule les modifications non sauvegardées. |
| **Duplication** 📄+📄 | Crée une copie du modèle actuel. |

> 💡 **Astuce** : Utilisez **Duplication** pour créer un modèle similaire (ex: variante de couleur ou de collection).

---

## 3. Informations Modèle — Détails

### Description commerciale \*
- Libellé commercial du modèle (ex: `1350018 ZOLLTARIFNR: 62121090`).
- Obligatoire pour la visibilité commerciale.

### Modèle commercial
- Code commercial utilisé pour les ventes et les commandes.

### Collection
- Sélectionnez la collection associée via la loupe.

### Thème \*
- Thème du modèle (ex: `PRETTY`, `PRETTY JOAN`). Obligatoire.

### Famille atelier
- Famille technique utilisée dans l’atelier de production.

### Quantités
- **Quantité Barquette** : Nombre d’unités par barquette.
- **Quantité Pipelette** : Nombre d’unités par pipelette (si applicable).

### Arrêt de Production
- **Non** : Modèle actif.
- **Oui** : Modèle arrêté (à sélectionner dans la liste déroulante).
- **Date Arrêt Production** : Date effective de l’arrêt (si applicable).

---

## 4. Informations techniques (colonne droite)

### Certificat (*)
- Sélectionnez le type de certificat requis (ex: `-`, `OEKO-TEX`, etc.).

### Marque
- Marque associée au modèle (ex: `MEY`).

### Famille \*
- Famille produit (ex: `SG`). Obligatoire.

### Code CAO \*
- Code utilisé dans les logiciels de conception assistée par ordinateur.

### Code grille de Taille \*
- Référence de la grille de tailles (ex: `75 90B`).

### Sous-Famille
- Sous-catégorie du modèle.

### Cycle de Production MRP \*
- Cycle de production utilisé dans le module MRP (Management des Ressources de Production).

### Ligne budgétaire
- Ligne budgétaire associée au modèle (utile pour le suivi financier).

---

## 5. Liste des Coloris du Modèle

Sous la section “Informations Modèle”, vous trouverez la liste des coloris associés au modèle.


### Colonnes affichées :

| Colonne | Description |
|---------|-------------|
| **Coloris** | Code du coloris (ex: `1724`, `38`) |
| **Libellé** | Nom du coloris (ex: `ASTRAL NIGHT`, `BLOSSOM`) |
| **Type Modèle** | Type de modèle (ex: `Série`) |
| **Arrêt Prod.** | Statut d’arrêt de production |
| **Date Arrêt Prod** | Date d’arrêt (si applicable) |
| **Arrêt Définitif** | Statut d’arrêt définitif |
| **Date Arrêt Déf** | Date d’arrêt définitif |
| **Codif. Thm(Col)** | Codification thématique + coloris |
| **Date sortie collection Modèle** | Date de fin de commercialisation |
| **Saison modèle** | Saison d’appartenance |

> ✅ Vous pouvez ajouter, modifier ou supprimer des coloris directement depuis cette liste via les boutons `+` et `-` situés juste au-dessus.

---

## 6. Accès aux sous-fiches (panneau droit)

Après avoir chargé un modèle, le panneau droit propose des accès rapides vers des fonctionnalités spécifiques :

- **Fiche** → Retour à la fiche principale du modèle.
- **Info Matière** → Accès aux matières premières associées.
- **Nomenclature** → Gestion des composants du modèle.
- **Code Article** → Génération ou consultation des codes articles.
- **Article Comm.** → Informations commerciales liées à l’article.
- **Gamme** → Gamme de production associée.
- **PRI** → Paramètres du Plan de Réapprovisionnement Intégré.
- **Historique** → Historique des modifications.

---

## 7. Création/Modification Nomenclature

Cliquez sur **Nomenclature** pour accéder à la fenêtre de gestion des composants du modèle.

![Capture d'écran : Création/Modification Nomenclature](../images/numenclature.png)

### En-tête

- **Modèle Technique** : Affiche le code du modèle courant.
- **Libellé Modèle** : Libellé commercial.
- **Modèle CAO** : Code CAO associé.
- **Login utilisant la nomenclature** : Utilisateur ayant modifié la nomenclature.
- **Commentaire** : Champ libre pour notes internes.
- **Tiers** : Tiers associé (ex: `MEY GmbH`).

### Options d’affichage

- **Nomenclature Valide** : 
  - **O** = Nomenclature valide
  - **N** = Nomenclature non valide
- **Type de Nomenclature** :
  - **Initial** (par défaut)
  - **Fabrication**
  - **Achat**

### Listes des coloris

- **Liste des coloris Modèle** : Coloris du modèle actuel.
- **Liste des Coloris Matières** : Coloris disponibles pour les matières composantes.

### Références

Tableau principal permettant d’ajouter ou modifier les références de composants :

| Colonne | Description |
|---------|-------------|
| **Référence** | Code de la matière ou composant |
| **Libellé** | Désignation du composant |
| **Typ** | Type (ex: F = Fourni, E = Emballage) |
| **Aff** | Affectation (ex: UN = Unité) |
| **Blo** | Bloquant (Oui/Non) |
| **Cdt** | Conditionné (Oui/Non) |
| **Etat** | État de la référence |
| **PRI** | Prioritaire (Oui/Non) |
| **Pays / Client** | Filtres pour afficher les références par pays ou client |

> 🔴 **Ligne Non valide** : Indique une erreur dans la ligne (ex: référence manquante, coloris incompatible).
> 🟢 **Référence Coloris Bloquant** : La référence est bloquante pour ce coloris.
> 🔴 **Coloris en Arrêt de Production** : Le coloris est arrêté — attention aux impacts.

### Emploi par Tailles

Matrice permettant de définir la quantité de chaque composant par taille (ex: `75B`, `80B`, `85B`, `90B`).

> 💡 Les cellules vertes indiquent que la référence est assignée à ce coloris/taille.

---

## 8. Actions en bas de la fenêtre Nomenclature

| Bouton | Fonction |
|--------|----------|
| **Ajouter Réf** | Ajoute une nouvelle référence à la nomenclature. |
| **Insérer Réf** | Insère une référence à une position spécifique. |
| **Dupliquer Réf** | Duplique la référence sélectionnée. |
| **Suppr Réf** | Supprime la référence sélectionnée. |
| **Rech. Référence** | Recherche une référence existante. |
| **Remplacer Réf** | Remplace la référence sélectionnée par une autre. |
| **Référence Supprimée** | Gestion des références supprimées (avec boutons `+` et `-`). |
| **SSE avec gestion OI** | Accès au sous-système d’exploitation avec gestion des ordres internes. |
| **Enregistrer** ✔️ | Sauvegarde toutes les modifications. |
| **Export Excel** 📊 | Exporte la nomenclature au format Excel. |
| **Quitter** ❌ | Ferme la fenêtre sans sauvegarder. |

---

## 9. Règles de saisie & Bonnes pratiques

- Les champs marqués d’un astérisque (`*`) sont **obligatoires**.
- La validation se fait automatiquement lors de l’enregistrement.
- Pour les modèles complexes, utilisez **la duplication** pour gagner du temps.
- Vérifiez toujours les **coloris en arrêt de production** avant de valider une nomenclature.
- Exportez régulièrement les nomenclatures en Excel pour audit ou partage interne.

---

✅ Vous êtes maintenant capable de gérer efficacement les fiches modèles, leurs coloris et leurs nomenclatures !
