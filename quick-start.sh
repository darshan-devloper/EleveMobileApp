#!/bin/bash

# Figma MCP Server Quick Start Script
# This script helps you set up the Figma MCP server integration

echo "🎨 Figma MCP Server Quick Start"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.x or higher."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"

# Check if figma-mcp-server is installed
if ! command -v figma-mcp-server &> /dev/null; then
    echo "⚠️  figma-mcp-server is not installed globally."
    echo "Installing figma-mcp-server..."
    npm install -g figma-mcp-server
    if [ $? -eq 0 ]; then
        echo "✅ figma-mcp-server installed successfully"
    else
        echo "❌ Failed to install figma-mcp-server"
        exit 1
    fi
else
    echo "✅ figma-mcp-server is installed"
fi

echo ""
echo "📋 Setup Checklist:"
echo "==================="

# Check if environment file exists
if [ -f ".env.figma" ]; then
    echo "✅ Environment file (.env.figma) exists"
else
    echo "⚠️  Environment file not found"
    echo "   Creating .env.figma from template..."
    cp .env.figma.template .env.figma
    echo "   ✅ Created .env.figma - Please add your Figma API token"
fi

# Check if Cursor MCP config exists
if [ -f ".cursor/mcp.json" ]; then
    echo "✅ Cursor MCP configuration exists"
else
    echo "⚠️  Cursor MCP configuration not found"
    echo "   Please run the setup first or check the configuration"
fi

echo ""
echo "🔑 Next Steps:"
echo "=============="
echo "1. Get your Figma API token:"
echo "   - Go to https://www.figma.com/settings"
echo "   - Navigate to Account → Personal Access Tokens"
echo "   - Create a new token and copy it"
echo ""
echo "2. Update your configuration:"
echo "   - Edit .env.figma and add your token"
echo "   - Update .cursor/mcp.json with your token"
echo ""
echo "3. Create your design in Figma:"
echo "   - Use the sample-mobile-design-spec.md as a guide"
echo "   - Create components, styles, and screens"
echo ""
echo "4. Test the integration:"
echo "   - Run: node demo-figma-mcp-workflow.js"
echo "   - Or use Cursor AI with natural language commands"
echo ""
echo "📚 Documentation:"
echo "================="
echo "- Setup Guide: FIGMA_MCP_SETUP.md"
echo "- Design Spec: sample-mobile-design-spec.md"
echo "- Demo Script: demo-figma-mcp-workflow.js"
echo ""
echo "🎯 Ready to create amazing designs with AI! 🚀"