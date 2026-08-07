Param(
  [string]$name
)

if (-not $name) {
  $name = Read-Host "Enter project folder name"
}

Write-Host "Creating Vite React project '$name'..."
npm create vite@latest $name -- --template react
if ($LASTEXITCODE -ne 0) { Write-Error "Vite project creation failed"; exit 1 }

$templateCss = Join-Path -Path $PSScriptRoot -ChildPath "templates/vite-react/index.css"
$destCss = Join-Path -Path (Resolve-Path $name) -ChildPath "src/index.css"

if (Test-Path $templateCss) {
  Copy-Item -Path $templateCss -Destination $destCss -Force
  Write-Host "Copied default index.css to $destCss"
} else {
  Write-Warning "Template CSS not found at $templateCss"
}

Write-Host "Next: cd $name && npm install && npm run dev"
