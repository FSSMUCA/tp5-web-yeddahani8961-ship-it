// Exercice 5 — Table de multiplication dynamique

function buildMultiplicationTable(n, upto = 10) {
  const lines = [];
  for (let i = 1; i <= upto; i++) {
    lines.push(`${n} x ${i} = ${n * i}`);
  }
  return lines;
}

function renderTable() {
  const raw = document.getElementById('nInput').value;
  const n = Number(raw);
  const out = document.getElementById('output');

  if (isNaN(n)) {
    if (out) out.textContent = 'Entrée invalide : saisissez un nombre.';
    console.error('Exercice5: entrée invalide', raw);
    return;
  }

  const lines = buildMultiplicationTable(n, 10);
  if (out) out.textContent = lines.join('\n');
  console.log('Table de multiplication pour', n);
  console.log(lines.join('\n'));
}

// Lier le bouton
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('runBtn');
    if (btn) btn.addEventListener('click', renderTable);
  });
} else {
  const btn = document.getElementById('runBtn');
  if (btn) btn.addEventListener('click', renderTable);
}
