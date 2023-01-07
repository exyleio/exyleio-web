# install dependencies if it isn't already
[[ -d node_modules ]] || npm install

# install firebase CLI if it isn't already
if ! command -v firebase &>/dev/null; then
    npm install -g firebase-tools
fi

# makes you log in if you haven't already
firebase login

# start firebase emulator in the background and continue
firebase emulators:start --only auth &

# start docker containers
docker compose up --build --remove-orphans --pull always
