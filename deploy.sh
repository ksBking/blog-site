set -e
pnpm build
git add -A
git commit -m 'deploy'
git push gitee main
git push origin main
