set -e

echo "Deployment started ..."

git fetch origin main

(git add .) || true

(git commit -m "server yaml auto commit") || true

echo "Pulled origin master"
git pull 

echo "pushed origin master"
(git push) || true 
