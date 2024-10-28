# Remove existing global folder (if necessary)
if (Test-Path "C:\bp\data\global") {
    Remove-Item "C:\bp\data\global" -Recurse -Force
    Write-Host "Removed existing folder: C:\bp\data\global"
}

# Create a symbolic link for the entire parent folder
New-Item -ItemType SymbolicLink -Path "C:\bp\data\global" -Target "C:\GitHub\COSC478A2\botpress-project"
Write-Host "Created symbolic link: C:\bp\data\global -> C:\GitHub\COSC478A2\botpress-project"