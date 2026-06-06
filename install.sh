#!/bin/bash

# Site Manager - One-Click Installer
# https://github.com/Aedankerr/site-manager

set -e

echo "╔══════════════════════════════════════════╗"
echo "║      Site Manager - Quick Installer      ║"
echo "╚══════════════════════════════════════════╝"
echo ""

if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first:"
    echo "   https://docs.docker.com/get-docker/"
    exit 1
fi

if command -v docker-compose &> /dev/null; then
    COMPOSE_CMD="docker-compose"
elif docker compose version &> /dev/null; then
    COMPOSE_CMD="docker compose"
else
    echo "❌ Docker Compose is not available. Please install it first:"
    echo "   https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker found"
echo ""
echo "Which setup do you want?"
echo "  1) Complete (Admin + Public) - Recommended"
echo "  2) Admin only (single container serves both ports)"
echo ""

if [ -t 0 ]; then
    read -p "Enter choice [1-2]: " choice
else
    read -p "Enter choice [1-2]: " choice < /dev/tty
fi

case $choice in
    1)
        echo ""
        echo "📦 Installing Site Manager (Complete Setup)..."
        cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  site-manager-admin:
    image: aedankerr/site-manager:latest
    container_name: site-manager-admin
    ports:
      - "3010:3010"
    volumes:
      - site-manager-data:/app/data
      - site-manager-uploads:/app/uploads
    environment:
      - NODE_ENV=production
      - PORT=3010
      - PUBLIC_PORT=3011
      - DB_PATH=/app/data/site.db
    restart: unless-stopped

  site-manager-public:
    image: aedankerr/site-manager:latest
    container_name: site-manager-public
    ports:
      - "3011:3011"
    volumes:
      - site-manager-data:/app/data:ro
      - site-manager-uploads:/app/uploads:ro
    environment:
      - NODE_ENV=production
      - PUBLIC_ONLY=true
      - PUBLIC_PORT=3011
      - DB_PATH=/app/data/site.db
    restart: unless-stopped

volumes:
  site-manager-data:
  site-manager-uploads:
EOF
        ;;
    2)
        echo ""
        echo "📦 Installing Site Manager (Admin Only)..."
        cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  site-manager:
    image: aedankerr/site-manager:latest
    container_name: site-manager
    ports:
      - "3010:3010"
      - "3011:3011"
    volumes:
      - site-manager-data:/app/data
      - site-manager-uploads:/app/uploads
    environment:
      - NODE_ENV=production
      - PORT=3010
      - PUBLIC_PORT=3011
      - DB_PATH=/app/data/site.db
    restart: unless-stopped

volumes:
  site-manager-data:
  site-manager-uploads:
EOF
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "⬇️  Pulling latest image..."
$COMPOSE_CMD pull

echo ""
echo "🚀 Starting containers..."
$COMPOSE_CMD up -d

echo ""
echo "✅ Site Manager is now running!"
echo ""
echo "🌐 Access your Site Manager:"
echo "   Admin:  http://localhost:3010"
echo "   Public: http://localhost:3011"
echo ""
echo "📚 Next steps:"
echo "   1. Open the admin interface in your browser"
echo "   2. Fill in your profile information"
echo "   3. Add your experience, skills, and projects"
echo "   4. Export or print your resume/site when ready"
echo ""
echo "💡 Commands:"
echo "   View logs:  $COMPOSE_CMD logs -f"
echo "   Stop:       $COMPOSE_CMD down"
echo "   Update:     $COMPOSE_CMD pull && $COMPOSE_CMD up -d"
echo ""
echo "💖 Support development: https://github.com/Aedankerr/site-manager"
echo ""
