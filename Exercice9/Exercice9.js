// Exercice 9 — Fonction récursive : calcul de la factorielle

function factorielle(n) {
  // Cas de base
  if (n === 0) return 1;
  // Cas récursif
  return n * factorielle(n - 1);
}

function calculate() {
  const nStr = document.getElementById('nInput').value;
  const n = Number(nStr);

  if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
    const out = document.getElementById('output');
    if (out) out.textContent = 'Entrée invalide : saisissez un entier >= 0.';
    console.error('Exercice9: entrée invalide');
    return;
  }

  try {
    const result = factorielle(n);
    const out = document.getElementById('output');
    const lines = [];
    lines.push('Calcul de la factorielle de ' + n);
    lines.push('Résultat : factorielle(' + n + ') = ' + result);
    
    if (out) out.textContent = lines.join('\n');
    console.log('Exercice9 - factorielle(' + n + ') =', result);
  } catch (e) {
    const out = document.getElementById('output');
    if (out) out.textContent = 'Erreur : ' + e.message + '\n\n(Peut-être un nombre trop grand ?)';
    console.error('Exercice9 error:', e);
  }
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
