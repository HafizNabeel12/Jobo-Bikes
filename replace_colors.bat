@echo off
setlocal enabledelayedexpansion

rem Loop through each file in current directory and subdirectories
for /r %%f in (*.tsx *.ts *.css *.js *.jsx) do (
    set "file=%%f"
    echo Processing: %%f
    > tempfile.txt (
        rem Loop through each line of the file
        for /f "delims=" %%a in ('type "%%f"') do (
            set "line=%%a"
            
            rem Replace the pattern '#58c0c2' with '#12b190'
            set "line=!line:#58c0c2=#12b190!"
            
            rem Write the modified line to tempfile.txt
            echo !line!
        )
    )
    rem Replace the original file with the modified content
    move /y tempfile.txt %%f
)

endlocal
