#!/bin/bash

# CV Manager - One-Click Installer
# https://github.com/Aedankerr/site-manager

set -e

echo "╔══════════════════════════════════════════╗"
echo "║       CV Manager - Quick Installer       ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first:"
    echo "   https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if docker-compose is available
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

# Ask user which setup they want (fix for curl pipe)
echo "Which setup do you want?"
echo "  1) Complete (Admin + Public) - Recommended"
echo "  2) Admin only"
echo ""

# Read from /dev/tty instead of stdin when piped
if [ -t 0 ]; then
    read -p "Enter choice [1-2]: " choice
else
    read -p "Enter choice [1-2]: " choice < /dev/tty
fi

case $choice in
    1)
        echo ""
        echo "📦 Installing CV Manager (Complete Setup)..."
        cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  site-manager-admin:
    image: aedankerr/site-manager:latest
    container_name: site-manager-admin
    ports:
      - "3000:3000"
    volumes:
      - cv-data:/app/data
    environment:
      - NODE_ENV=production
    restart: unless-stopped

  site-manager-public:
    image: aedankerr/site-manager:latest
    container_name: site-manager-public
    ports:
      - "3001:3001"
    volumes:
      - cv-data:/app/data
    environment:
      - NODE_ENV=production
      - PUBLIC_PORT=3001
    restart: unless-stopped

volumes:
  cv-data:
EOF
        ;;
    2)
        echo ""
        echo "📦 Installing CV Manager (Admin Only)..."
        cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  site-manager:
    image: aedankerr/site-manager:latest
    container_name: site-manager
    ports:
      - "3000:3000"
    volumes:
      - cv-data:/app/data
    environment:
      - NODE_ENV=production
    restart: unless-stopped

volumes:
  cv-data:
EOF
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

# Pull and start
echo ""
echo "⬇️  Pulling latest image..."
$COMPOSE_CMD pull

echo ""
echo "🚀 Starting containers..."
$COMPOSE_CMD up -d

echo ""
echo "✅ CV Manager is now running!"
echo ""

if [ "$choice" = "1" ]; then
    echo "🌐 Access your CV Manager:"
    echo "   Admin:  http://localhost:3000"
    echo "   Public: http://localhost:3001"
else
    echo "🌐 Access your CV Manager:"
    echo "   Admin: http://localhost:3000"
fi

echo ""
echo "📚 Next steps:"
echo "   1. Open the admin interface in your browser"
echo "   2. Fill in your profile information"
echo "   3. Add your experience, skills, and projects"
echo "   4. Export or print your CV when ready!"
echo ""
echo "💡 Commands:"
echo "   View logs:  $COMPOSE_CMD logs -f"
echo "   Stop:       $COMPOSE_CMD down"
echo "   Update:     $COMPOSE_CMD pull && $COMPOSE_CMD up -d"
echo ""
echo "💖 Support development: https://github.com/Aedankerr/site-manager"
echo ""
