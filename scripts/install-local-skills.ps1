param(
    [string]$SourceRoot = "E:\DEV\kopymatch-skill-everything\team-claude-skills\team-claude-skills",
    [switch]$ForceSettings
)

$ErrorActionPreference = "Stop"

function Resolve-RepoRoot {
    try {
        $root = git rev-parse --show-toplevel 2>$null
        if ($LASTEXITCODE -eq 0 -and $root) {
            return (Resolve-Path -LiteralPath $root).Path
        }
    }
    catch {
        # Fall back to the script location when git is unavailable.
    }

    return (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path
}

function Copy-DirectoryContents {
    param(
        [Parameter(Mandatory = $true)][string]$Source,
        [Parameter(Mandatory = $true)][string]$Destination
    )

    if (-not (Test-Path -LiteralPath $Source -PathType Container)) {
        Write-Host "Skipping missing source directory: $Source"
        return
    }

    New-Item -ItemType Directory -Force -Path $Destination | Out-Null
    Get-ChildItem -LiteralPath $Source -Force | ForEach-Object {
        Copy-Item -LiteralPath $_.FullName -Destination $Destination -Recurse -Force
    }
}

$repoRoot = Resolve-RepoRoot
$sourcePath = (Resolve-Path -LiteralPath $SourceRoot).Path
$targetRoot = Join-Path $repoRoot ".local-ai\claude"

Write-Host "Installing local skills"
Write-Host "Source: $sourcePath"
Write-Host "Target: $targetRoot"

New-Item -ItemType Directory -Force -Path $targetRoot | Out-Null

foreach ($name in @("skills", "commands", "agents", "hooks")) {
    Copy-DirectoryContents `
        -Source (Join-Path $sourcePath $name) `
        -Destination (Join-Path $targetRoot $name)
}

$sourceSettings = Join-Path $sourcePath "settings.json"
$targetSettings = Join-Path $targetRoot "settings.json"

if (Test-Path -LiteralPath $sourceSettings -PathType Leaf) {
    if ($ForceSettings -or -not (Test-Path -LiteralPath $targetSettings -PathType Leaf)) {
        Copy-Item -LiteralPath $sourceSettings -Destination $targetSettings -Force
        Write-Host "settings.json installed"
    }
    else {
        Write-Host "settings.json already exists; keeping local copy"
    }
}
else {
    Write-Host "Skipping missing settings.json"
}

Write-Host "Local skill install complete"
Write-Host "Remember: .local-ai is ignored by git and should stay local-only."
