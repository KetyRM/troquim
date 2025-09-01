let isIgnite = true

function changeCard(event){
    const card = event.currentTarget
    
    const backgroundImage = isIgnite
    ? "url(./Imagens/bg-explore.svg)" 
    : "url(./Imagens/bg-iginite.svg)"
    
    isIgnite = !isIgnite
    
    card.style.backgroundImage = backgroundImage
}