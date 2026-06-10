<div align="center">
  <h1>🎂 Anniversaire Interactif</h1>
  <p><strong>Site d'anniversaire interactif – Template personnalisable.</strong></p>

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Langue](https://img.shields.io/badge/langue-Français-blue)
![Licence](https://img.shields.io/badge/licence-MIT-green)
</div>

---

## 📋 Sommaire
- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Démo](#démo)
- [Personnalisation](#personnalisation)
- [Guide pas à pas](#guide-pas-à-pas)
- [Architecture du projet](#architecture-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Technologies](#technologies)
- [Licence](#licence)

---

## 🎯 Présentation
Une expérience web interactive pour célébrer un anniversaire de manière unique et mémorable. Le site déploie une série d'animations et de découvertes — bougies virtuelles, lettre animée, timeline, polaroids, carte interactive, chasse au trésor et lettres « open when » — pour créer un voyage émotionnel sur mesure.

Ce template a été dépersonnalisé à partir d'un projet réel. L'architecture, les composants et le design sont prêts à l'emploi : il ne reste qu'à remplacer les données démo par les vôtres.

---

## ✨ Fonctionnalités
- ✅ **Bougies d'anniversaire** animées à souffler
- ✅ **Enveloppe animée** s'ouvrant sur une lettre en machine à écrire
- ✅ **Timeline interactive** retraçant des souvenirs (avec jeu de remise en ordre)
- ✅ **Galerie photo** au style polaroid avec messages cachés et hotspots
- ✅ **Carte interactive** (react-leaflet) des lieux marquants
- ✅ **Chasse au trésor** avec 7 gemmes cachées à travers le site
- ✅ **Lettres « open when »** à ouvrir au moment choisi (triste, doute, solitude, etc.)
- ✅ **Générateur infini** de raisons d'amour
- ✅ **Jeux interactifs** : attrapé d'étoiles, memory, quiz personnalisé
- ✅ **Musique d'ambiance** avec contrôle de volume
- ✅ **Password secret** et lettre finale
- ✅ **Service Worker** pour le mode hors-ligne

---

## 🎮 Démo

Le template est livré avec des données démo (prénom : **Camille**, surnom : **Cami**) pour que vous puissiez voir le site fonctionner immédiatement avant de le personnaliser.

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:5173` — tout est fonctionnel avec les anecdotes et photos fictives.

---

## 🎨 Personnalisation

Tout le contenu est centralisé dans un seul fichier : **`src/config.json`**.

| Section | Description |
|---------|-------------|
| `dates` | Date de début de relation et date de déverrouillage |
| `intro` | Texte d'accueil (poème, message) |
| `music` | Fichier audio de votre chanson |
| `sfx` | Effets sonores (portal, gemme, machine à écrire…) |
| `timeline` | Étapes clés de votre histoire (date, titre, message, photo) |
| `polaroids` | Galerie photo avec légendes et messages secrets |
| `openWhen` | Lettres à thème (tristesse, doute, courage…) |
| `mapLocations` | Lieux importants avec coordonnées GPS |
| `secrets` | Mot de passe, messages des gemmes |
| `loveReasons` | Liste de raisons d'aimer (générateur infini) |
| `finalLetter` | Lettre de fin, débloquée après toutes les gemmes |

Remplacez les valeurs démo par les vôtres, puis ajoutez vos fichiers dans :
- `public/photos/` — photos (timeline, polaroids, carte)
- `public/music/` — votre chanson (`your-song.mp3`)
- `public/sounds/` — effets sonores (optionnel)

---

## 📖 Guide pas à pas

### 1. Cloner et installer
```bash
git clone https://github.com/MattiaPARRINELLO/anniversaire-interactif-template.git
cd anniversaire-interactif-template
npm install
```

### 2. Personnaliser le contenu
Éditez `src/config.json` et remplacez :
- `Camille` → prénom de la personne
- `Cami` → son surnom
- Les dates, messages, photos, lieux, etc.

### 3. Ajouter les médias
Placez vos photos dans `public/photos/timeline/`, `public/photos/polaroids/`, `public/photos/map/`.
Ajoutez votre musique dans `public/music/`.

### 4. Tester
```bash
npm run dev
```

### 5. Construire et déployer
```bash
npm run build
```
Le dossier `dist/` contient le site prêt à déployer (Vercel, Netlify, etc.).

---

## 🏗️ Architecture du projet

```
anniversaire-interactif-template/
├── public/
│   ├── photos/          # Photos (timeline, polaroids, carte)
│   ├── music/           # Fichier audio
│   ├── sounds/          # Effets sonores
│   ├── favicon.svg      # Icône du site
│   ├── manifest.json    # PWA manifest
│   └── sw.js            # Service Worker
├── src/
│   ├── components/      # Composants React
│   │   ├── birthday/    # Page des bougies
│   │   ├── cloud/       # Nuage de mots (love reasons)
│   │   ├── control-center/ # Hub central
│   │   ├── counter/     # Compteur de visite
│   │   ├── ending/      # Écran de fin
│   │   ├── games/       # Jeux (étoiles, memory, quiz)
│   │   ├── intro/       # Introduction animée
│   │   ├── lock/        # Écran de verrouillage
│   │   ├── map/         # Carte interactive
│   │   ├── message/     # Page d'envoi de message
│   │   ├── music/       # Lecteur musique
│   │   ├── openwhen/    # Lettres "open when"
│   │   ├── polaroid/    # Galerie polaroid
│   │   ├── secrets/     # Easter eggs et gemmes
│   │   ├── timeline/    # Timeline interactive
│   │   └── ui/          # Composants d'interface réutilisables
│   ├── context/         # Contextes React (musique, secrets)
│   ├── data/            # Typages TypeScript des données
│   ├── hooks/           # Hooks personnalisés
│   ├── utils/           # Utilitaires (tracking analytics)
│   ├── config.json      # 📍 TOUT le contenu personnalisable
│   ├── App.tsx          # Point d'entrée React
│   └── main.tsx         # Bootstrap
├── scripts/
│   └── generate-a4.js   # Génère une feuille A4 avec QR code
├── a4-qrcode.html       # Feuille A4 imprimable (personnalisable)
├── index.html           # Page HTML racine
├── vite.config.ts       # Configuration Vite
└── tailwind.config.ts   # Configuration Tailwind
```

### Informations supplémentaires

- **Pas de données personnelles dans l'historique** — le repo a été créé avec un historique vierge pour protéger la vie privée.
- **Tracking analytics** — le module `src/utils/tracker.ts` est un stub vide par défaut. Si vous voulez ajouter un tracker, remplacez-le par votre propre solution.
- **Le QR code A4** — la page `a4-qrcode.html` contient un placeholder (cœur). Générez votre QR code avec `npm run generate-a4` après avoir configuré votre URL dans `scripts/generate-a4.js`.

---

## 🚀 Installation
```bash
git clone https://github.com/MattiaPARRINELLO/anniversaire-interactif-template.git
cd anniversaire-interactif-template
npm install
npm run dev
```

---

## 📖 Utilisation
Lancez `npm run dev`, ouvrez `http://localhost:5173`. Naviguez à travers les sections : soufflez les bougies, ouvrez l'enveloppe, explorez la timeline et la carte, ou lancez la chasse au trésor.

---

## 🛠️ Technologies
| Technologie | Rôle |
|-------------|------|
| React 18 | Framework frontend |
| TypeScript | Langage typé |
| Vite | Bundler et dev server |
| Tailwind CSS | Styling utilitaire |
| Framer Motion | Animations |
| react-leaflet | Cartographie interactive |
| react-router-dom | Routage |

---

## 📄 Licence
MIT — faites-en ce que vous voulez.

<div align="center">
  <sub>Fait avec ❤️ par <a href="https://github.com/MattiaPARRINELLO">MattiaPARRINELLO</a></sub>
</div>
