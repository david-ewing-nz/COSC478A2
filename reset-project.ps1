# Define the project path (update this with your actual path)
$projectPath = "C:\GitHub\COSC478A2"

# Change to the project directory
Set-Location $projectPath

# Step 1: Delete old project-specific files and folders
Write-Host "Deleting old project-specific files and folders..."
Remove-Item -Recurse -Force .vscode  # Delete VS Code settings folder
Remove-Item -Recurse -Force node_modules  # Delete Node.js dependencies
Remove-Item -Recurse -Force data  # Delete BotPress data folder
Remove-Item -Recurse -Force logs  # Delete logs folder
Remove-Item -Recurse -Force flows  # Delete old conversation flows if needed
Remove-Item -Recurse -Force actions  # Delete custom actions if starting from scratch
Remove-Item -Recurse -Force .git  # Delete the Git repository if resetting history
Remove-Item package-lock.json -Force  # Delete the package-lock.json file

# Step 2: Reinitialize Git repository (if deleting .git folder)
Write-Host "Reinitializing Git repository..."
git init
git remote add origin https://github.com/david-ewing-nz/COSC478A2.git  # Update with your new GitHub repository URL

# Step 3: Create a new .gitignore file
Write-Host "Creating .gitignore file..."
@"
# Ignore core BotPress files and binaries
/bp/
node_modules/
data/
logs/
modules/
workspaces/

# Ignore sensitive data
.env
*.env

# Ignore OS and IDE-specific files
.DS_Store
Thumbs.db
.idea/
.vscode/
"@ | Out-File -Encoding UTF8 .gitignore

# Step 4: Clean environment variables (optional)
Write-Host "Please manually verify and remove any environment variables if necessary."

# Step 5: Restart VS Code (optional)
Write-Host "Restarting Visual Studio Code (optional step)."
Start-Process "code" -ArgumentList "$projectPath"

Write-Host "Project reset complete. You now have a clean workspace!"
