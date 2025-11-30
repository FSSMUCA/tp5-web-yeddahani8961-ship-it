// Exercice 8 — Fonction : calcul d'un total avec remise

function totalAvecRemise(total, remise) {
  return total - (total * remise / 100);
}

function calculate() {
  const totalStr = document.getElementById('totalInput').value;
  const remiseStr = document.getElementById('remiseInput').value;
  const total = Number(totalStr);
  const remise = Number(remiseStr);

  if (isNaN(total) || isNaN(remise)) {
    const out = document.getElementById('output');
    if (out) out.textContent = 'Entrée invalide : saisissez des nombres.';
    console.error('Exercice8: entrée invalide');
    return;
  }

  const final = totalAvecRemise(total, remise);
  const out = document.getElementById('output');
  const lines = [];
  lines.push('Total HT : ' + total + ' €');
  lines.push('Remise : ' + remise + ' %');
  lines.push('Montant de la remise : ' + (total * remise / 100).toFixed(2) + ' €');
  lines.push('Total TTC (après remise) : ' + final.toFixed(2) + ' €');

  if (out) out.textContent = lines.join('\n');
  console.log('Exercice8 résultats:', lines);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('calcBtn');
    if (btn) btn.addEventListener('click', calculate);
  });
} else {
  const btn = document.getElementById('calcBtn');
  if (btn) btn.addEventListener('click', calculate);
}
