param(
    [int]$Port = 5500
)

$siteRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Write-Host "Serving portfolio from $siteRoot on http://localhost:$Port"
Write-Host "Press Ctrl+C to stop the server."
Start-Process "http://localhost:$Port"
python -m http.server $Port --directory $siteRoot
