# Remove existing global folder (if necessary)
if (Test-Path "C:\botpress\data") {
    Remove-Item "C:\botpress\data" -Recurse -Force
    Write-Host "Removed existing folder: C:\bp\data"
}

# Create a symbolic link for the entire parent folder
New-Item -ItemType SymbolicLink -Path "C:\botpress\data" -Target "C:\GitHub\COSC478A2\botpress-project\data"
Write-Host "Created symbolic link: C:\botpress\data\ -> C:\GitHub\COSC478A2\botpress-project\data"