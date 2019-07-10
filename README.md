# How to run

## 1. Install Docker
https://docs.docker.com/docker-for-mac/install/

## 2. Install ngrok
https://ngrok.com/download

## 4. Clone github repo
Download link (no signup necessary) https://github.com/LudiMM/MRI-Check-In/archive/master.zip

## 5. Extract folder and switch to highest level (same level as docker-compose.yml)
Open `Terminal` and use `cd` to switch directories

## 6. Start all docker containers
`docker-compose up` => Might take some time when you run it for the first time

## 7. Establish a tunnel in order to access the frontend from everywhere
Type `./ngrok http 3000` into console  

## 8. Open url from another device
Copy url which is displayed after you run `./ngrok http 3000`

## 9. Address the dashboard to see the saved patient data
Type '/dashboard' behind copied url

