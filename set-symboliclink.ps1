
# Function to recreate a symbolic link
function Recreate-SymbolicLink {
    param (
        [string]$LinkPath,
        [string]$TargetPath
    )

    # Check if the symbolic link exists before removing
    if (Test-Path $LinkPath) {
        # Remove the existing symbolic link and its contents with -Recurse and -Force
        Remove-Item $LinkPath -Recurse -Force
        Write-Host "Removed existing symbolic link: $LinkPath"
    }

    # Create the new symbolic link
    New-Item -ItemType SymbolicLink -Path $LinkPath -Target $TargetPath
    Write-Host "Created symbolic link: $LinkPath -> $TargetPath"
}

# Recreate symbolic links for each directory

Recreate-SymbolicLink "C:\bp\data\global\actions"              "C:\GitHub\COSC478A2\botpress-project\actions"
Recreate-SymbolicLink "C:\bp\data\global\config"               "C:\GitHub\COSC478A2\botpress-project\config"
Recreate-SymbolicLink "C:\bp\data\global\content"              "C:\GitHub\COSC478A2\botpress-project\content"
Recreate-SymbolicLink "C:\bp\data\global\content-types"        "C:\GitHub\COSC478A2\botpress-project\content-types"
Recreate-SymbolicLink "C:\bp\data\global\data"                 "C:\GitHub\COSC478A2\botpress-project\data"
Recreate-SymbolicLink "C:\bp\data\global\examples"             "C:\GitHub\COSC478A2\botpress-project\examples"
Recreate-SymbolicLink "C:\bp\data\global\flows"                "C:\GitHub\COSC478A2\botpress-project\flows"
Recreate-SymbolicLink "C:\bp\data\global\hooks"                "C:\GitHub\COSC478A2\botpress-project\hooks"
Recreate-SymbolicLink "C:\bp\data\global\intents"              "C:\GitHub\COSC478A2\botpress-project\intents"
Recreate-SymbolicLink "C:\bp\data\global\media"                "C:\GitHub\COSC478A2\botpress-project\media"
Recreate-SymbolicLink "C:\bp\data\global\skills"               "C:\GitHub\COSC478A2\botpress-project\skills"

# Symbolic links for JSON configuration files

Recreate-SymbolicLink "C:\bp\data\global\botpress.config.json" "C:\GitHub\COSC478A2\botpress-project\botpress.config.json"
Recreate-SymbolicLink "C:\bp\data\global\workspaces.json"      "C:\GitHub\COSC478A2\botpress-project\workspaces.json"

