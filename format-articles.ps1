# Script to format mother's day articles with proper HTML structure

$articlesPath = "c:\Users\Uchenna\Documents\Projects\vantedge\app\lib\articles\mothers-day-gift-articles"

# Function to format plain text paragraphs into proper HTML
function Format-Article {
    param(
        [string]$filePath
    )
    
    $content = Get-Content -Path $filePath -Raw
    
    # Extract the content between backticks
    $match = $content -match '`\s*([\s\S]*)\s*`'
    $innerContent = $matches[1]
    
    # Extract heading
    $headingMatch = $innerContent -match '<h2[^>]*>([^<]*)</h2>'
    $heading = $matches[1]
    
    # Split by double newlines to get paragraphs/sections
    $sections = $innerContent -split "(?:\r?\n\r?\n)+" | Where-Object { $_.Trim() -and $_ -notmatch '<h2' }
    
    $formattedContent = "<h2 class=`"text-2xl font-bold mb-4 mt-8`">$heading</h2>`n`n"
    
    foreach ($section in $sections) {
        $section = $section.Trim()
        if ($section) {
            # Check if it looks like a list of items (contains colons followed by descriptions)
            if ($section -match ':\s+' -and $section -split "`n" | Measure-Object | Select-Object -ExpandProperty Count -gt 1) {
                # Format as list items
                $formattedContent += "<ul class=`"list-disc list-inside space-y-2 mb-6 text-zinc-700 dark:text-zinc-300`">`n"
                foreach ($line in $section -split "`n") {
                    $line = $line.Trim()
                    if ($line -and $line -match '^([^:]*?):\s*(.*)') {
                        $itemTitle = $matches[1].Trim()
                        $itemDesc = $matches[2].Trim()
                        $formattedContent += "<li><strong>$itemTitle:</strong> $itemDesc</li>`n"
                    } elseif ($line -and -not ($line -match '^\d+\.')) {
                        $formattedContent += "<li>$line</li>`n"
                    }
                }
                $formattedContent += "</ul>`n`n"
            } else {
                # Regular paragraph
                $formattedContent += "<p class=`"mb-4 text-zinc-700 dark:text-zinc-300`">$section</p>`n`n"
            }
        }
    }
    
    # Wrap back in template literal
    $newContent = "export const content = `"" + "`n" + $formattedContent + "`";"
    
    return $newContent
}

# Get all .ts files and format them
Get-ChildItem -Path $articlesPath -Filter "*.ts" | ForEach-Object {
    Write-Host "Processing: $($_.Name)"
    try {
        $formatted = Format-Article -filePath $_.FullName
        $_.FullName | Out-String
    } catch {
        Write-Host "Error processing $($_.Name): $_"
    }
}

Write-Host "Formatting complete!"
