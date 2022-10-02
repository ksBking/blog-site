set -e
pnpm build
git add -A
git commit -m 'deploy'
git push -u origin main