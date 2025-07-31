# Figma MCP Server Setup Guide

This guide will help you set up a Figma MCP (Model Context Protocol) server to create and manage designs programmatically.

## Prerequisites

- Node.js 18.x or higher ✅ (Already installed: v22.16.0)
- Figma account with API access
- Cursor IDE (for MCP integration)

## Step 1: Get Your Figma API Token

1. Go to [Figma Account Settings](https://www.figma.com/settings)
2. Navigate to **Account** → **Personal Access Tokens**
3. Click **Create a new personal access token**
4. Give it a descriptive name (e.g., "MCP Server Token")
5. Copy the generated token (keep it secure!)

## Step 2: Configure the MCP Server

1. Copy the environment template:
   ```bash
   cp .env.figma.template .env.figma
   ```

2. Edit `.env.figma` and replace `your_figma_personal_access_token_here` with your actual token

3. Update the Cursor MCP configuration:
   - Open `.cursor/mcp.json`
   - Replace `YOUR_FIGMA_API_TOKEN_HERE` with your actual token

## Step 3: Test the Connection

1. Start the Figma MCP server:
   ```bash
   figma-mcp-server
   ```

2. In Cursor, the MCP server should now be available with these tools:
   - `get-file` - Retrieve Figma file details
   - `list-files` - List files in a Figma project
   - `get-components` - Get component information
   - `get-styles` - Get style information
   - `search-file` - Search for elements in a file

## Step 4: Create Your First Design

### Using the MCP Tools

Once connected, you can interact with Figma through natural language in Cursor:

```
"Can you get the details of my Figma file with key abc123xyz?"
"List all components in my design system file"
"Extract all text styles from my mobile app design"
"Generate React Native components based on the buttons in my Figma file"
```

### Available MCP Tools

1. **get-file-info**
   - Get basic information about a Figma file
   - Usage: Provide a Figma file URL or key

2. **get-nodes** 
   - Get specific nodes from a Figma file
   - Usage: Specify node IDs to retrieve

3. **get-components**
   - Get component information from a Figma file
   - Usage: Extract reusable components

4. **get-styles**
   - Get style information (colors, typography, effects)
   - Usage: Extract design tokens

5. **search-file**
   - Search for elements by type, name, etc.
   - Usage: Find specific design elements

6. **extract-text**
   - Extract all text elements from a Figma file
   - Usage: Get UI copy and content

## Step 5: Design-to-Code Workflow

### For React Native Development

1. **Design Phase**: Create your mobile app screens in Figma
2. **Extract Components**: Use MCP to get component data
3. **Generate Code**: Ask Cursor to create React Native components
4. **Style Integration**: Extract colors, typography, and spacing

### Example Workflow

```
1. "Get all button components from my mobile app Figma file"
2. "Generate React Native button components with these designs"
3. "Extract the color palette and create a theme file"
4. "Create navigation components based on the Figma navigation design"
```

## Troubleshooting

### Common Issues

1. **Authentication Error**: Verify your Figma API token is correct
2. **Connection Failed**: Check if the MCP server is running
3. **File Not Found**: Ensure the Figma file URL/key is valid
4. **Permission Denied**: Make sure your token has access to the file

### Debug Mode

Enable debug logging by setting:
```bash
DEBUG=figma-mcp:* figma-mcp-server
```

## Security Best Practices

1. **Never commit your API token** to version control
2. **Use environment variables** for sensitive data
3. **Regularly rotate** your API tokens
4. **Limit token permissions** to what you need

## Next Steps

1. Create a sample mobile app design in Figma
2. Test the MCP integration with your design
3. Generate React Native components from your Figma designs
4. Set up automated design-to-code workflows

## Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Model Context Protocol Docs](https://modelcontextprotocol.io/)
- [Cursor MCP Integration Guide](https://docs.cursor.com/mcp)

---

**Note**: This setup creates a bridge between your Figma designs and your development workflow, enabling AI-assisted design-to-code generation for your React Native project.