function showResultInDomKvadrat() {
    let result = document.querySelector('#ploschadKvadrata');
    let lengthOfSideOfSquare = document.getElementById('dlinaStoroniKvadrata').value;
    return result.innerHTML = areaOfSquare (lengthOfSideOfSquare)
}

function showResultInDomPriamougolnika() {
    let result = document.querySelector('#ploschadPriamougolnika');
    let lengthOneSideRectangle = document.getElementById('pervayaStoronaPriamougolnika').value;
    let lengthSecondSideRectangle = document.getElementById('drugayaStoronaPriamougolnika').value;
    return result.innerHTML = areaOfRectangle (lengthOneSideRectangle, lengthSecondSideRectangle )
}

function showResultInDomParalelograma() {
    let result = document.querySelector('#ploschadParalelograma');
    let lengthOfSideParalelograma = document.getElementById('dlinaStoronyParalelograma').value;
    let lengthOfHeightParalelograma = document.getElementById('dlinaVisotyParalelograma').value;
    return result.innerHTML = areaOfParalelograma (lengthOfSideParalelograma, lengthOfHeightParalelograma )
}

function showResultInDomRomba() {
    let result = document.querySelector('#ploschadRomba');
    let lengthOfSideRomba = document.getElementById('dlinaStoronyRomba').value;
    let lengthOfHeightRomba = document.getElementById('dlinaVisotyRomba').value;
    return result.innerHTML = areaOfRomba (lengthOfSideRomba, lengthOfHeightRomba )
}