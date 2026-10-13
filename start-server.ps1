# Starter en liten lokal webserver og åpner siden i nettleseren.
$root = $PSScriptRoot
$l = New-Object Net.HttpListener
$l.Prefixes.Add('http://localhost:8123/')
$l.Start()
Start-Process 'http://localhost:8123/'
Write-Host 'Siden kjører på http://localhost:8123/ (lukk dette vinduet for å stoppe)'
$types = @{'.html'='text/html; charset=utf-8';'.css'='text/css';'.js'='text/javascript';'.jpg'='image/jpeg';'.jpeg'='image/jpeg';'.png'='image/png';'.webp'='image/webp'}
while ($l.IsListening) {
  $c = $l.GetContext()
  $p = $c.Request.Url.LocalPath.TrimStart('/'); if ($p -eq '') { $p = 'index.html' }
  $f = Join-Path $root $p
  if ((Test-Path $f -PathType Leaf) -and ((Split-Path $f -Parent) -eq $root)) {
    $b = [IO.File]::ReadAllBytes($f)
    $t = $types[[IO.Path]::GetExtension($f).ToLower()]; if ($t) { $c.Response.ContentType = $t }
    $c.Response.OutputStream.Write($b,0,$b.Length)
  } else { $c.Response.StatusCode = 404 }
  $c.Response.Close()
}
