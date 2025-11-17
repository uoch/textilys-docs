# Guide Utilisateur : Fenêtre « Création Modification Client »

Ce guide vous explique comment utiliser la fenêtre **« Création Modification Client »** pour créer ou modifier les informations d’un client dans le système.

---

## Sommaire

- [Vue Générale de la Fenêtre](#vue-générale-de-la-fenêtre)
- [Onglets Principaux](#onglets-principaux)
- [Section Paramétrage](#section-paramétrage)
  - [Informations Générales du Client](#informations-générales-du-client)
  - [Paramétrage Facturation](#paramétrage-facturation)
- [Boutons d’Action](#boutons-daction)
- [Conseils et Bonnes Pratiques](#conseils-et-bonnes-pratiques)

---

## Vue Générale de la Fenêtre

La fenêtre **« Création Modification Client »** permet de gérer les données d’un client, y compris son profil, ses paramètres de facturation, son adresse, ses assurances, etc.

![Capture d'écran de la fenêtre Création Modification Client](../images/screenshot_crea_modif_client.png)


---

## Onglets Principaux

La fenêtre comporte plusieurs onglets permettant d’accéder à différentes sections des informations client :

- **Paramétrage** *(actif par défaut)* — Informations principales et facturation.
- **Adresse** — Coordonnées postales du client.
- **Informations complémentaires** — Données supplémentaires (notes, contacts, etc.).
- **Assurances** — Gestion des garanties et assurances liées au client.
- **Garanties** — Détails des garanties contractuelles.

---

## Section Paramétrage

### Informations Générales du Client

Ces champs permettent de saisir ou modifier les données fondamentales du client :

- **Code Client\*** — Identifiant unique du client. Un bouton loupe permet de rechercher un client existant.
- **Raison sociale\*** — Nom officiel de l’entreprise ou du particulier.
- **Numéro Siret** — Numéro d’identification fiscale (si applicable).
- **Client Valide** — Sélectionnez `Oui` ou `Non` pour activer/désactiver le statut du client.
- **Tiers Sage** — Champ optionnel pour lier le client à un tiers externe (ex: comptabilité Sage).
- **Qualification\*** — Sélectionnez une qualification depuis la liste déroulante (ex: Prospect, Client Actif, etc.).
- **Date validation** — Date à laquelle le client a été validé.
- **Date annulation** — Date à laquelle le client a été désactivé (si applicable).

> \* = Champ obligatoire

---

### Paramétrage Facturation

Cette section gère les paramètres liés à la facturation du client :

#### En-tête Facture Coupe

- **Code Tiers** — Code du tiers associé (avec recherche via loupe).
- **Code Client** — Code client (recherche possible).
- **Type de Facture Coupe** — Sélectionnez le type de facture (ex: `Prix négocié`, `Tarif standard`, etc.).

#### Association Tiers Client

Tableau permettant de lier plusieurs tiers à ce client avec leurs paramètres spécifiques :

| Colonne             | Description                             |
|---------------------|-----------------------------------------|
| Tiers               | Code du tiers associé                   |
| Code Client         | Code client lié                         |
| Libellé Client      | Nom ou libellé du client                |
| Type Fac Coupe      | Type de facture spécifique pour ce lien |

> 🗑️ Bouton poubelle : Supprime une ligne d’association.

---

## Boutons d’Action

Vous trouverez ces boutons sur le côté droit de la fenêtre :

- **Nouveau ➕**  
  Crée un nouveau client vide. Réinitialise tous les champs.

- **Valider ✅**  
  Vérifie la conformité des données saisies. Si tout est correct, passe à l’étape suivante (ex: enregistrement).

- **Enregistrer ✔️**  
  Sauvegarde définitivement les modifications apportées au client.

- **Quitter ❌**  
  Ferme la fenêtre sans sauvegarder les modifications non enregistrées.

---

## Conseils et Bonnes Pratiques

✅ Toujours remplir les champs obligatoires (`*`) avant d’enregistrer.  
✅ Utilisez le bouton **Valider** avant **Enregistrer** pour éviter les erreurs.  
✅ Pour les clients existants, utilisez la loupe dans le champ **Code Client** pour les retrouver rapidement.  
✅ La section **Association Tiers Client** est utile pour les clients ayant plusieurs entités commerciales ou contrats distincts.

---

> ⚠️ Attention : Les modifications non enregistrées sont perdues si vous quittez la fenêtre avec le bouton **Quitter**.

---

📌 **Version du guide : 1.0**  
📅 **Dernière mise à jour :** 10 novembre 2025
