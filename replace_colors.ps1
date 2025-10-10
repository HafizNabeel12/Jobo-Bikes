Get-ChildItem -Recurse -Include *.tsx,*.ts,*.css,*.js,*.jsx | Where-Object { $_.FullName -notlike '*\.next\*' } | ForEach-Object {
    (Get-Content $_.FullName) -replace '#58c0c2', '#12b190' | Set-Content $_.FullName
}
