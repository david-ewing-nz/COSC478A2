$env:GOOGLE_API_KEY="AIzaSyA9QBxdGeyayIOfG_0AeVM6Zvo7avRbW_c"
while ($true) {
    try {
        Write-Host "Invoke-WebRequest"
        [console]::beep(1000, 50) # Beep at 1000 Hz frequency for 500 milliseconds
    }
    catch {
        Write-Host "Request failed"
        [console]::beep(500, 1000) # Different beep sound for failure, 500 Hz for 1000 milliseconds
    }
    Start-Sleep -Seconds 160 
}