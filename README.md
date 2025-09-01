# Velkomst-prosjekt

Dette repoet lager en `velkomst.mp3` med norsk stemme automatisk via GitHub Actions.

## Oppsett
1. Lag et nytt repo på GitHub og last opp alle filene i denne zip-en.
2. Gå til **Settings → Secrets and variables → Actions → New repository secret** og legg inn:
   - `OPENAI_API_KEY`
   - `OPENWEATHER_API_KEY`
   - `ELEVENLABS_API_KEY`
   - `VOICE_ID`

3. Gå til **Actions**-fanen i GitHub → Velg workflow `Generer velkomst-melding` → trykk **Run workflow**.

Da vil `velkomst.mp3` bli laget automatisk og pushet til repoet ditt.

URL for Homey Pro blir da:  
`https://raw.githubusercontent.com/<brukernavn>/<repo>/main/velkomst.mp3`
