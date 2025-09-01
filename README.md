# Velkomst-prosjekt

Dette prosjektet lager en personlig velkomstmelding med værdata og stemmegenerering fra ElevenLabs.

## Oppsett

1. Lag et nytt GitHub-repo og last opp disse filene.
2. Gå til **Settings → Secrets and variables → Actions → New repository secret** og legg inn:
   - `OPENAI_API_KEY`
   - `OPENWEATHER_API_KEY`
   - `ELEVENLABS_API_KEY`
   - `VOICE_ID`
3. Gå til **Actions**-fanen, velg workflow **Generer velkomst-melding**, og trykk **Run workflow**.
4. Etter kjøring finner du `velkomst.mp3` i repoet ditt.

Kos deg 🎉
