$htmlFiles = Get-ChildItem -Filter *.html
$texts = @()

foreach ($file in $htmlFiles) {
    if ($file.Name -match "_en" -or $file.Name -match "i18n") { continue } # Skip localized/other files just in case
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Extract text between tags >text< containing Japanese chars (Hiragana, Katakana, Kanji)
    $matches = [regex]::Matches($content, '>\s*([^<]*[ぁ-んァ-ヶ一-龠][^<]*)\s*<')
    foreach ($m in $matches) {
        $text = $m.Groups[1].Value.Trim()
        # Remove any internal newlines or excessive spaces
        $text = $text -replace '\s+', ' '
        if ($text -ne "") {
            $texts += $text
        }
    }
    
    # Extract placeholders placeholder="text"
    $matches2 = [regex]::Matches($content, 'placeholder="([^"]+[ぁ-んァ-ヶ一-龠][^"]+)"')
    foreach ($m in $matches2) {
        $text = $m.Groups[1].Value.Trim()
        $text = $text -replace '\s+', ' '
        if ($text -ne "") {
            $texts += $text
        }
    }
    
    # Extract input values value="text"
    $matches3 = [regex]::Matches($content, 'value="([^"]+[ぁ-んァ-ヶ一-龠][^"]+)"')
    foreach ($m in $matches3) {
        $text = $m.Groups[1].Value.Trim()
        $text = $text -replace '\s+', ' '
        if ($text -ne "") {
            $texts += $text
        }
    }
    
    # Extract data-i18n attributes occasionally mapped
    $matches4 = [regex]::Matches($content, 'data-i18n="([^"]+[ぁ-んァ-ヶ一-龠][^"]+)"')
    foreach ($m in $matches4) {
        $text = $m.Groups[1].Value.Trim()
        $text = $text -replace '\s+', ' '
        if ($text -ne "") {
            $texts += $text
        }
    }
}

$uniqueTexts = $texts | Select-Object -Unique | Sort-Object
$uniqueTexts | Out-File "extracted_texts.txt" -Encoding UTF8

Write-Host "Extracted $(($uniqueTexts).Count) unique Japanese strings."
