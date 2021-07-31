rm -rf static
cd frontend
npm run build 
mv build/index.html ../backend/templates
cp -r build/static ../backend
